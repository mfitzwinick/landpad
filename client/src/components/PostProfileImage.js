import React, { useState, useEffect } from "react"
import API from "../utils/API";

function PostDisplay() {
    const [APIcall, setAPIcall] = useState();
    const [profileImage, setProfileImage] = useState();
    const [userName, setUserName] = useState();
   
    useEffect(() => {
       API.getProfileImage(localStorage.getItem("id")).then(res => {
           setAPIcall(res.data)
           console.log(res.data);

           setProfileImage(res.data.image);
           setUserName(res.data.userName);
           console.log(res.data.userName);
        })
      },[]);



    return (
        <>
        <h4>@{userName}</h4>
        <img style={{width: "40px", borderRadius: "20px", display: "inline" }} src={profileImage}></img>
        </>
    )
}

export default PostDisplay;