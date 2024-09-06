import { Box } from '@mui/material';
import React from 'react';
import { InputProps } from '../../types/types';


const Input: React.FC<InputProps> = ({
   label,
   width,
   defaultValue,
   padding = '10px',
   fontSize = '14px',
   readOnly = false
}) => {


 
   return (
      <Box sx={{ marginBottom: '15px' }}>
         <label style={{ display: 'block', fontSize:"12px", }}>{label}</label>
         <input

            type="text"
            defaultValue={defaultValue}
            readOnly={readOnly}
            style={{
               width: width,
               padding: padding,
               fontSize: fontSize,
               border: '1px solid #E9E9E9',
               borderRadius: '8px',
               backgroundColor: '#f5f5f5',
               outline: 'none',
               color: "#69757A",
               
            }}
         />
      </Box>
   );
};

export default Input;
