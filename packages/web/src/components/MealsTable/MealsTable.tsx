import { ChangeEvent, MouseEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { MealData } from '../../@types/meal-data';
import { Order } from '../../@types/order';
import AppTableHead from './AppTableHead';
import { DUMMY_DATA, getComparator } from './table-utils';
import TableToolbar from './TableToolbar';

const rows: MealData[] = DUMMY_DATA;

const MealsTable = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof MealData>('datetime');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleRequestSort = (_: MouseEvent<unknown>, prop: keyof MealData) => {
    const isAsc = orderBy === prop && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(prop);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_: MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <AppTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .sort(getComparator(order, orderBy))
                .map(row => {
                  const isItemSelected = isSelected(row.id);

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.id)}
                      role='checkbox'
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox color='primary' checked={isItemSelected} />
                      </TableCell>
                      <TableCell align='right'>{row.datetime}</TableCell>
                      <TableCell align='right'>{row.meal}</TableCell>
                      <TableCell align='right'>{row.quantity}</TableCell>
                      <TableCell align='right'>{row.where}</TableCell>
                      <TableCell align='right'>{row.who}</TableCell>
                      <TableCell align='right'>
                        {row.wasWanted ? 'Sim' : 'Não'}
                      </TableCell>
                      <TableCell align='right'>{row.wanted}</TableCell>
                      <TableCell align='right'>{row.hunger}</TableCell>
                      <TableCell align='right'>{row.reason}</TableCell>
                      <TableCell align='right'>{row.feeling}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default MealsTable;
