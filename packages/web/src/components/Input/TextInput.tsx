import TextField, { TextFieldProps } from '@mui/material/TextField';
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from 'react-hook-form';

// I'm declaring a new ControllerProps type here instead of
// using the UseControllerProps from react-hook-form because
// the default one was causing typing conflicts with the types
// from the forms, hence the any types below.
type ControllerProps = {
  name: string;
  // eslint-disable-next-line
  control: Control<any, object>;
  // eslint-disable-next-line
  defaultValue?: any;
  rules?: RegisterOptions;
};

type Props = {
  controllerProps: ControllerProps;
  fieldProps: TextFieldProps;
  fieldError?: FieldError;
};

const TextInput = ({ controllerProps, fieldError, fieldProps }: Props) => (
  <Controller
    {...controllerProps}
    render={({ field }) => (
      <TextField
        error={!!fieldError?.message}
        helperText={fieldError?.message}
        size='small'
        margin='normal'
        {...fieldProps}
        {...field}
      />
    )}
  />
);

export default TextInput;
