import { TextFieldProps } from '@mui/material/TextField';
import { Controller, FieldError } from 'react-hook-form';

import SmallTextField from '../UI/input/SmallTextField';
import { AppControllerProps } from './types';

type Props = {
  controllerProps: AppControllerProps;
  fieldProps: TextFieldProps;
  fieldError?: FieldError;
};

const TextInput = ({ controllerProps, fieldError, fieldProps }: Props) => (
  <Controller
    {...controllerProps}
    render={({ field }) => (
      <SmallTextField
        textFieldProps={{ ...fieldProps, ...field }}
        errorMessage={fieldError?.message}
      />
    )}
  />
);

export default TextInput;
