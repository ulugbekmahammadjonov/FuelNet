import { Box, Typography, OutlinedInput, FormControl, FormHelperText } from '@mui/material';
import React from 'react';
import { InputProps } from '../../types/types';
import { InputOutlined } from '@mui/icons-material';


const CustomInput: React.FC<InputProps> = ({
   label,
   cardWidth,
   defaultValue,

   readOnly = false,
   sx
}) => {



   return (

      <FormControl sx={{ display: "flex", padding: "0", margin: "0" }}>
         {/* <label style={{ display: 'block', fontSize: "12px", }}>{label}</label> */}
         <FormHelperText sx={{ fontSize: `calc(${cardWidth}px / ${25.5})`, margin: '0', whiteSpace: 'nowrap' }}>{label}</FormHelperText>
         <OutlinedInput

            type="text"
            defaultValue={defaultValue}
            readOnly={readOnly}
            multiline
            sx={{

               boxSizing: "border-box",
               borderRadius: `calc(${cardWidth}px / ${46})`,
               backgroundColor: '#f5f5f5',
               outline: 'none',
               // padding: '5px 10px',
               maxHeight: `calc(${cardWidth}px / ${11})`,
               ...sx
            }}

         />
      </FormControl>

   );
};

export default CustomInput;
