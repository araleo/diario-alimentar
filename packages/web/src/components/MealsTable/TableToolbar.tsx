import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import { LABELS } from '../../constants/texts';
import AppIconButton from '../UI/AppIconButton/AppIconButton';

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
    <Tooltip title={LABELS.deleteMeal}>
      <span>
        <AppIconButton
          icon='delete'
          buttonProps={{ onClick: deleteSelected, disabled: disableActions }}
        />
      </span>
    </Tooltip>
  </Toolbar>
);

export default TableToolbar;
