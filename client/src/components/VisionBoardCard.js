import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PostCards from "./PostCards";
import CardColumns from 'react-bootstrap/CardColumns';
import "../styling/VisionBoardCards.css";


const VisionBoardCards = () => {

    const [APIcall, setAPIcall] = useState()
   
    useEffect(() => {
       API.getFavorites().then(res => {
           setAPIcall(res.data)
           console.log(res.data);
        })
      },[]);

    if(!APIcall) return <h1>Loading...</h1>

    return (
        <>
            <div id="outer-margins">
                <CardColumns>
                    {APIcall.map((favorite) => {
                        if(favorite.favorited) {
                            return (
                            <PostCards 
                                profileImage={favorite.profileImage}
                                username={favorite.username}
                                content={favorite.content}
                                title={favorite.title}
                                likes={favorite.likes}
                                favorited={favorite.favorited}
                                key={favorite._id}
                                id={favorite._id}
                                image={favorite.image}
                            />
                        )
                    }})}
                </CardColumns>
            </div>
        </>
    );
}

export default VisionBoardCards;