import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Chip, Typography } from '@mui/material';

import arrowSvg from "../assets/images/arrow.svg";
import element from "../assets/images/elements.svg";
import { DataTableProps, Row } from "../types/types";
import { Resizable } from 're-resizable';
import { styled } from '@mui/material/styles';


const StyledCard = styled(Paper, { shouldForwardProp: (prop) => prop !== 'height' })<{ height: string }>(({ theme, height }) => ({
   width: '100%',
   height: height,
   minHeight: '200px',
   padding: theme.spacing(2),
   border: `1px solid ${theme.palette.divider}`,
   boxShadow: theme.shadows[1],
   borderRadius: theme.shape.borderRadius,
   backgroundColor: theme.palette.background.paper,
   position: 'relative',
   overflow: 'hidden',
   bottom: 20,
}));

const ResizeHandle = styled(Box)(({ theme }) => ({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   height: '10px',
   cursor: 'n-resize',
   background: 'rgba(0, 0, 0, 0.1)',
}));

export default function DataTable(props: DataTableProps) {
   const {
      total = 0,
      rows = [],
      columns = [],
      page = 0,
      rowsPerPage = 5,
      handleChangePage = () => { },
      handleChangeRowsPerPage = () => { },
      cardHeight = 200,
      setCardHeight = () => { },
   } = props;



   const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
   const handleRef = useRef<HTMLDivElement | null>(null);

   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      const startY = e.clientY;
      const startHeight = cardHeight;

      const handleMouseMove = (e: MouseEvent) => {
         const newHeight = startHeight - (e.clientY - startY);
         if (newHeight >= 200) { // Minimal height
            setCardHeight(newHeight);
         }
      };

      const handleMouseUp = () => {
         document.removeEventListener('mousemove', handleMouseMove);
         document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
   };

   return (
      <StyledCard height={`${cardHeight}px`}>
         <Box
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', mb: 2, backgroundColor: '#fff', borderRadius: '10px', }}
         // onMouseMove={handleMouseMove}
         // onMouseUp={handleMouseUp}
         >

            <Box
            ref={handleRef}
               component={"span"}
               sx={{ width: '100%', display: 'block', height: '8px', backgroundColor: '#ccc', borderRadius: '10px', cursor: 'row-resize', mb: 1 }}
             onMouseDown={handleMouseDown}
            ></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
               <Typography variant='subtitle1' sx={{ color: 'text.primary', fontWeight: 'bold', padding: '0px' }}>Неоплаченный операции </Typography>
               <Chip label={`${total} операции`} sx={{ fontSize: '12px', fontWeight: '500', color: '#171429', ml: 1 }} />
            </Box>
            <Box sx={{ flexGrow: 1, overflow: 'auto', flexShrink: 1, borderRadius: `10px`, backgroundColor: 'secondary.main', border: '2px solid #ccc', padding: '10px' }}>
               <Paper sx={{}}>
                  <TableContainer sx={{}}>
                     <Table size='small' sx={{ border: "1px solid #E9E9E9", }}>
                        <TableHead>
                           <TableRow>
                              {columns.map((column, index) => (
                                 <TableCell
                                    sx={{ backgroundColor: '#F9F9F9', }}
                                    key={column.id}
                                    align={column.align || 'left'}
                                 >
                                    <Box sx={{
                                       display: index === columns.length - 1 ? 'block' : 'flex',
                                       justifyContent: index === columns.length - 1 ? 'center' : 'space-between',
                                       alignItems: 'center', fontSize: { xs: '10px', md: '14px' },
                                    }}>
                                       <Box component='span' sx={{ padding: "0" }}>{column.label}</Box>
                                       {index < columns.length - 1 && (
                                          <Box component='img' src={arrowSvg} />
                                       )}
                                    </Box>
                                 </TableCell>
                              ))}
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {paginatedRows.length > 0 ? (
                              paginatedRows.map((row, rowIndex) => (
                                 <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                                    {columns.map((column, colIndex) => (
                                       <TableCell
                                          size='small'
                                          key={column.id}
                                          align={column.align || 'left'}
                                          sx={{ whiteSpace: 'nowrap' }}
                                       >
                                          {colIndex === 0 ? (
                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Box component='img' src={element} sx={{ marginRight: '8px' }} />
                                                {column.format
                                                   ? column.format(row[column.id as keyof Row])
                                                   : row[column.id as keyof Row]}
                                             </Box>
                                          ) : (
                                             colIndex < columns.length - 1 ? (
                                                column.format
                                                   ? column.format(row[column.id as keyof Row])
                                                   : row[column.id as keyof Row]
                                             ) : (
                                                <Button variant="contained" color="primary" sx={{ color: "secondary.main", padding: "4px 6px" }}>
                                                   Оплатить
                                                </Button>
                                             )
                                          )}
                                       </TableCell>
                                    ))}
                                 </TableRow>
                              ))
                           ) : (
                              <TableRow>
                                 <TableCell colSpan={columns.length} sx={{ textAlign: 'center' }}>
                                    No data available
                                 </TableCell>
                              </TableRow>
                           )}
                        </TableBody>
                     </Table>
                  </TableContainer>
               </Paper>
            </Box>
         </Box>
      </StyledCard>
   );
}