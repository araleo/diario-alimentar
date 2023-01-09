import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { LABELS } from '../../constants/texts';

type Props = {
  disableActions: boolean;
  deleteSelected: () => void;
};

const TableToolbar = ({ disableActions, deleteSelected }: Props) => (
  <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
    <Typography
      sx={{ flex: '1 1 100%' }}
      variant='h6'
      id='tableTitle'
      component='div'
    >
      {LABELS.myMeals}
    </Typography>
    <Tooltip title='Delete'>
      <IconButton onClick={deleteSelected} disabled={disableActions}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  </Toolbar>
);

export default TableToolbar;
