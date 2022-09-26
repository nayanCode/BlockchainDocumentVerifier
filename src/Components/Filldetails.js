import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Fillformstyle.css";
import Button from '@mui/material/Button';
import { MonthPicker } from '@mui/x-date-pickers';


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

const Filldetails = () => {
    return(
     <div>
        <Box className="Maincontainer">
        <h1>Details Form</h1>
        <TextField  label="Name" variant="outlined" margin="normal" sx={{width:'420px'}} />
        <TextField  label="Roll No." variant="outlined" margin="normal" sx={{width:'420px'}} />
        <TextField  label="Year of graduating" variant="outlined" margin="normal" sx={{width:'420px'}} />
        {/* <MonthPicker/> */}
        <Button variant="contained" size="large">Request</Button>
        </Box>
     </div>
    ) 
}



export default Filldetails;