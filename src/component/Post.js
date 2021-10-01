import { TextField } from "@material-ui/core";
import React from "react";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: '#e0e0e0',
    m: 1,
    border: 1,
    width: '100%',
    height: '100%',
    border: 'solid',  
};

function Post(props){
    return(
        <div className="post">
            <Box sx={{ ...commonStyles, borderRadius: '16px' }} >
                <div className="post-input">
                    <InputName changeInputName={props.changeInputName}/>
                    <InputText  changeInputContent={props.changeInputContent}/>
                    <div className="tweet-button">
                        <Button variant="contained" color="primary" 
                        onClick={props.onClick}>
                            ツイートする
                        </Button>
                    </div>
                </div>
            </Box>
       </div>
    );
}

function InputName(props){
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="なまえ"   focused onChange={props.changeInputName}/>
          
        </Box>
      );
}

function InputText(props){
    return(
        <div className="input-text">
            <TextField
              multiline
              rows={12}
              className="input-text"
              defaultValue="いまどうしてる？"
              onChange={props.changeInputContent}
            />
        </div>
    )
}

export default Post;