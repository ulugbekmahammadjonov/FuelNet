import React from 'react';
import { Box, Typography, OutlinedInput, FormControl, FormHelperText, Select, MenuItem } from '@mui/material';
const CustomInputSelect: React.FC = () => {
   return (
      <Box sx={{ padding: "0", margin: "0" }} >
         <FormControl sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <OutlinedInput

                  type="text"


                  sx={{
                     maxWidth: '100px',
                     
                     border: 'none',
                     borderRight: 'none',
                     borderRadius: '10px 0px 0px 10px',
                     backgroundColor: '#f5f5f5',
                     outline: 'none',
                     // color: "#69757A",
                     height: {xs: '11px', sm: '13px', md: '15px', lg: '18px' },
                     fontSize: { xs: '10px', md: '12px', lg: '14px' }
                  }}

               />
               <Select defaultValue={10} sx={{ border: 'none', borderRadius: '0px 10px 10px 0px', height: {xs: '11px', sm: '13px', md: '15px', lg: '18px' }, fontSize: { xs: "6px", md: "10px" }, width: "100%" }}>
                  <MenuItem value={10}>Полный бак</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
               </Select>
            </Box>
         </FormControl>
      </Box>
   );
};

export default CustomInputSelect;
