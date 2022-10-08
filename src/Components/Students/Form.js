import { Radio, FormControlLabel, FormControl, FormLabel, RadioGroup, Grid, MenuItem, InputLabel, Select, Button, IconButton } from '@mui/material';
import Controls from '../../Components/controls/Controls';
import React, { useState, useEffect } from 'react'
import { useForm, Form1 } from '../../Components/useForm';
import SendIcon from '@mui/icons-material/Send';
import ReplayIcon from '@mui/icons-material/Replay';
import { Stack } from '@mui/system';
import NativePickers from '../../Components/NativePickers';
import DepartmentSelect from '../departmentSelect';
import DoctypeSelect from '../doctypeSelect';
import { StyledEngineProvider } from '@mui/material/styles';
import axios from 'axios';

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    deparmentID: '',
    certificateType: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function Form() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);


    const [file, setFile] = useState('');
    const [filehash, setfilehash] =useState('')
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
    

    return (
        <Form1 >

            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input1
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Input1
                        label="Roll No"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                    <Controls.Input1
                        label="Year of Passing"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Button variant="contained" component="label" type="submit" value="Upload">
                                Upload Document
                                <input hidden accept="pdf/*" multiple type="file" onChange={(e) => setFile(e.target.files[0])}/>
                            </Button>
                             <p >
                            {file.name}
                           </p>
                         </Stack>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <StyledEngineProvider injectFirst>
                            <DepartmentSelect />
                        </StyledEngineProvider>
                    </FormControl>
                    <FormControl>
                        <StyledEngineProvider injectFirst>
                            <DoctypeSelect />
                        </StyledEngineProvider>
                    </FormControl>
                    <FormControl>
                        <StyledEngineProvider injectFirst>
                            <NativePickers />
                        </StyledEngineProvider>
                    </FormControl>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" color="primary" size="large" endIcon={<SendIcon />} onClick={onSubmit}>
                            Submit
                        </Button>
                        <Button variant="outlined" color="primary" size="large" endIcon={<ReplayIcon />}>
                            Reset
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Form1>

    )
}
