import { Radio, FormControlLabel, FormControl, FormLabel, RadioGroup, Grid, MenuItem, InputLabel, Select, Button, IconButton, Box } from '@mui/material';
import Controls from '../../Components/controls/Controls';
import React, { useState, useEffect } from 'react'
import { useForm, Form1 } from '../../Components/useForm';
import SendIcon from '@mui/icons-material/Send';
import ReplayIcon from '@mui/icons-material/Replay';
import { Stack } from '@mui/system';
import NativePickers from '../../Components/NativePickers';
import DepartmentSelect from '../../Select/departmentSelect';

import Select1 from '../../Select/Select1';
import * as studentService from "../../Services/studentServices";
import Demo from '../../Select/demo';

import DoctypeSelect from '../../Select/doctypeSelect';
import { StyledEngineProvider } from '@mui/material/styles';
import NativeSelect from '@mui/material/NativeSelect';
import { FormHelperText } from '@mui/material';

import axios from 'axios';
import {load} from '../../Contractconnect/func.js'

const initialFValues = {

    id: '',
    fullName: '',
    yearpassed: '',
    rollno: '',
    deparmentName: '',

}

export default function Form() {
    const validate = () => {
        let temp = {}
        temp.fullName = values.fullName ? "" : "This field is required"
        temp.YOP = values.YOP ? "" : "This field is required"
        temp.rollNo = values.rollNo.length >= 6 ? "" : "Minimum 6 number required"
        temp.departmentID = values.departmentID.length != 1 ? "" : "This field is required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")

    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        val, 
        setVal,
        valDep, 
        setValDep,
        handleDepChange,
        handleChnage,
        handleInputChange,
        resetForm
    } = useForm(initialFValues);

    const handleSubmit = e => {

        e.preventDefault()
        if (validate()) {
            studentService.insertStudent(values)
            window.alert('Uploaded....')
            resetForm()
        }
        if (val == null){
            setVal(10)
        }
        if (valDep == null){
            setValDep(10)
        }

    }


    const [file, setFile] = useState('');
    const [filehash, setfilehash] =useState('')
    const [refresh, setRefresh] = useState(true)
    const [contract, setContract] = useState(null);
    const [addressAccount, setAddresAccount] = useState('');
    const [fullname, setFullname] = useState('');
    const [rollno, setRollno] = useState('');
    const [yearpassed, setYearpassed] = useState('');
    const [departmentname, setDepartmentname] = useState("Computer");
    const [formDetails, setformDetails ] = useState(initialFValues);

 
 
    //const url = 'http://localhost:8000';
  
    const onSubmit = async (e)=>{
      e.preventDefault();
      
      if(file) {
        const data = new FormData();
        data.append("file", file);
        try {
          const res = await axios.post(`http://localhost:8000/uploadfile`, data)
           .then(function (response) {
            console.log(response);
            initialFValues["id"]=rollno+yearpassed;
            const { fileName, fileHash,filePath } = response.data;
         //   loadDetails();
            //console.log(initialFValues.id);
              contract.AddDetails(initialFValues.id,fullname,yearpassed,departmentname,fileHash ,{from: addressAccount});
              setRefresh(true);
          })
      } catch (error) {
          console.log('Error while calling uploadFile API ', error);
      }
       
      }
     
      
 }
    // const loadDetails = async()=>{
    //     //e.preventDefault();
    //     try {
    //         const res = await contract.AddDetails(initialFValues.id,fullname,yearpassed,departmentname,fileHash ,{from: addressAccount})
    //          .then(function (response) {
    //          setRefresh(true);
    //           console.log(response);
            
    //         })
    //     } catch (error) {
    //         console.log('Error while calling loadDetails API ', error);
    //     }
         
       
    // }
    
    useEffect(() => {
        if (!refresh) return;
        setRefresh(false);
        load().then((e) => {
            console.log(e.DocContract,e.addressAccount)
          setContract(e.DocContract);
          setAddresAccount(e.addressAccount)

        });
      });
    
    


    return (
        <Form1 onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input1
                        name="fullName"
                        label="Full Name"
                        value={fullname}
                        onChange={(e) => {setFullname(e.target.value)}}
                    />
                    <Controls.Input1
                        label="Roll No"
                        name="rollno"
                        value={rollno}
                 
                        onChange={(e) => {setRollno(e.target.value)}}
                    />
                    <Controls.Input1
                        label="Year of Passing"
                        name="yearpassed"
                        value={yearpassed}
                        onChange={(e) => {setYearpassed(e.target.value)}}
           
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
                                <input hidden accept="pdf/*" multiple type="file" onChange={(e) => setFile(e.target.files[0])} />
                            </Button>
                            <p >
                                {file.name}
                            </p>
                        </Stack>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl {...(val == 10 && { error: true })}>
                            <InputLabel shrink variant="standard" htmlFor="uncontrolled-native"  >
                                Department
                            </InputLabel>
                            <NativeSelect
                                defaultValue={10}
                                props={{

                                    id: 'uncontrolled-native',
                                }}
                                val={val}
                                onChange={(e) => handleChnage(e)}
                            >
                                <option value={10}>None</option>
                                <option value={"Computer"}>Computer</option>
                                <option value={30}>Mechanical</option>
                                <option value={"Electrical"}>Electrical</option>
                                <option value={"Information-Technology"}>Information-Technology</option>
                            </NativeSelect>
                            {val == 10 && <FormHelperText>This is required</FormHelperText>}
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth {...(valDep == 10 && { error: true })}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Document Type
                            </InputLabel>
                            <NativeSelect
                                defaultValue={10}
                                props={{
                                
                                    id: 'uncontrolled-native',
                                }}
                                val={val}
                                onChange={(e) => handleDepChange(e)}
                            >
                                <option value={10}>None</option>
                                <option value={"Transcript"}>Transcript</option>
                                <option value={"Passing Certificate"}>Passing Certificate</option>
                                <option value={"School Leaving Certificate"}>School Leaving Certificate</option>
                                <option value={"Extra Curricular"}>Extra Curricular</option>
                            </NativeSelect>
                            {valDep == 10 && <FormHelperText>This is required</FormHelperText>}
                        </FormControl>
                    </Box>
                    {/* <FormControl >
                        <StyledEngineProvider injectFirst>
                            <Demo
                                name="department"
                                value={values.departmentID}
                                onChange={handleInputChange}
                                error={errors.departmentID}
                            />
                        </StyledEngineProvider>
                    </FormControl> */}
                    <FormControl> 
                        <StyledEngineProvider injectFirst>
                            <NativePickers />
                        </StyledEngineProvider>
                    </FormControl>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" color="primary" size="large" endIcon={<SendIcon />} onClick={handleSubmit} >
                            Submit
                        </Button>
                        <Button variant="outlined" color="primary" size="large" endIcon={<ReplayIcon />} onClick={resetForm}>
                            Reset
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Form1>

    )
}
