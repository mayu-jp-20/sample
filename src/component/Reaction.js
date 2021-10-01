import React from 'react';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Grid } from '@material-ui/core';

function selectColor(favorite){

    if(favorite===true){
        return "secondary";
    }else{
        return "disabled";
    }
};

function Reaction(props) {

    //const bind=props.handleFavorite.bind(this,props.id);

        return(
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    
                </Grid>
                <Grid item xs={4}>
                    <FavoriteBorderIcon color={selectColor(props.favorite)}
                    onClick={props.handleFavorite.bind(this,props.id)}/>
                </Grid>
                <Grid item xs={4}>
                    <DeleteOutlineIcon color="disabled" 
                     onClick={props.deleteTweet.bind(this,props.id)}/>
                </Grid>
            </Grid>
        );
}

export default Reaction;