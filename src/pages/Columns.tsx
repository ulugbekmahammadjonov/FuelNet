import React, { useState } from 'react'
import { Box, Typography, Chip } from '@mui/material'
import Container from '../components/UI/customContainer'
import Card from '../components/card'
import InsetBorderRadius from '../components/test'
import Input from '../components/UI/input'
import Select from '../components/UI/select'
import DataTable from '../components/data-table'
import { column_transactions } from '../utils/constants'
import { row_transactions } from '../utils/constants'
import SortableTable from '../components/test'

const Columns: React.FC = () => {
  // const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPageIndex(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPageIndex(0);
  };
  return (
    <Container >
      <Box component={'div'} sx={{ p: 2 }}>
        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ color: "text.primary", fontWeight: "bold" }}>Колонки</Typography>
          <Box component={"div"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
            <Typography sx={{ color: "text.primary", fontSize: "14px" }}>Вместимость ряда</Typography>

            <Select onChange={() => { }} defaultValue={3} options={[1, 2, 3].map((value) => ({ value }))} />
          </Box>
        </Box>
          <Card />
        <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ color: "text.primary", fontWeight: "bold", fontSize:{ xs: "14px", md: "16px"} }}>Неоплаченные операции</Typography>

          <Chip label={`${row_transactions.length} операций`} variant="outlined" />
        </Box>
        <DataTable rows={row_transactions} columns={column_transactions} total={row_transactions.length} page={pageIndex} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />

      <SortableTable />
      </Box>
    </Container>
  )
}

export default Columns
