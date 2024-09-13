import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Select from '../components/UI/select';
import { card_data, column_data } from '../utils/constants';
import Input from './UI/input';
import CustomInputSelect from './UI/input-select';

interface GridContainerProps {
   cardHeight: number;
}

const CustomCard: React.FC<GridContainerProps> = ({ cardHeight }) => {
   const [columnsToShow, setColumnsToShow] = useState<number>(5);
   const [height, setHeight] = useState<number>(500);
   const gridContainerRef = useRef<HTMLDivElement | null>(null);
   const [gap, setGap] = useState<number>(5); // Gap o'zgaruvchisi
   const rowCount = 3;

   useEffect(() => {
      if (gridContainerRef.current) {
         const gridHeight = window.innerHeight - cardHeight - 30; // 30px padding
         const newRowHeight = (gridHeight - (rowCount - 1) * gap) / rowCount;
         gridContainerRef.current.style.gridTemplateRows = `repeat(${rowCount}, ${newRowHeight}px)`;

         // Dynamic gap calculation
         const newGap = Math.max(1, (gridHeight - newRowHeight * rowCount) / (rowCount - 1));
         setGap(newGap);

         const gridItems = gridContainerRef.current.querySelectorAll('.grid-item');
         gridItems.forEach(item => {
            (item as HTMLElement).style.height = `${newRowHeight}px`;
         });
      }
   }, [cardHeight, gap]); // Gap o'zgarishini kuzatamiz

   const handleSelectChange = (value: number) => {
      setColumnsToShow(Number(value));
   };

   const visibleColumns = column_data.slice(0, columnsToShow * 3);

   return (
      <Box>
         <Box
            component={'div'}
            sx={{ margin: '0 auto', maxWidth: '1200px', width: '100%', minHeight: '100px', height: '100%', flexGrow: 1 }}
         >
            <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
               <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold', fontSize: '16px' }}>Колонки</Typography>
               <Box component={'div'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
                  <Typography sx={{ color: 'text.primary', fontSize: '14px' }}>Вместимость ряда</Typography>
                  <Select onChange={handleSelectChange} defaultValue={5} options={[3, 4, 5].map(value => ({ value }))} />
               </Box>
            </Box>
            <Box
               ref={gridContainerRef}
               sx={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${columnsToShow}, 1fr)`, // Dynamic columns based on `columnsToShow`
                  gridTemplateRows: `repeat(${rowCount}, 1fr)`,
                  gap: `${gap}px`, // Dynamic gap
                  padding: '5px',
                  margin: '20px',
                  flexGrow: 1,
                  transition: 'grid-template-rows 0.1s ease',
                  // aspectRatio: "4/3",
               }}
            >
               {visibleColumns.map(({ digit, isActive }) => (
                  <Box
                     key={digit}
                     className="grid-item"
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        padding: '2px',
                        maxHeight: { xs: '110px', md: '130px', lg: '140px' },
                        maxWidth: '300px',
                        border: isActive ? '1px solid #3ABAAA' : '1px solid #FF4E4E',
                        borderRadius: { xs: '5px', md: '10px' },
                        position: 'relative',
                     }}
                  >
                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '6px', sm: '8px', md: '12px' } }}>
                           #{digit}
                        </Typography>
                        <Box
                           sx={{
                              fontSize: { xs: '5px', sm: '8px', md: '10px' },
                              padding: { xs: '1px 2px', md: '1px 4px' },
                              color: 'secondary.main',
                              backgroundColor: isActive ? 'primary.main' : 'error.main',
                              position: 'absolute',
                              top: '0',
                              left: '0',
                              right: '0',
                              width: { xs: '60px', md: '80px' },
                              margin: '0 auto',
                              textAlign: 'center',
                              borderRadius: '0 0 10px 10px',
                           }}
                        >
                           {isActive ? 'Подключена' : 'Нет связи'}
                        </Box>
                        <AppsIcon sx={{ color: 'text.main', ':hover': { color: 'primary.main', cursor: 'pointer' }, fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '16px' } }} />
                     </Box>

                     <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', padding: '0', gap: 1 }}>
                        {card_data.map((data, index) => (
                           <Input key={index} label={data.label} defaultValue={data.value} readOnly={true} sx={{ padding: '2px', maxWidth: { xs: '60px', md: '70px' }, fontSize: { xs: '6px', md: '10px' } }} />
                        ))}
                     </Box>
                     <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', padding: '0', gap: 1 }}>
                        <Input label="Объем (м³)" defaultValue="0" readOnly={true} sx={{ padding: { xs: '1px 2px', md: '2px 4px' }, maxWidth: { xs: '80px', md: '100px' }, fontSize: { xs: '6px', md: '10px' } }} />
                        <Input label="Сумма (сум)" defaultValue="0" readOnly={true} sx={{ padding: { xs: '1px 2px', md: '2px 4px' }, maxWidth: { xs: '80px', md: '100px' }, fontSize: { xs: '6px', md: '10px' } }} />
                     </Box>

                     <Box sx={{ marginTop: { xs: '1px', md: '2px' }, mb: 1 }}>
                        <CustomInputSelect />
                     </Box>
                     <Button
                        startIcon={<PlayCircleOutlineIcon sx={{ width: { xs: '8px', sm: '10px', md: '12px', lg: '14px' }, height: { xs: '8px', sm: '10px', md: '12px', lg: '14px' } }} />}
                        color="secondary"
                        sx={{
                           width: '100%',
                           height: { xs: '11px', sm: '13px', md: '15px', lg: '18px' },
                           backgroundColor: 'primary.main',
                           borderRadius: '10px',
                           textTransform: 'none',
                           opacity: isActive ? 1 : 0.2,
                           pointerEvents: isActive ? 'auto' : 'none',
                           fontSize: { xs: '6px', md: '10px' },
                        }}
                     >
                        Старт
                     </Button>
                  </Box>
               ))}
            </Box>
         </Box>
      </Box>
   );
};

export default CustomCard;
