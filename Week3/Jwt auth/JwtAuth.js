const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword='123456'
const app = express();
app.use(express.json())
const ALL_USERS = [
  {
    email: "user1@example.com",
    password: "password1",
    name: "User One"
  },
  {
    email: "user2@example.com",
    password: "password2",
    name: "User Two"
  },
  {
    email: "user3@example.com",
    password: "password3",
    name: "User Three"
  },
  // Add more user objects as needed
];

function userExist(email, password){
  
}

app.post('/signin',function(req,res){
 const username=req.body.username;
  const password=req.body.password;

  if(!userExist(username,password)){
    return res.status(403).json({message:'User doesnt exist'})
  }

  var token=jwt.sign({username:username},jwtPassword)

  return res.json({token,})
})

app.get('/users',function(req,res){
  const token=req.headers.authorization;
  try{
    const decoded=jwt.verify(token,jwtPassword);
    const username=decoded.username;
    return res.json({message:'User found',user:decoded})
  }catch(err)
})

app.listen(3000)