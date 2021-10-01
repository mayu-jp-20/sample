import React from "react";
import Tweet from "./Tweet";

function Twitter(props){
 
    const tweet = props.tweets.map((tweet) => {
        return(
           <Tweet tweet={tweet} deleteTweet={props.deleteTweet} handleFavorite={props.handleFavorite} /> 
        )
       
    })

    return(
        <div className="twitter">
            {tweet}
        </div>
    );
}

export default Twitter;