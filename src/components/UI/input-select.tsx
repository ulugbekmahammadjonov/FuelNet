import React from 'react';
import { TextField, MenuItem, Select, InputAdornment, Box, Divider, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)(({ theme }) => ({
   // Sozlamalar
   '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      paddingRight: 0,
      '& .MuiOutlinedInput-notchedOutline': {
         borderColor: '#E9E9E9', // Normal border rang
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
         borderColor: '#E9E9E9', // Hover holatida border rang
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
         borderColor: '#E9E9E9', // Focus holatida border rang
      },
   },
}));

const CustomInputSelect: React.FC = () => {
   const [selectValue, setSelectValue] = React.useState<string>('Полный бак');

   const handleSelectChange = (event: SelectChangeEvent<string>) => {
      setSelectValue(event.target.value as string);
   };

   return (
      <Box display="flex" alignItems="center" width={'100%'} padding={'10px 16px'}>
         <StyledTextField
            variant="outlined"
            fullWidth
            InputProps={{
               endAdornment: (
                  <InputAdornment position="end" sx={{ padding: 0 }}>
                     <Divider orientation="vertical" flexItem sx={{ bgcolor: '#E9E9E9' }} />
                     <Select
                        value={selectValue}
                        onChange={handleSelectChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{
                           borderRadius: '0px 10px 10px 0px',
                           '.MuiOutlinedInput-notchedOutline': { border: 'none' }, // Borderni yashirish
                           '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }, // Focus holatida borderni yashirish
                           marginLeft: '8px',
                        }}
                     >
                        <MenuItem value="Полный бак">Полный бак</MenuItem>
                        <MenuItem value="Половина бака">Половина бака</MenuItem>
                        <MenuItem value="Четверть бака">Четверть бака</MenuItem>
                     </Select>
                  </InputAdornment>
               ),
            }}
         />
      </Box>
   );
};

export default CustomInputSelect;
