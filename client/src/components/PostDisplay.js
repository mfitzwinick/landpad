import React, { useState, useEffect } from "react"
import CardColumns from 'react-bootstrap/CardColumns';
import PostCards from './PostCards';
import "../styling/PostDisplay.css";
import PostForm from "./PostForm";
import API from "../utils/API";


function PostDisplay() {
    const [APIcall, setAPIcall] = useState();
    const [profileImage, setProfileImage] = useState("");
    const [username, setUserName] = useState("");
   
    useEffect(() => {
       API.getPost().then(res => {
           setAPIcall(res.data)
        //    console.log(res.data);

        API.getProfileImage(localStorage.getItem("id")).then(res => {
            console.log(res.data);
 
            setProfileImage({ profileImage: res.data.profileImage});
            setUserName({ username: res.data.userName});
         })
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
                              profileImage={user.profileImage}
                              username={user.username}
                              title={user.title}
                              likes={user.likes}
                              favorited={user.favorited}
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