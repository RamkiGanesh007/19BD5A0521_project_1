const express=require("express")

const mongoose=require("mongoose")

const app=express()

const url = "mongodb://127.0.0.1:27017/HospitalInventory";

const conn=mongoose.connect(url,{
    useNewUrlPrser:true,
    useUnifiedTopology: true
});

conn.then(() => {
    console.log("Connection Success!!!");
});

app.use(express.json());

const hsprouter=require('./routes/hospitals');

app.use('/hospitals',hsprouter);

const router=express.Router();

app.listen(9000,() => {
    console.log("Server Started!!")
})
