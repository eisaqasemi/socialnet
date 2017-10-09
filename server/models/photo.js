'use strict';

module.exports = function(Photo) {

    Photo.addPhotoWithTags=function(url,tags,cb){
        Photo.create({url}).then(photo=>{
            let TagCreationPromises = tags.map(tag=>{
                return Photo.app.models.tags.create({name:tag});
            })
            Promise.all(TagCreationPromises).then(tags=>{
                console.log(tags);
                cb(null,tags)
            })
        }).catch(err=>{
            cb(err)
        })

        
    }

    Photo.accepts = [
        {arg: 'url', type: 'string', http:{ source:'body'}},
        {arg: 'tags', type:'object', http:{ source:'body'}}
      ];

};
