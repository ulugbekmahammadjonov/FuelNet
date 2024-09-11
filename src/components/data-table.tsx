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
import { DataTableProps, Row } from "../types/types";
import { Resizable } from 're-resizable';



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

   // const [tableHeight, setTableHeight] = useState(150);
   // const [isDragging, setIsDragging] = useState(false);
   // const [startY, setStartY] = useState(0);


   // const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
   //    setIsDragging(true);
   //    setStartY(event.clientY);
   // };


   // const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
   //    if (!isDragging) return;
   //    const diffY = startY - event.clientY;
   //    setTableHeight((prevHeight) => Math.max(prevHeight + diffY, 100));
   // };


   // const handleMouseUp = () => {
   //    setIsDragging(false);
   // };

   const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

   return (
      <Resizable style={{ padding: '10px' }} defaultSize={{ width: '100%', height: 180 }} enable={{ top: true, right: false, bottom: false, left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }}>
         <Box
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', mb: 2, backgroundColor: '#fff', borderRadius: '10px', }}
            // onMouseMove={handleMouseMove}
            // onMouseUp={handleMouseUp}
         >

            <Box
               component={"span"}
               sx={{ width: '100%', display: 'block', height: '8px', backgroundColor: '#ccc', borderRadius: '10px', cursor: 'row-resize', mb: 2 }}
               // onMouseDown={handleMouseDown}
            ></Box>

            <Box sx={{ flexGrow: 1, overflow: 'auto', flexShrink: 1, borderRadius: `10px`, backgroundColor: 'secondary.main', border: '1px solid #ccc' }}>
               <Paper sx={{}}>
                  <TableContainer sx={{}}>
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
      </Resizable>
   );
}