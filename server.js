const express = require('express');
const app = express();
const mongoose = require('mongoose')
const user = require('./models/user');
const connectDB = require('./config/connectDB');


connectDB()

app.use(express.json())

// get all users
// http://localhost:4000/all
app.get('/all',(req, res)=>{
    user.find()
    .then(user => res.send(user))
    .catch(err => console.log(err))
})

// add new user
// http://localhost:4000/add
app.post('/add',(req,res)=>{
    const {name, age, email, phone, address }= req.body
    const newUser= new user({
        name,age,email,phone,address
    })
    newUser.save()
    .then(user=>res.send(user))
    .catch((err=>console.log(err))) 
})

// edit user 
//http://localhost:4000/edit/:_id
app.put('/edit/:_id',(req,res)=>{
    const {_id}=req.params
    const {name,age,email,phone,address}=req.body
    user.findByIdAndUpdate ({_id},{$set:{name,age,email,phone,address}})
    .then(user=>res.send(user))
    .catch((err=>console.log(err)))
})

  //  delete user
  //  http://localhost:4000/delete/:_id
app.delete('/delete/:_id',(req,res)=>{
    const {_id}=req.params
    user.findByIdAndRemove ({_id})
    .then(user=>res.send(user))
    .catch((err=>console.log(err)))
})









//listen to server
app.listen(4000, (err)=>{
    if(err){
        throw err
    }else{
        console.log("SERVER IS UP")
    }
});