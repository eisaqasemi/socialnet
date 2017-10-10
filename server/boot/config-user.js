module.exports = function (app){
    app.once("started",function(){
        console.log("has many albums")
        app.models.User.hasMany(app.models.album, {as: 'albums', foreignKey: ''});
    })
}