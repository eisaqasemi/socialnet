var server = require('./server/server');
var ds = server.dataSources.mysql;
var async = require('async');
//var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
var tables = 
[
  'ACL',
  'AccessToken',
  "RoleMapping",
  "Role",
  "photo",
  "tag",
  "album",
  "photoTag",
  'message',
  'SocialNetUser',
  'friendship'
]

async.eachSeries(tables, 
  function(table,callback){

    setTimeout(()=>{

      ds.automigrate([table],function(er) {
        if (er) {
          callback(er)
          throw er;
        }
        console.log(table,'created ');
        callback()
      });

    },1000)
    

  }
  , function(err){
  ds.disconnect();
  })
;

