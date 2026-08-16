require('dotenv').config();

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const mongo_URL=process.env.MONGO_URL;
const cors = require("cors");


app.use(cors({
    origin: "http://localhost:5173"
}));
async function main() {
    await mongoose.connect(mongo_URL);
    console.log("Database Connected!");
    app.listen(process.env.PORT,()=>{
        console.log("Server is listening to port");
    })
}
main().catch((err)=>{
    console.log(err);
})

app.get("/api/test", (req, res) => {
    res.json({
        message: "Hello from Express!"
    });
});