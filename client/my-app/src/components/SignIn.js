import { useState } from "react";
import './SignIn.css'

function SignIn(){
const [username,setUsername] = useState([]);
const [password,setPassword] = useState([]);

async function loginButtonHandler(){
const data = {
    username:username,
    password:password
}

const response = await fetch('http://localhost:3000/login',{
    method:'POST',
    headers:{
        "content-Type":"application/json"
    },
    body:JSON.stringify(data)
})

const json = await response.json();
localStorage.setItem("token",json.token);
alert("login successful");
}

    return (
        <div className="SignIn">
            <h2>LOG IN</h2>
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="email" placeholder="Enter the email" required onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor="password">PASSWORD</label>
            <input type="text" name="password" placeholder="Enter the password" required onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={loginButtonHandler}>Login</button>
        </div>
    )
}

export default SignIn;