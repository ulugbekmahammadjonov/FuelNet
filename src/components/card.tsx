import React, { useState, useRef } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AppsIcon from '@mui/icons-material/Apps';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Select from '../components/UI/select';
import { card_data } from '../utils/constants';
import { column_data } from '../utils/constants';
import Input from './UI/input';
import CustomInputSelect from './UI/input-select';
import { Resizable } from 're-resizable';

const CustomCard: React.FC = () => {
   const [columnsToShow, setColumnsToShow] = useState(5);
   const [height, setHeight] = useState(500); 
   const resizableRef = useRef<Resizable>(null);
   const handleSelectChange = (value: number) => {
      setColumnsToShow(Number(value));
   };

   const visibleColumns = column_data.slice(0, columnsToShow * 3);

   return (
      <Box component={'div'} sx={{ margin: "0 auto", maxWidth: "1200px", width: "100%", minHeight: "100px", height: "100%", flexGrow: 1 }}>
         <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6" sx={{ color: "text.primary", fontWeight: "bold", fontSize: "16px" }}>Колонки</Typography>
            <Box component={"div"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
               <Typography sx={{ color: "text.primary", fontSize: "14px" }}>Вместимость ряда</Typography>
               <Select onChange={handleSelectChange} defaultValue={5} options={[3, 4, 5].map((value) => ({ value }))} />
            </Box>
         </Box>

         <Resizable
            ref={resizableRef}
            minHeight={100} 
            size={{ width: "100%", height }}
            onResizeStop={(e, direction, ref, d) => setHeight(Math.max(height + d.height, 100))} 
            enable={{ top: false, right: false, bottom: true, left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }}
            
         >
            <Grid container spacing={{ xs: 1, md: 2 }}>
               {visibleColumns.map(({ digit, isActive }) => (
                  <Grid key={digit} size={12 / columnsToShow} sx={{
                     display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden',
                  }}>
                     <Card sx={{ aspectRatio: "4/3", maxHeight: { xs: "110px",  md: "130px", lg: "140px" }, maxWidth: "300px", border: isActive ? '1px solid #3ABAAA' : '1px solid #FF4E4E', borderRadius: { xs: "5px", md: "10px" }, position: 'relative', flexGrow: 1, }}>
                        <CardContent sx={{ padding: { xs: "2px" }, flexGrow: 1 }}>
                           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                              <Typography sx={{ fontWeight: "bold", fontSize: { xs: "6px", sm: "8px", md: "12px" } }}>
                                 #{digit}
                              </Typography>
                              <Box
                                 sx={{ fontSize: { xs: "5px",sm: "8px", md: "10px" }, padding: { xs: "1px 2px", md: "1px 4px" }, color: 'secondary.main', backgroundColor: isActive ? "primary.main" : 'error.main', position: 'absolute', top: "0", left: "0", right: "0", width: { xs: "60px", md: "80px", }, margin: "0 auto", textAlign: "center", borderRadius: "0 0 10px 10px" }}>
                                 {isActive ? "Подключена" : "Нет связи"}
                              </Box>
                              <AppsIcon sx={{ color: 'text.main', ":hover": { color: 'primary.main', cursor: 'pointer' }, fontSize: { xs: "8px",sm : "10px", md: "12px", lg: "16px" } }} />
                           </Box>

                           <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', padding: "0",gap: 1 }}>
                              {card_data.map((data, index) => (
                                 <Input key={index} label={data.label} defaultValue={data.value} readOnly={true} sx={{ padding: { xs: "2px" }, maxWidth: {xs: "60px", md: "70px"}, fontSize: { xs: "6px", md: "10px" } }} />
                              ))}
                           </Box>
                           <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', padding: "0", gap: 1 }}>
                              <Input label="Объем (м³)" defaultValue="0" readOnly={true} sx={{ padding: { xs: "1px 2px", md: "2px 4px" }, maxWidth: {xs: "80px", md: "100px"} ,fontSize: { xs: "6px", md: "10px" } }} />
                              <Input label="Сумма (сум)" defaultValue="0" readOnly={true} sx={{ padding: { xs: "1px 2px", md: "2px 4px"}, maxWidth: {xs: "80px", md: "100px"}, fontSize: { xs: "6px", md: "10px" } }} />
                           </Box>

                           <Box sx={{marginTop: {xs:"1px", md:"2px"}}}>
                              <CustomInputSelect />
                           </Box>
                           <Button
                              startIcon={<PlayCircleOutlineIcon sx={{ width: {xs: "8px", sm: "10px", md: "12px", lg: "14px" }, height: {xs: "8px", sm: "10px", md: "12px", lg: "14px" } }} />}
                              color="secondary"
                              sx={{
                                 width: '100%',
                                 height: {xs: '11px', sm: '13px', md: '15px', lg: '18px' },
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
         </Resizable>
      </Box>
   );
};

export default CustomCard;
