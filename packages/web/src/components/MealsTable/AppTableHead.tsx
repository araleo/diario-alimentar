import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import visuallyHidden from '@mui/utils/visuallyHidden';

import { MealData } from '../../@types/meal-data';
import { Order } from '../../@types/order';
import { HEAD_CELLS } from './head-cells';

type requestSortHandler = (
  event: React.MouseEvent<unknown>,
  property: keyof MealData
) => void;

type selectClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

type Props = {
  numSelected: number;
  onRequestSort: requestSortHandler;
  onSelectAllClick: selectClickHandler;
  order: Order;
  orderBy: string;
  rowCount: number;
};

const AppTableHead = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}: Props) => {
  const createSortHandler =
    (property: keyof MealData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {HEAD_CELLS.map(headCell => (
          <TableCell
            key={headCell.id}
            align='right'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default AppTableHead;
