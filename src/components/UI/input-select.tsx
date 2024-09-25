import React from 'react';
import { Box, OutlinedInput, FormControl, Select, MenuItem } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
interface InputSelectProps {
   cardWidth: number
}
const CustomInputSelect: React.FC<InputSelectProps> = ({cardWidth}) => {
   return (
      <Box sx={{ padding: "0", margin: "0" }}>
         <FormControl sx={{ display: "flex", padding: "0", margin: "0" }}>
            <Box sx={{ display: "flex", alignItems: "center", padding: "0", margin: "0" }}>
               <OutlinedInput
                  type="text"
                  sx={{
                     border: 'none',
                     borderRight: 'none',
                     borderRadius: `calc(${cardWidth}px / ${46}) 0px 0px calc(${cardWidth}px / ${46})`,
                     backgroundColor: '#f5f5f5',
                     outline: 'none',
                     boxSizing: "border-box",
                     maxHeight: `calc(${cardWidth}px / ${11})`,
                     fontSize: `calc(${cardWidth}px / ${20})`,
                     width: "100%",
                  }}
               />
               <Select
                  autoWidth
                  defaultValue={10}
                  IconComponent={(props)=>(
                     <ArrowDropDown {...props} sx={{color: 'black', fontSize: `calc(${cardWidth}px / ${10})`}} />
                  )}
                  sx={{
                     border: 'none',
                     borderRadius: `0px calc(${cardWidth}px / ${46})  calc(${cardWidth}px / ${46}) 0px`,
                     maxHeight: `calc(${cardWidth}px / ${11})`,
                     padding: "0px",
                     fontSize: `calc(${cardWidth}px / ${20})`,
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
                  <MenuItem sx={{ padding: "2px",  fontSize: `calc(${cardWidth}px / ${20})` }} value={10}>Full tank</MenuItem>
                  <MenuItem sx={{ padding: "2px",  fontSize: `calc(${cardWidth}px / ${20})` }} value={20}>Twenty</MenuItem>
                  <MenuItem sx={{ padding: "2px",  fontSize: `calc(${cardWidth}px / ${20})` }} value={30}>Thirty</MenuItem>
               </Select>
            </Box>
         </FormControl>
      </Box>
   );
};

export default CustomInputSelect;
