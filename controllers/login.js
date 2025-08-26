const users=require('../data/users.json')

const Login=(req,res)=>{
  console.log("hello world");
  res.render('login',{message:"Please login"});
}
const Finduser=(req,res)=>{
  console.log("hello");
  const {username,password}=req.body;
  if(!username ||  !password) return res.send("the username and password are required");
  const user=users.find(u=>u.username===username && u.password===password);
  if(!user){  res.send("invalid username or password"); res.render('login');}
  res.send("login successful");
  res.render('index.ejs',{user:user})
}


module.exports={Login,Finduser}