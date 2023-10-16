const express=require("express");
const cors=require("cors")
const mongoose=require("mongoose")
const app=express();

const userModel = require("../Backend/modules/UserModule")
const userRoutes=require("./routes/UserRoutes")
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/MyNetflix",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("db connected for first time")
})

app.use("/api/user",userRoutes)

app.listen(5000,console.log("server started for the first time"))