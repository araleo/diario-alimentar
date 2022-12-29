import TextField, { TextFieldProps } from '@mui/material/TextField';

type Props = {
  textFieldProps: TextFieldProps;
  errorMessage?: string;
};

const SmallTextField = ({ textFieldProps, errorMessage }: Props) => (
  <TextField
    size='small'
    margin='normal'
    error={!!errorMessage}
    helperText={errorMessage}
    {...textFieldProps}
  />
);

export default SmallTextField;
