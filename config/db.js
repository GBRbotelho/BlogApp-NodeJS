if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://Gabriel:G4br13l123@blogapp.ioiqt.mongodb.net"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}