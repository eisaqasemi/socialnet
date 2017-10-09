'use strict';

module.exports = function(Photo) {

    Photo.addPhoto=function(title,url,tags,album,cb){

        Photo.create({url,title,albumId:album}).        
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
            {arg: 'title', type:'string', http:{ source:'query'}},
            {arg: 'url', type: 'string', http:{ source:'query'}},
            {arg: 'tags', type:'array', http:{ source:'query'}},
            {arg: 'album', type:'string', http:{ source:'query'}}
          ],
        http:{verb: 'post',path:'/addPhotoWithTags'},
        returns:{type:"object",root:true},
        isStatic:true
    })
    
};
