import React, { useState, useEffect } from "react"
import CardColumns from 'react-bootstrap/CardColumns';
import PostCards from './PostCards';
import PlaceholderImage from '../images/placeholder-image.png';
import "../styling/PostDisplay.css";
import PostForm from "./PostForm";
import API from "../utils/API";





function PostDisplay() {
    const [APIcall, setAPIcall] = useState()
   
    useEffect(() => {
       API.getPost().then(res => {
           setAPIcall(res.data)
        //    console.log(res.data);
        })
      },[]);

    if(!APIcall) return <h1>Loading...</h1>


    return (
        <>
        <div id="side-margins">
            <div className="row">
                <div className="col-lg-9">
                    <CardColumns>          
                       {APIcall.map((user) => {
                           return (
                           <PostCards 
                              content={user.content}
                              title={user.title}
                              likes={user.likes}
                              key={user._id}
                              id={user._id}
                              image={user.image}
                           />
                           )
                       })}
                    </CardColumns>
                </div>
                <div className="side-bar col-lg-3">
                    <PostForm />
                </div>
            </div>
        </div>
    </>
    )
}

export default PostDisplay;