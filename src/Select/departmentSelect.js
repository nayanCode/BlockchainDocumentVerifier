// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
// import { FormHelperText } from '@mui/material';

// export default function NativeSelectDemo(props) {

//     return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl {...(props.val ==10 && {error:true})}>
//         <InputLabel shrink variant="standard" htmlFor="uncontrolled-native"  >
//         Department
//         </InputLabel>
//         <NativeSelect
//           defaultValue={10}
//           props={{

//             id: 'uncontrolled-native',
//           }}
//           val={val}
//           onChange={(e)=>handleChnage(e)}
//         >
//           <option value={10}>
//             None
//           </option>
//           <option  value={"Computer"}>Computer</option>
//           <option  value={"Mechanical"}>Mechanical</option>
//           <option  value={"Electrical"}>Electrical</option>
//           <option  value={"Information-Technology"}>Information-Technology</option>
//         </NativeSelect>
//         {val ==10 && <FormHelperText>This is required</FormHelperText>}
//       </FormControl>
//     </Box>
//   );
// }
