import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AppsIcon from '@mui/icons-material/Apps';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Select from '../components/UI/select';
import { card_data } from '../utils/constants';
import { column_data } from '../utils/constants';
import Input from './UI/input';
import CustomInputSelect from './UI/input-select';

const CustomCard: React.FC = () => {
   const [columnsToShow, setColumnsToShow] = useState(5);

  
   const handleSelectChange = (value: number) => {
      setColumnsToShow(Number(value));
   };

   
   const visibleColumns = column_data.slice(0, columnsToShow * 3); 

   return (
      <Box component={'div'} sx={{  margin: "0 auto", maxWidth: "1200px", width: "100%", display: "flex", flexDirection: "column", minHeight: "100px",height: "100%", overflow:"hidden", flexShrink: 1, flexGrow: 1 }}>
         <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6" sx={{ color: "text.primary", fontWeight: "bold", fontSize: "16px" }}>Колонки</Typography>
            <Box component={"div"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
               <Typography sx={{ color: "text.primary", fontSize: "14px" }}>Вместимость ряда</Typography>

               <Select onChange={handleSelectChange} defaultValue={5} options={[3, 4, 5].map((value) => ({ value }))} />
            </Box>
         </Box>

         <Grid container spacing={{ xs: 1, md: 2 }} >
            {visibleColumns.map(({ digit, isActive }) => (
               <Grid key={digit} size={{ xs: 12 / columnsToShow }} >
                  <Card sx={{ aspectRatio: "4/3", maxHeight: { xs: "100px", md: "120px", lg: "135px" }, maxWidth: "200px", border: isActive ? '1px solid #3ABAAA' : '1px solid #FF4E4E', borderRadius: '10px', position: 'relative' }}>
                     <CardContent sx={{ padding: { xs: "2px" }, }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                           <Typography sx={{ fontWeight: "bold", fontSize: { xs: "8px", md: "12px" } }}>
                              #{digit}
                           </Typography>
                           <Box
                              sx={{ fontSize: { xs: "6px", md: "10px" }, padding: { xs: "2px 4px", md: "1px 6px" }, color: 'secondary.main', backgroundColor: isActive ? "primary.main" : 'error.main', position: 'absolute', top: "0", left: "0", right: "0", width: { xs: "60px", md: "80px", }, margin: "0 auto", textAlign: "center", borderRadius: "0 0 10px 10px" }}>
                              {isActive ? "Подключена" : "Нет связи"}
                           </Box>
                           <AppsIcon sx={{ color: 'text.main', ":hover": { color: 'primary.main', cursor: 'pointer' }, fontSize: { xs: "10px", md: "12px", lg: "16px" } }} />
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                           {card_data.map((data, index) => (
                              <Input key={index} label={data.label} defaultValue={data.value} readOnly={true} sx={{ padding: { xs: "1px 1px" }, maxWidth: "55px", fontSize: { xs: "6px", md: "10px" } }} />
                           ))}
                        </Box>
                        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', padding: "0" }}>
                           <Input label="Объем (м³)" defaultValue="0" readOnly={true} sx={{ padding: { xs: "1px 2px" }, maxWidth: "70px", fontSize: { xs: "6px", md: "10px" } }} />
                           <Input label="Сумма (сум)" defaultValue="0" readOnly={true} sx={{ padding: { xs: "1px 2px" }, maxWidth: "70px", fontSize: { xs: "6px", md: "10px" } }} />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                           <CustomInputSelect />
                        </Box>
                        <Button
                           startIcon={<PlayCircleOutlineIcon sx={{ width: "10px" }} />}
                           color="secondary"
                           sx={{
                              width: '100%',
                              height: { xs: '13px', md: '15px', lg: '18px' },
                              backgroundColor: 'primary.main',
                              borderRadius: '10px',
                              textTransform: 'none',
                              opacity: isActive ? 1 : 0.2,
                              pointerEvents: isActive ? 'auto' : 'none',
                              fontSize: { xs: "6px", md: "10px" },

                           }}
                        >
                           Старт
                        </Button>
                     </CardContent>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default CustomCard;
