const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const secret = "ajghoanw4hjgwiqg";
var cors = require('cors');
const {auth} = require('./middleware')

app.use(cors());
app.use(bodyParser.json({type:'application/json'}))

const users = [];
let USER_ID_COUNTER = 1;
let PROBLEM_ID_COUNTER = 1;
const blogposts = [];

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/allposts',(req,res)=>{
res.json({
    blogs:blogposts
})

})

app.get('/allposts/:id',(req,res)=>{
    const id = req.params.id;
    const filteredpost = blogposts.find((m)=>m.problemID === parseInt(id,10));
    res.json({
        title:filteredpost.title,
        submission:filteredpost.submission
    })
})


app.post('/createPost',auth,(req,res)=>{
    let title = req.body.title;
    let submission = req.body.submission;

    const blogpost = {
        title:title,
        submission:submission,
        userID:req.userID,
        problemID:PROBLEM_ID_COUNTER++
    }

        blogposts.push(blogpost)
        return res.json({
            msg:"blogpost successfully submitted"
        })
})

app.post('/signup',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;

    if(users.find((user)=>user.username === username)){
        return res.status(403).json({msg:"username already exists"})
    }

    users.push({
        username:username,
        password:password,
        userID: USER_ID_COUNTER++
    })

    return res.json({
        msg:"singup successful"
    })
    
})

app.post('/login',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let user = users.find((user)=>user.username === username);

    if(!user){
       return res.status(403).json({msg:"user does not exist"})
    }

    if(user.password !== password){
       return res.status(403).json({msg:"password is incorrect"})
    }

    const token = jwt.sign({
        id:user.userID
    },secret)
    

    return res.json({token});
})

app.listen(3000,()=>{
    console.log("server started");
    console.log(users)
})