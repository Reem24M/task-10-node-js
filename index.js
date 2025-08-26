const express=require('express');
const app=express();
const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
  res.send("Welcome to the home page");
});

app.listen(6060,()=>{
  console.log("Server is running on port 6060");
});
module.exports={app};