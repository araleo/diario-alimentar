import Button from '@mui/material/Button';

import { BUTTONS } from '../../constants/texts';

type Props = {
  callback: () => void;
  disabled?: boolean;
};

const ResetButton = ({ callback, disabled }: Props) => (
  <Button
    type='button'
    variant='outlined'
    onClick={callback}
    disabled={!!disabled}
  >
    {BUTTONS.reset}
  </Button>
);

export default ResetButton;
