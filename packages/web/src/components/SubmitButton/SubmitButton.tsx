import Button from '@mui/material/Button';

import { BUTTONS } from '../../constants/texts';

type Props = {
  disabled?: boolean;
  label?: string;
};

const SubmitButton = ({ disabled, label }: Props) => (
  <Button type='submit' variant='contained' disabled={!!disabled}>
    {label || BUTTONS.submit}
  </Button>
);

export default SubmitButton;
