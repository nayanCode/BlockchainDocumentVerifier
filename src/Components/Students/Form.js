import { Radio, FormControlLabel, FormControl, FormLabel, RadioGroup, Grid, MenuItem, InputLabel, Select, Button, IconButton } from '@mui/material';
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




const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    rollNo: '',
    city: '',
    gender: 'male',
    departmentID: '',
    certificateType: '',
    issueDate: new Date(),
    isPermanent: false,
}

export default function Form() {
    const validate = () => {
        let temp = {}
        temp.fullName = values.fullName ? "" : "This field is required"
        temp.email = values.email ? "" : "This field is required"
        temp.rollNo = values.rollNo.length >= 6 ? "" : "Minimum 6 number required"
        temp.departmentID = values.departmentID != 1 ? "" : "This field is required"
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
        handleInputChange,
        resetForm
    } = useForm(initialFValues);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            studentService.insertStudent(values)
            window.alert('Uploaded....')
            resetForm()
        }

    }


    return (
        <Form1 onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input1
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input1
                        label="Roll No"
                        name="rollNo"
                        value={values.rollNo}
                        onChange={handleInputChange}
                        error={errors.rollNo}
                    />
                    <Controls.Input1
                        label="Year of Passing"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
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
                            <Button variant="contained" component="label">
                                Upload Document
                                <input hidden accept="pdf/*" multiple type="file" />
                            </Button>
                        </Stack>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl >
                        <StyledEngineProvider >
                            <DepartmentSelect
                            name="department"
                            value={values.departmentID}
                            label="Department"
                            onChange={handleInputChange}
                            error={errors.departmentID}
                            />
                        </StyledEngineProvider>
                    </FormControl>
                    
                    <FormControl>
                        <StyledEngineProvider injectFirst>
                            <DoctypeSelect />
                        </StyledEngineProvider>
                    {/* </FormControl>
                   <FormControl >
                        <StyledEngineProvider injectFirst>
                            <Demo
                            name="department"
                            value={values.departmentID}
                            onChange={handleInputChange}
                            error={errors.departmentID}
                            />
                        </StyledEngineProvider>
                    </FormControl> 
                    <FormControl> */}
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
