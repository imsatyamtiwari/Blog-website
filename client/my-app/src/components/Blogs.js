import React from "react";
import { useState,useEffect } from "react";
import './blogs.css'

function Blogs(){
const [blogsarr,setblogsarr] = useState([]);

async function getallblogs(){
    const response = await fetch('http://localhost:3000/allposts',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    const json = await response.json();
    setblogsarr(json.blogs);
}

useEffect(()=>{
getallblogs()
},[])

    return (
        <div>
           <h2>Blogs</h2>
            {blogsarr.map((blog)=>(
                <div className="blog">
                    <h3 className="title">{blog.title}</h3>
                    <div className="submission">{blog.submission}</div>
                </div>
            ))}
        </div>
    )
}

export default Blogs;