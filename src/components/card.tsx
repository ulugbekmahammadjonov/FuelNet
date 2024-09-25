
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

   const gridContainerRef = useRef<HTMLDivElement | null>(null);
   const [gap, setGap] = useState<number>(5)
   const [cardWidth, setCardWidth] = useState<number | null>(null);
   const rowCount = 3;

   const cardRef = useRef<HTMLDivElement | null>(null)
   // console.log(cardRef?.current?.clientWidth);
   useEffect(() => {
      if (cardRef.current) {
         const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
               setCardWidth(entry.contentRect.width);
            }
         });

         resizeObserver.observe(cardRef.current);

         return () => {
            resizeObserver.unobserve(cardRef.current!);
         };
      }
   }, [cardRef]);
   console.log(cardWidth);
   useEffect(() => {
      if (gridContainerRef.current) {
         const gridHeight = window.innerHeight - cardHeight - 30;
         const newRowHeight = (gridHeight - (rowCount - 1) * gap) / rowCount;
         // gridContainerRef.current.style.gridTemplateRows = `repeat(${rowCount}, ${newRowHeight}px)`;

         const newGap = Math.max(1, (gridHeight - newRowHeight * rowCount) / (rowCount - 1));
         setGap(newGap);

         const gridItems = gridContainerRef.current.querySelectorAll('.grid-item');
         gridItems.forEach(item => {
            (item as HTMLElement).style.height = `${newRowHeight}px`;
         });
      }
   }, [cardHeight, gap, cardRef]);
   const handleSelectChange = (value: number) => {
      setColumnsToShow(Number(value));
   };

   const visibleColumns = column_data.slice(0, columnsToShow * 3);

   return (

      <Box
         component={'div'}
         sx={{ margin: '0 auto ', maxWidth: '1200px', width: '100%', minHeight: '100px', height: '100%', flexGrow: 1 }}
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
               gridTemplateColumns: `repeat(${columnsToShow}, 1fr)`,
               // gridTemplateRows: `repeat(${rowCount}, 1fr)`,
               gap: `10px`,
               justifyContent: 'center',
               // maxHeight: '70vh',
               marginBottom: '20px',
               // flexGrow: 1,
               transition: 'grid-template-rows 0.1s ease',
               //  maxWidth: '1000px',
               //  aspectRatio: "4/3",
               //  maxHeight: '750px',
               // height: "auto",

            }}
         >
            {visibleColumns.map(({ digit, isActive }) => (
               <Box
                  ref={cardRef}
                  key={digit}
                  className="grid-item"
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     overflow: 'hidden',
                     gap: `calc(${cardWidth}px / ${77.3})`,
                     padding: `calc(${cardWidth}px / ${55})`,
                     width: '100%',
                     maxWidth: '240px',
                     border: isActive ? '1px solid #3ABAAA' : '1px solid #FF4E4E',
                     borderRadius: `calc(${cardWidth}px / ${23})`,
                     position: 'relative',
                     // maxHeight: { xs: '120px', md: '150px' },
                     maxHeight: `calc(${cardWidth}px / ${1.45})`,

                  }}
               >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <Typography sx={{ fontWeight: 'bold', fontSize: `calc(${cardWidth}px / ${18})` }}>
                        #{digit}
                     </Typography>
                     <Box
                        sx={{
                           fontSize: `calc(${cardWidth}px / ${22})`,
                           padding: `calc(${cardWidth}px / ${110})`,
                           color: 'secondary.main',
                           backgroundColor: isActive ? 'primary.main' : 'error.main',
                           position: 'absolute',
                           top: '0',
                           left: '0',
                           right: '0',
                           width: `calc(${cardWidth}px / ${2.6})`,
                           margin: '0 auto',
                           textAlign: 'center',
                           borderRadius: `0px 0px calc(${cardWidth}px / ${46})  calc(${cardWidth}px / ${46})`,
                        }}
                     >
                        {isActive ? 'Подключена' : 'Нет связи'}
                     </Box>
                     <AppsIcon sx={{ color: 'text.main', ':hover': { color: 'primary.main', cursor: 'pointer' }, fontSize: `calc(${cardWidth}px / ${18})` }} />
                  </Box>

                  <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', padding: '0', gap: 1 }}>
                     {card_data.map((data, index) => (
                        <Input cardWidth={cardWidth} key={index} label={data.label} defaultValue={data.value} readOnly={true} sx={{ padding: `calc(${cardWidth}px / ${77})`, fontSize: `calc(${cardWidth}px / ${22})`, }} />
                     ))}
                  </Box>
                  <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', padding: '0', gap: 1 }}>
                     <Input cardWidth={cardWidth} label="Объем (м³)" defaultValue="0" readOnly={true} sx={{ padding: "3px", fontSize: `calc(${cardWidth}px / ${19})`, flexGrow: 1 }} />
                     <Input cardWidth={cardWidth} label="Сумма (сум)" defaultValue="0" readOnly={true} sx={{ padding: "3px", fontSize: `calc(${cardWidth}px / ${19})`, flexGrow: 1 }} />
                  </Box>

                  <Box sx={{}}>
                     <CustomInputSelect cardWidth={cardWidth} />
                  </Box>
                  <Button
                     startIcon={<PlayCircleOutlineIcon sx={{ width: `calc(${cardWidth}px / ${20})`, height: `calc(${cardWidth}px / ${20})` }} />}
                     color="secondary"
                     sx={{
                        width: '100%',
                        maxHeight: `calc(${cardWidth}px / ${11})`,
                        backgroundColor: 'primary.main',
                        borderRadius: `calc(${cardWidth}px / ${46})`,
                        textTransform: 'none',
                        opacity: isActive ? 1 : 0.2,
                        pointerEvents: isActive ? 'auto' : 'none',
                        fontSize: `calc(${cardWidth}px / ${20})`,
                        padding: "0px",
                     }}
                  >
                     Старт
                  </Button>
               </Box>
            ))}
         </Box>
      </Box>

   );
};

export default CustomCard;
