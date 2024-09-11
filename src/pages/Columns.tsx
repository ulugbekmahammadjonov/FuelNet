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
  const [cardHeight, setCardHeight] = useState(300); // Initial height for the card

  const handleChangePage = (event: unknown, newPage: number) => {
    setPageIndex(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPageIndex(0);
  };

  // Scroll eventni kuzatish va card balandligini dinamik o'zgartirish
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newHeight = Math.max(100, 300 - scrollY / 5); // Minimal balandlik 100px bo'ladi
      setCardHeight(newHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Helmet title="Колонки" />
      <Box component={'div'} sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flexGrow: 1, height:` ${cardHeight}`}}>
          <Card  /> {/* Card balandligi dinamik o'zgaradi */}
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
