'use strict';

module.exports = function(friendship) {
    friendship.unfriend = async (user,friend,cb)=>{
        await friendship.remove({socialNetUserId:user,friendId:friend});
        await friendship.remove({socialNetUserId:friend,friendId:user});
        cb('','ok')
    }
    
    friendship.remoteMethod('unfriend',{
        accepts:[
            {arg: 'user', type:'number', http:{ source:'query'}},
            {arg: 'friend', type:'number', http:{ source:'query'}},
          ],http:{verb: 'delete',path:'/search'},
          returns:{type:"object",root:true},
          isStatic:true
      })
};
