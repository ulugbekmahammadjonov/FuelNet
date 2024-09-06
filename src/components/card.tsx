   import React from 'react';
   import { Card, CardContent, Typography, Box, Button } from '@mui/material';
   import Grid from '@mui/material/Grid2';
   import AppsIcon from '@mui/icons-material/Apps';
   import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
   import { card_data } from '../utils/constants';
   import { column_data } from '../utils/constants';
   import Input from './UI/input';
   import CustomInputSelect from './UI/input-select';

   const CustomCard: React.FC = () => {
      const [selectValue, setSelectValue] = React.useState('Полный бак');

      const handleSelectChange = (event: any) => {
         setSelectValue(event.target.value);
      };

      return (
         <Grid container spacing={{ xs: 2, md: 3 }} sx={{ minWidth: 275, justifyContent: 'center', mb: 3}}>
            {column_data.map(({ digit, isActive })=> (
               <Grid
                  size={{ xs: 12, sm: 8, md: 6, lg: 4 }}
                  key={digit}
                  
                  sx={{  display  : 'flex' }} 
               >
                  <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: isActive ? '2px solid #3ABAAA' : '2px solid #FF4E4E', borderRadius: '10px', position: 'relative', height: '100%' }}>
                     <CardContent sx={{ padding: '8px 16px 16px 16px', flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                           <Typography sx={{ fontWeight: "bold" }}>
                              #{digit}
                           </Typography>
                           <Box
                              sx={{ padding: '6px 12px', color: 'secondary.main', backgroundColor: isActive ? "primary.main" : 'error.main', position: 'absolute', top: "0", left: "0", right: "0", width: "112px", margin: "0 auto", textAlign: "center", borderRadius: "0 0 10px 10px" }}>
                              {isActive ? "Подключена" : "Нет связи"}
                           </Box>
                           <AppsIcon sx={{ color: 'text.main' }} />
                        </Box>

                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                           {card_data.map((data, index) => (
                              <Input key={index} label={data.label} defaultValue={data.value} readOnly={true} padding='10px 16px'width='100px' fontSize='14px' />
                           ))}
                        </Box>

                     
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                           <Input label='Объем (м³)' defaultValue='0.000' readOnly={true} padding='10px 16px' width='150px' fontSize='20px' />
                           <Input label='Сумма (сум)' defaultValue='0.0' readOnly={true} padding='10px 16px' width='150px' fontSize='20px' />
                        </Box>

                        {/* Select and Button */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                           <CustomInputSelect />
                        </Box>
                        <Button
                           startIcon={<PlayCircleOutlineIcon />}
                           color="secondary"
                           sx={{
                              width: '100%',
                              height: '40px',
                              backgroundColor: 'primary.main',
                              borderRadius: '8px',
                              textTransform: 'none',
                              opacity: isActive ? 1 : 0.2,
                              pointerEvents: isActive ? 'auto' : 'none', 
                           }}
                        >
                           Старт
                        </Button>
                     </CardContent>
                  </Card>
               </Grid>
            ))
            }
         </Grid>
      );
   };

   export default CustomCard;
