import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Fillformstyle.css";
import Button from '@mui/material/Button';
import axios from 'axios';


const Filldetails = () => {

  const [file, setFile] = React.useState('');
  const [filehash, setfilehash] = React.useState('')
  const url = 'http://localhost:8000';

  const onSubmit =async(e)=>{
    e.preventDefault();

    if(file) {
      const data = new FormData();
     // data.append("name", file.name);
      data.append("file", file);
    // console.log(file);
      try {
        const res = await axios.post(`http://localhost:8000/uploadfile`, data)
         .then(function (response) {
          console.log(response);
          const { fileName, fileHash,filePath } = response.data;
          setfilehash(fileHash);
         // console.log(filehash);
        })
    } catch (error) {
        console.log('Error while calling uploadFile API ', error);
    }
     
   
    }
    console.log(filehash);
  }
  
    return(
     <div>
      <form onSubmit={onSubmit}>
        <Box className="Maincontainer">
        
        <h1>Details Form</h1>
        <TextField  label="Name" variant="outlined" margin="normal" sx={{width:'420px'}} />
        <TextField  label="Roll No." variant="outlined" margin="normal" sx={{width:'420px'}} />
        <TextField  label="Year of graduating" variant="outlined" margin="normal" sx={{width:'420px'}} />
        
       
        <input
        accept="pdf/*"
        className="inputupload"
        id="contained-button-file"
        onChange={(e) => setFile(e.target.files[0])}
        multiple
        type="file"
        
      />
      <label htmlFor="contained-button-file" className="labelfile">
        <Button variant="contained" component="span" type="submit" value="Upload" >
          Upload File
        </Button>
      </label> 
         <p >
            {file.name}
          </p>

        <Button variant="contained" size="large" type="submit" value="upload">Request</Button>
        
      

        </Box>
        </form>
     </div>
    ) 
}



export default Filldetails;