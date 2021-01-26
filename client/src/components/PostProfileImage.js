import React, { useState, useEffect } from "react"
import API from "../utils/API";
import "../styling/PostProfileImage.css";

function PostDisplay() {
    const [APIcall, setAPIcall] = useState();
    const [profileImage, setProfileImage] = useState();
    const [userName, setUserName] = useState();
   
    useEffect(() => {
       API.getProfileImage(localStorage.getItem("id")).then(res => {
           setAPIcall(res.data)
        //    console.log(res.data);

           setProfileImage(res.data.image);
           setUserName(res.data.userName);
        })
      },[]);



    return (
        <>     
        
        <img id="prof-icon" src={profileImage}></img>
        <p id="username">@{userName}</p>
   
        </>
    )
}

export default PostDisplay;