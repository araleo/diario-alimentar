import TextField, { TextFieldProps } from '@mui/material/TextField';
import { LABELS } from '../../../constants/texts';

type Props = {
  textFieldProps: TextFieldProps;
  errorMessage?: string;
};

const SmallTextField = ({ textFieldProps, errorMessage }: Props) => {
  const label = textFieldProps.label?.toString() || '';
  const passwordLabels = [LABELS.password, LABELS.confirmPassword];
  const fieldType = passwordLabels.includes(label) ? 'password' : 'text';

  return (
    <TextField
      size='small'
      margin='normal'
      type={fieldType}
      error={!!errorMessage}
      helperText={errorMessage}
      {...textFieldProps}
    />
  );
};

export default SmallTextField;
