import React, { useState, useEffect } from "react"
import CardColumns from 'react-bootstrap/CardColumns';
import CardComponent from './CardComponent';
import PlaceholderImage from '../images/placeholder-image.png';
import "../styling/PostDisplay.css";
import PostForm from "./PostForm";



const data = [
    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        likes: 0,
        id: 1
    },
    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        likes: 0,
        id: 2
    },    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Check out my new listing",
        likes: 0,
        id: 3
    },    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Just making sure that the styling still works!",
        likes: 0,
        id: 4
    },    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 0,
        id: 5
    },    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Check out my new listing",
        likes: 0,
        id: 6
    },    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 0,
        id: 7,
    },    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Check out my new listing",
        likes: 0,
        id: 8,
    },    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Just making sure that the styling still works!",
        likes: 0,
        id: 9,
    },    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 0,
        id: 10,
    },    {
        image: PlaceholderImage,
        username: "@jesscru",
        title: "New Listing",
        content: "Check out my new listing",
        likes: 0,
        id: 11,
    }
]

function PostDisplay() {
    const [APIcall, setAPIcall] = useState()
   
    useEffect(() => {
        setAPIcall(data)
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
                           <CardComponent 
                              username={user.username}
                              content={user.content}
                              title={user.title}
                              likes={user.likes}
                              key={user.id}
                              id={user.id}
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