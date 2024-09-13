import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Container from '../components/UI/customContainer';
import Card from '../components/card';
import DataTable from '../components/data-table';
import { column_transactions } from '../utils/constants';
import { row_transactions } from '../utils/constants';
import Helmet from '../components/helmet';
import { Resizable } from 're-resizable';

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

  const [cardHeight, setCardHeight] = useState<number>(270);



  return (
    <Container>
      <Helmet title="Колонки" />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        
      <Card cardHeight={cardHeight} />
        
        
          <DataTable
            rows={row_transactions}
            columns={column_transactions}
            total={row_transactions.length}
            page={pageIndex}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            cardHeight={cardHeight} setCardHeight={setCardHeight}
          />
        
      </Box>
    </Container>
  );
};

export default Columns;
