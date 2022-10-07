import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Document Type
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'Document Type',
            id: 'uncontrolled-native',
          }}
        > 
          <option value={10}>None</option>
          <option value={20}>Transcript</option>
          <option value={30}>Passing Certificate</option>
          <option value={40}>School Leaving Certificate</option>
          <option value={50}>Extra Curricular</option>      
        </NativeSelect>
      </FormControl>
    </Box>
  );
}