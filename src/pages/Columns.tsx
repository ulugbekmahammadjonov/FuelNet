import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Container from '../components/UI/customContainer';
import Card from '../components/card';
import DataTable from '../components/data-table';
import { column_transactions } from '../utils/constants';
import { row_transactions } from '../utils/constants';
import Helmet from '../components/helmet';

const Columns: React.FC = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);
  // Initial height for the card

  const handleChangePage = (event: unknown, newPage: number) => {
    setPageIndex(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPageIndex(0);
  };




  return (
    <Container>
      <Helmet title="Колонки" />
      <Box component={'div'} sx={{ height: "100vh", display: "flex", flexDirection: "column", mb: 2 }}>
        <Box sx={{ flexGrow: 1, overflow: "auto", flexShrink: 1 }}>
          <Card  /> 
        </Box>
        <Box sx={{ flexShrink: 0, width: "100%", mt: 1 }}>
          <DataTable
            rows={row_transactions}
            columns={column_transactions}
            total={row_transactions.length}
            page={pageIndex}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Columns;
