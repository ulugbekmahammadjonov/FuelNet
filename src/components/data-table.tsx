import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button } from '@mui/material';

import arrowSvg from "../assets/images/arrow.svg";
import element from "../assets/images/elements.svg";
import { IColumnTransaction } from '@/types/types';

interface Row {
   [key: string]: any;
}

interface DataTableProps {
   total?: number;
   rows?: Row[];
   columns?: IColumnTransaction[];
   page?: number;
   rowsPerPage?: number;
   handleChangePage?: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
   handleChangeRowsPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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

   const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

   return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
         <TableContainer sx={{ maxHeight: 410, overflow: 'auto' }}>
            <Table stickyHeader aria-label="sticky table">
               <TableHead>
                  <TableRow>
                     {columns.map((column, index) => (
                        <TableCell
                           sx={{ backgroundColor: '#F9F9F9', whiteSpace: 'nowrap' }}
                           key={column.id}
                           align={column.align || 'left'}
                        >
                           <Box sx={{
                              display: index === columns.length - 1 ? 'block' : 'flex',
                              justifyContent: index === columns.length - 1 ? 'center' : 'space-between',
                              alignItems: 'center',
                           }}>
                              <Box component='span'>{column.label}</Box>
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
                                       <Button variant="contained" color="primary" sx={{ color: "secondary.main" }}>
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
         <Box >
            <TablePagination
               rowsPerPageOptions={[5, 10, 25, 50]}
               count={total}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
               sx={{ margin: 0 }}
            />
         </Box>
      </Paper>
   );
}
