import { useState } from 'react';
import './SignUp.css'

function SignUp(){
const [username,setUsername] = useState([]);
const [password,setPassword] = useState([]);

async function submitHandler(){
    const data = {
        username:username,
        password:password
    }

    const response = await fetch("http://localhost:3000/signup",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })

   const msg = await response.json();
   alert(msg.msg);
}

    return (
        <div className="SignUp">
        <h2>SIGN UP</h2>
        <label htmlFor="email">EMAIL</label>
        <input type="text" name="email" placeholder="Enter the email" required onChange={(e)=>setUsername(e.target.value)}/>
        <label htmlFor="password">PASSWORD</label>
        <input type="text" name="password" placeholder="Enter the password" required onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={submitHandler}>Submit</button>
    </div>
    )
}

export default SignUp;