const express = require("express")
const app = express();
const userRoute = require("./userRoute")

app.use("/data",userRoute)
// localhost:3000/data/hollywood
// localhost:3000/data/bollywood


app.listen(5000,()=>{
    console.log("starting server");
})