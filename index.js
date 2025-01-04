const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.set("view engine", "ejs");

console.log(require.resolve('ejs'));

app.get("/",function(req,res){
    res.render("index.ejs");
});

app.get("/:username",(req,res)=>{
    res.send(`hello ${req.params.username}` );
  
})

app.listen(3001,function(){
    console.log("printed")
})
