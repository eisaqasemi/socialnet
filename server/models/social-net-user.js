'use strict';
const util = require("util");

module.exports = function(socialNetUser) {

    socialNetUser.search = async (keywords,options,cb)=>{
        
        const token = options && options.accessToken;
        const userId = token && token.userId;

        if(!keywords) {
            let users = []
            return cb(null,users);
          }
          let text = keywords.trim().split(" ");
          let filter;
          if (text.length == 1){
            filter = { or : [
              { firstName: {  like:'%'+text[0]+'%', "options":"i" } },
              { lastName: {like:'%'+text[0]+'%', "options":"i" } }
            ]}
      
          }else{
            filter = { and : [
              { firstName: {  like:'%'+text[0]+'%', "options":"i" } },
              { lastName: {like:'%'+text[1]+'%', "options":"i" } }
            ]}
          }
          
          let searchedUsers = await socialNetUser.find({where:filter});
          let user = await socialNetUser.findById(userId).then();
          let friends = await util.promisify(user.friends)();
          let friendIds = friends.map(friend=> friend.id);
          searchedUsers = searchedUsers.filter(u=>u.id !== user.id);
          let users = searchedUsers.map(u=>{

                if(friendIds.indexOf(u.id) !== -1 ){
                  u.isFriend = true;
                }else{
                  u.isFriend = false;
                }
                return u;
          });

          cb(null,users);

    }

    socialNetUser.remoteMethod('search',{
        accepts:[
            {arg: 'keywords', type:'string', http:{ source:'query'}},
            { arg: "options", type: "object", http: "optionsFromRequest" }
          ],http:{verb: 'get',path:'/search'},
          returns:{type:"object",root:true},
          isStatic:true
      })

};
