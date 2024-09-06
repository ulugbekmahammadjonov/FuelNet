import React, { useState } from 'react';
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   TableSortLabel,
   Paper,
} from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

interface Data {
   id: number;
   name: string;
   age: number;
}

const rows: Data[] = [
   { id: 1, name: 'Alice', age: 30 },
   { id: 2, name: 'Bob', age: 25 },
   { id: 3, name: 'Charlie', age: 35 },
];

const SortableTable: React.FC = () => {
   const [order, setOrder] = useState<'asc' | 'desc'>('asc');
   const [orderBy, setOrderBy] = useState<keyof Data>('name');

   const handleRequestSort = (property: keyof Data) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
   };

   const sortedRows = [...rows].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
      return 0;
   });

   return (
      <TableContainer component={Paper}>
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell>
                     <TableSortLabel
                        active={orderBy === 'name'}
                        direction={orderBy === 'name' ? order : 'asc'}
                        onClick={() => handleRequestSort('name')}
                     >
                        Name
                        {orderBy === 'name' ? (
                           order === 'desc' ? <ArrowDownward /> : <ArrowUpward />
                        ) : null}
                     </TableSortLabel>
                  </TableCell>
                  <TableCell>
                     <TableSortLabel
                        active={orderBy === 'age'}
                        direction={orderBy === 'age' ? order : 'asc'}
                        onClick={() => handleRequestSort('age')}
                     >
                        Age
                        {orderBy === 'age' ? (
                           order === 'desc' ? <ArrowDownward /> : <ArrowUpward />
                        ) : null}
                     </TableSortLabel>
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {sortedRows.map((row) => (
                  <TableRow key={row.id}>
                     <TableCell>{row.name}</TableCell>
                     <TableCell>{row.age}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default SortableTable;
