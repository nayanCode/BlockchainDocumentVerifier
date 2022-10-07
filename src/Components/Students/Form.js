import { Radio, FormControlLabel, FormControl, FormLabel, RadioGroup, Grid, MenuItem, InputLabel, Select, Button, IconButton } from '@mui/material';
import Controls from '../../Components/controls/Controls';
import React, { useState, useEffect } from 'react'
import { useForm, Form1 } from '../../Components/useForm';
import SendIcon from '@mui/icons-material/Send';
import { Stack } from '@mui/system';
import NativePickers from '../../Components/NativePickers';
import DepartmentSelect from '../departmentSelect';
import DoctypeSelect from '../doctypeSelect';
import { StyledEngineProvider } from '@mui/material/styles';




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


    return (
        <Form1>

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
                            <Button variant="contained" component="label">
                                Upload Document
                                <input hidden accept="pdf/*" multiple type="file" />
                            </Button>
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
                    <Stack direction="row" spacing={4}>
                        <Button variant="contained" color="success" size="large" endIcon={<SendIcon />}>
                            Submit
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Form1>

    )
}
