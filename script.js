// const fs = require("fs");

// fs.writeFile("hello.txt","hey new new created",function(err){
//     if(err) console.error(err)
//         else console.log("done")
// })

const express = require("express");
const app = express();

app.use(express.json());          ///// used to extract the data that is sent into readable format
app.use(express.urlencoded({extended:true}));  

app.use(function(req,res,next){
    console.log("middleware chala")
    next();
})

app.use(function(req,res,next){
    console.log("middleware chala 1 more time")
    next();
})

app.get("/", (req,res)=>{
    res.send(`<h1>Atharva Bomle</h1>`)
})

app.get("/about", (req,res)=>{
    res.send("about")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000)