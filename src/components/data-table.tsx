import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button } from '@mui/material';

import arrowSvg from "../assets/images/arrow.svg";
import element from "../assets/images/elements.svg";
import {DataTableProps, Row} from "../types/types";



export default function DataTable(props: DataTableProps) {
   const {
      total = 0,
      rows = [],
      columns = [],
      page = 0,
      rowsPerPage = 5,
      handleChangePage = () => { },
      handleChangeRowsPerPage = () => { },
   } = props;

   const [tableHeight, setTableHeight] = useState(150); // Jadvalning balandligini boshqaramiz
   const [isDragging, setIsDragging] = useState(false); // Drag-and-drop holati
   const [startY, setStartY] = useState(0); // Drag boshlanish pozitsiyasi

   // Drag boshlanganda
   const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setStartY(event.clientY);
   };

   // Drag davomida jadvalning balandligini o'zgartirish
   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      const diffY = startY - event.clientY;
      setTableHeight((prevHeight) => Math.max(prevHeight + diffY, 100)); // Minimal balandlikni 100px qilib o'rnatamiz
      setStartY(event.clientY);
   };

   // Drag tugashi
   const handleMouseUp = () => {
      setIsDragging(false);
   };

   const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

   return (
      <Box
         sx={{ height: '100%', display: 'flex', flexDirection: 'column', mb: 2 }}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
      >
         {/* Bu qism yuqoridagi drag qilish imkoniyatini beradi */}
         <Box
            component={"span"}
            sx={{ width: '100%', display: 'block', height: '8px', backgroundColor: '#ccc', borderRadius: '10px', cursor: 'row-resize', mb: 1 }}
            onMouseDown={handleMouseDown}
         ></Box>

         {/* Jadval qismi */}
         <Box sx={{ flexGrow: 1, overflow: 'auto', height: `${tableHeight}px` }}> {/* flexGrow bilan balandlikni dinamik qilamiz */}
            <Paper sx={{ }}> {/* Bu qismda overflow: auto bilan scroll qo'shildi */}
               <TableContainer sx={{  }}> {/* Bu yerda scroll bilan barcha ma'lumotlarni ko'rish mumkin */}
                  <Table size='small' sx={{ border: "1px solid #E9E9E9" }}>
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
                                    alignItems: 'center',
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
   );
}
