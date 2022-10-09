import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { FormHelperText } from '@mui/material';

export default function NativeSelectDemo(props) {
  const { name, label, value, error = null, onChange } = props;
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl {...(error && {error:true})}>
        <InputLabel shrink variant="standard" htmlFor="uncontrolled-native"  >
        {label}
        </InputLabel>
        <NativeSelect
          defaultValue=""
          props={{
            name: {name},
            id: 'uncontrolled-native',
            onChange:{onChange},
            value:{value}
          }}
        >
          <option value="">
            <em>None</em>
          </option>
          <option  value={"Computer"}>Computer</option>
          <option  value={"Mechanical"}>Mechanical</option>
          <option  value={"Electrical"}>Electrical</option>
          <option  value={"Information-Technology"}>Information-Technology</option>
        </NativeSelect>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
}
