import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, Theme } from '@mui/material';
import Container from '../components/UI/customContainer';
import Card from '../components/card';
import DataTable from '../components/data-table';
import { column_transactions } from '../utils/constants';
import { row_transactions } from '../utils/constants';
import Helmet from '../components/helmet';

const Columns: React.FC = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState<number>(200);

  // const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));

  // useEffect(() => {
  //   if (isSmallScreen) {
  //     setCardHeight(380);
  //   } else {
  //     setCardHeight(250);
  //   }
  // }, [  isSmallScreen]); // Bu effect media query natijasiga qarab faqat ekranning o'zgarishi bilan ishlaydi

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
      <Box sx={{ display: "grid", gridTemplateRows: "1fr auto", height: "100vh"  }}>
        <Card cardHeight={cardHeight} />
        <Box sx={{  display: 'flex', flexDirection: 'column', justifyContent:"flex-end", height: '100%'  }}>
          <DataTable
            rows={row_transactions}
            columns={column_transactions}
            total={row_transactions.length}
            page={pageIndex}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            cardHeight={cardHeight}
            setCardHeight={setCardHeight}
          />
        </Box>
      
      </Box>
     
    </Container>
  );
};

export default Columns;
