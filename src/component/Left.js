import React from "react";
import Weather from "./Weather";
import Post from "./Post";

function Left(props){
    return(
        <div className="left">
            <Weather/>
            <Post onClick={props.onClick} changeInputName={props.changeInputName}  changeInputContent={props.changeInputContent} />
        </div>
    );
}

export default Left;
