var server = require('./server/server');
var ds = server.dataSources.mysql;
//var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.autoupdate(function(er) {
  if (er) throw er;
  console.log('Loopback tables updated  ');
  ds.disconnect();
});
