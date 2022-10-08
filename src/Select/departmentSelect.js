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
          Department
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'Department',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>None</option>
          <option value={20}>Computer</option>
          <option value={30}>Mechanical</option>
          <option value={40}>Electrical</option>
          <option value={50}>IT</option>        
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
