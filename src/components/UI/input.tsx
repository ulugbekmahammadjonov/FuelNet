import { Box, Typography, OutlinedInput, FormControl, FormHelperText } from '@mui/material';
import React from 'react';
import { InputProps } from '../../types/types';
import { InputOutlined } from '@mui/icons-material';


const CustomInput: React.FC<InputProps> = ({
   label,

   defaultValue,

   readOnly = false,
   sx
}) => {



   return (
      <Box >
         <FormControl >
            {/* <label style={{ display: 'block', fontSize: "12px", }}>{label}</label> */}
            <FormHelperText sx={{ fontSize: { xs: "6px",md: "9px" }, margin: '0', whiteSpace: 'nowrap' }}>{label}</FormHelperText>
            <OutlinedInput

               type="text"
               defaultValue={defaultValue}
               readOnly={readOnly}

               sx={{

                  border: '1px solid #E9E9E9',
                  borderRadius: '8px',
                  backgroundColor: '#f5f5f5',
                  outline: 'none',
                  // color: "#69757A",
                  height: { xs: '13px', md: '15px', lg: '18px' },
                  ...sx
               }}

            />
         </FormControl>
      </Box>
   );
};

export default CustomInput;
