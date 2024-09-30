const express=require("express");
const app=express();
const mongoose =require("mongoose");
const dotenv=require("dotenv");  
dotenv.config();
const bookroute=require("./routes/bookRoutes");


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParse:true,
    useUnifiedTopology:true,
    }).then(()=>console.log("connected to mongodbbbb"))
    .catch(err=>console.log(err));

    app.use(express.json());


    app.use("/api/users",bookroute);

    const PORT=process.env.PORT || 5000;

    app.listen(PORT,()=>
    console.log(`server is listening on PORT ${PORT}`));