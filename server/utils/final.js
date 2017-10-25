
module.exports = function(path){
    return function(req,res,next){
        console.log(path)
        return res.sendFile(path+'/index.html')
    }
}