import React from "react";
import { Button  as MuiButton} from '@mui/material';
export default function Button(props){
    const {text,size,variant,color,onClick, ...other} =props
    return(
        <MuiButton 
        variant={variant || "contained"}
      size={size}
        color={color || "primary"}
        onClick={onClick}
        {...other}
        >
   {text}
        </MuiButton>
    )
}