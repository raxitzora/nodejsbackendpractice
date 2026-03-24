import express from "express"
const app = express()
const port = 3000;

app.get("/",(req,res)=>{
    res.send("home");
})

app.get("/books",(req,res)=>{
    res.send("Books")
})

app.listen(port,()=>{
    console.log("Server started");
    
})