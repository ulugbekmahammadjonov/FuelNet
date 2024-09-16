import React from 'react';
import { Box, OutlinedInput, FormControl, Select, MenuItem } from '@mui/material';

const CustomInputSelect: React.FC = () => {
   return (
      <Box sx={{ padding: "0", margin: "0" }}>
         <FormControl sx={{ display: "flex", padding: "0", margin: "0" }}>
            <Box sx={{ display: "flex", alignItems: "center", padding: "0", margin: "0" }}>
               <OutlinedInput
                  type="text"
                  sx={{
                     border: 'none',
                     borderRight: 'none',
                     borderRadius: '5px 0px 0px 5px',
                     backgroundColor: '#f5f5f5',
                     outline: 'none',
                     boxSizing: "border-box",
                     maxHeight: { xs: '15px', md: '20px' },
                     fontSize: { xs: '10px', md: '12px', lg: '14px' },
                     width: "100%",
                  }}
               />
               <Select
                  autoWidth
                  defaultValue={10}
                  sx={{
                     border: 'none',
                     borderRadius: '0px 5px 5px 0px',
                     maxHeight: { xs: '15px', md: '20px' },
                     padding: "0px",
                     fontSize: { xs: '7px', md: '9px' },
                     minWidth: "55%",
                     boxSizing: "border-box",
                     outline: "none",
                     margin: 0,
                  }}
                  MenuProps={{
                     PaperProps: {
                        sx: {
                           padding: 0,
                        },
                     },
                  }}
               >
                  <MenuItem sx={{ padding: "2px", fontSize: { xs: '10px', md: '12px' } }} value={10}>Полный бак</MenuItem>
                  <MenuItem sx={{ padding: "2px", fontSize: { xs: '10px', md: '12px' } }} value={20}>Twenty</MenuItem>
                  <MenuItem sx={{ padding: "2px", fontSize: { xs: '10px', md: '12px' } }} value={30}>Thirty</MenuItem>
               </Select>
            </Box>
         </FormControl>
      </Box>
   );
};

export default CustomInputSelect;
