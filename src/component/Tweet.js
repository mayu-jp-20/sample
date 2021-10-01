import React from "react";
import Reaction from "./Reaction";
import TwitterIcon from '@material-ui/icons/Twitter';
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Grid } from "@material-ui/core";

function Tweet (props){
    return(
        <div className="tweet">
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={1}>
                            <TwitterIcon color="secondary"/>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h5" component="div">{props.tweet.name}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <p className="ago-time">{props.tweet.inputTime}</p>
                        </Grid>
                        <Typography variant="body2">
                            {props.tweet.content}
                            <br />
                        </Typography>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Reaction deleteTweet={props.deleteTweet} id={props.tweet.id} favorite={props.tweet.favorite} handleFavorite={props.handleFavorite}/>
                </CardActions>
            </Card> 
        </div>
    );
}

export default Tweet;