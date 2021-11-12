import React from "react";
import TextField from '@mui/material/TextField';
import { textAlign } from "@mui/system";


export default function Textfield(props) {
    return (
          <TextField 
            id="standard-basic" 
            label={props.label}
            placeholder={props.placeholder} 
            variant="standard" 
            margin="dense"
            style={{
                margin: "30px",
                width: "600px",
                textAlign: "center"
              }}/>
    );
}