import Button from '@mui/material/Button';

import { BUTTONS } from '../../constants/texts';

type Props = {
  callback: () => void;
};

const ResetButton = ({ callback }: Props) => (
  <Button type='button' variant='outlined' onClick={callback}>
    {BUTTONS.reset}
  </Button>
);

export default ResetButton;
