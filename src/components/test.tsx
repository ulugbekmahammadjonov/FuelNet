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
   FormControl,
   Input,
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
      <div style={{ backgroundColor: "white", border: "2px solid rgb(233, 233, 233)", padding: "5px", borderRadius: "8px" }}>
         {/* <form style={{ display: "flex", gap: "0px" , borderRadius: "8px", backgroundColor: "white" }}> */}
            <input
               type="text"
               style={{
                  border: "none",
                  padding: "8px",
                  flex: 1,
                  borderRight: "2px solid rgb(233, 233, 233)", // Vertikal chiziq
                  outline: "none",
                  backgroundColor: "white",
                  color: "black",
               }}
            />
            <select
               name="cars"
               style={{
                  border: "none",
                  padding: "8px",
                  borderLeft: "none", // Chegarani selectga berish shart emas
                  outline: "none",
                  backgroundColor: "white",
                  color: "black",
               }}
            >
               <option value="1">Полный бак</option>
               <option value="2"></option>
               <option value="3">3</option>
            </select>
         {/* </form> */}
      </div>

   )
};

export default SortableTable;
