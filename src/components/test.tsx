import React from 'react';
import {
   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
   Box, Typography, MenuItem,
   Select
} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IColumnTransaction } from '@/types/types';
const CustomTable: React.FC = () => {
   const noData = true; // Ma'lumotlar yo'qligini ko'rsatadi, o'zingizning shartingizga qarab moslashtirasiz

   return (
      <Box >
         <FormControl sx={{ display:"inline"}}>
           
            <OutlinedInput

               type="text"
              

               sx={{

                  border: 'none',
                  borderRight: 'none',
                  borderRadius: '10px 0px 0px 10px',
                  backgroundColor: '#f5f5f5',
                  outline: 'none',
                  // color: "#69757A",
                  height: { xs: '15px', md: '20px', lg: '30px' },
                  
               }}

            />
            <Select defaultValue={10} sx={{border: 'none', borderRadius: '0px 10px 10px 0px', height: { xs: '15px', md: '20px', lg: '30px' } }}>
               <MenuItem value={10}></MenuItem>
               <MenuItem value={20}>Twenty</MenuItem>
               <MenuItem value={30}>Thirty</MenuItem>
            </Select>
         </FormControl>
      </Box>
   );
};

export default CustomTable;
