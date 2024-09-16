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
      
         <FormControl sx={{ display: "flex", padding: "0", margin: "0" }}>
            {/* <label style={{ display: 'block', fontSize: "12px", }}>{label}</label> */}
            <FormHelperText sx={{ fontSize: { xs: '7px', md: '9px' }, margin: '0', whiteSpace: 'nowrap' }}>{label}</FormHelperText>
            <OutlinedInput

               type="text"
               defaultValue={defaultValue}
               readOnly={readOnly}
               multiline
               sx={{

                  boxSizing: "border-box",
                  borderRadius: '5px',
                  backgroundColor: '#f5f5f5',
                  outline: 'none',
                  // padding: '5px 10px',
                  maxHeight: { xs: '15px', md: '20px',  },
                  ...sx
               }}

            />
         </FormControl>
    
   );
};

export default CustomInput;
