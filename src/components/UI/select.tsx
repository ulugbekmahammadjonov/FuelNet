import { Box } from '@mui/material';
import React, { ChangeEvent } from 'react';

interface SelectProps {
   options: { value: number | string; }[];
   defaultValue?: string | number;
   onChange: (value: string | number) => void;
}

const Select: React.FC<SelectProps> = ({ options, defaultValue, onChange }) => {

   const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value);
   };

   return (
      <Box  component={'div'} sx={{ bgcolor: 'secondary.main' }}>
         <select defaultValue={defaultValue} onChange={handleChange} style={{ backgroundColor: '#fff', color: "#000", outline: 'none', borderRadius: '3px', }}>
            {options.map(option => (
               <option key={option.value} value={option.value}>
                  {option.value}
               </option>
            ))}
         </select>
      </Box>
   );
};

export default Select;
