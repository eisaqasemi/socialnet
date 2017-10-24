'use strict';
const _ = require('lodash');
const util = require("util");
module.exports = function(Photo) {
    Photo.disableRemoteMethodByName('create');
    Photo.addPhoto= function(data,options,cb){
        const token = options && options.accessToken;
        const userId = token && token.userId;
        const {title,url,album,privacy} = data;
        const tags = data.tags || []
        Photo.create({url,title,albumId:album,privacy,ownerId:userId}).        
        then(photo=>{
            let TagCreationPromises = tags.map(tag=>{
                return Photo.app.models.tag.upsertWithWhere({name:tag},{name:tag});
            })
            Promise.all(TagCreationPromises)
            .then(tags=>{
                let PhotoTagCreationPromises = tags.map(tag=>{
                    return Photo.app.models.photoTag.create({tagId:tag.id,photoId:photo.id})
                });
                
                Promise.all(PhotoTagCreationPromises).then(PhotoTag=>{
                    cb(null,PhotoTag)
                })
            })
        }).catch(err=>{
            cb(err)
        })
    }

    Photo.remoteMethod('addPhoto',{
        accepts:[
            {arg: 'data', type:'object', http:{ source:'body'}},
            { arg: "options", type: "object", http: "optionsFromRequest" }
          ],
        http:{verb: 'post',path:'/'},
        returns:{type:"object",root:true},
        isStatic:true
    })

    Photo.disableRemoteMethodByName('updateAttributes');
    Photo.editPhoto= function(id,data,cb){
        let self = this;
        const {title,url,tags,album,privacy} = data;
        Photo.update({id},{url,title,albumId:album,privacy}).        
        then(()=>{
            
            let TagCreationPromises = tags.map(tag=>{
                return Photo.app.models.tag.upsertWithWhere({name:tag},{name:tag});
            })
            return Promise.all(TagCreationPromises);
        })
        .then(tags=>{
            
            self.tags = tags;
            return Photo.app.models.photoTag.remove({photoId:id})
        })
        .then(()=>{
            
            let PhotoTagCreationPromises = self.tags.map(tag=>{
                 Photo.app.models.photoTag.create({tagId:tag.id,photoId:id}) 
            });
            return Promise.all(PhotoTagCreationPromises)
        })        
        .then(()=>{
            
            return cb(null,'success')  
        
        }).catch(err=>{
            cb(err)
        })
    }

    Photo.remoteMethod('editPhoto',{
        accepts:[
            {arg: 'id', type:'number', required:true},
            {arg: 'data', type:'object', http:{ source:'body'}}
          ],
        http:{verb: 'patch',path:'/:id'},
        returns:{type:"object",root:true},
        isStatic:true
    })

    Photo.disableRemoteMethodByName('find');

    Photo.getPhotos= async function(sort,order,options,cb){
        const token = options && options.accessToken;
        const userId = token && token.userId;
        let app = Photo.app;
        let photos;
        let albumIds = await app.models.album.
            find({where:{socialNetUserId:userId}}).
            then(albums=>albums.map(album=>album.id))
        let user = await app.models.SocialNetUser.findById(userId);
        let friends = await util.promisify(user.friends)()
        let friendIds = friends.map(friend=>friend.id);

        if(sort){
            let sortBy;
            switch(sort){
                case 'title':
                case 'createdAt':
                    photos = await app.models.Photo.find({where:{or:[
                        {albumId:{inq:albumIds}},
                        {privacy:"0"},
                        {ownerId:{inq:friendIds}}
                    ]},order:sort+' '+order,include:['tags','album','owner']});
                    break;
                case 'tags':
                    let photosIds = await app.models.Photo
                        .find({where:{or:[
                            {albumId:{inq:albumIds}},
                            {privacy:"0"},
                            {ownerId:{inq:friendIds}}
                        ]}})
                        .then(photos=>photos.map(photo=>photo.id))
                    photos = await app.models.tag.find({where:{photoId:{inq:photosIds}},order:'name '+order,include:{photos:['tags','album','owner']}})
                    break;
                default:
                    photos = await app.models.Photo.find({where:{or:[
                        {albumId:{inq:albumIds}},
                        {privacy:"0"},
                        {ownerId:{inq:friendIds}}
                    ]},include:['tags','album','owner']});
            }
        }else{
            photos = await app.models.Photo.find({where:{or:[
                {albumId:{inq:albumIds}},
                {privacy:"0"},
                {ownerId:{inq:friendIds}}
            ]},include:['tags','album','owner']});
        }
        cb(null,photos);
    }

    Photo.remoteMethod('getPhotos',{
        accepts:[
            {arg: 'sort', type:'string', http:{ source:'query'}},
            {arg: 'order', type: 'string', http:{ source:'query'}},
            { arg: "options", type: "object", http: "optionsFromRequest" }
          ],
        http:{verb: 'get',path:'/'},
        returns:{type:"object",root:true},
        isStatic:true
    })
    
};
