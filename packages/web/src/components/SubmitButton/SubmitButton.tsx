import Button from '@mui/material/Button';

import { BUTTONS } from '../../constants/texts';

type Props = {
  disabled?: boolean;
};

const SubmitButton = ({ disabled }: Props) => (
  <Button type='submit' variant='contained' disabled={!!disabled}>
    {BUTTONS.submit}
  </Button>
);

export default SubmitButton;
