import { useState } from 'react';
import './Main.css'

function Main(){
const [title,setTitle] = useState([]);
const [blog,setBlog] = useState([]);


async function blogcreationhandler(){
    const data = {
        title:title,
        submission:blog
    }

    const response = await fetch('http://localhost:3000/createPost',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })

    const json = await response.json();
    alert(json.msg);
}

    return (
        <div className='Main'>
            <textarea className='title' placeholder='Title of the blog' onChange={(e)=>setTitle(e.target.value)}></textarea>
            <textarea className='blog-content' placeholder='Write the blog here' onChange={(e)=>setBlog(e.target.value)}></textarea>
            <button onClick={blogcreationhandler}>Submit</button>
        </div>
    )
}

export default Main;