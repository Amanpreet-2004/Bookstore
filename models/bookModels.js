const mongoose=require("mongoose");

const bookschema=new
mongoose.Schema({
    title:String,
    name:String,
    author:String,
});
module.exports=mongoose.model("Book",bookschema);
