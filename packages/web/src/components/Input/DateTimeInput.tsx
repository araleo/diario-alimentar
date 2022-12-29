import { TextFieldProps } from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Controller } from 'react-hook-form';

import { AppControllerProps } from './types';
import SmallTextField from '../UI/input/SmallTextField';

type Props = {
  label: string;
  controllerProps: AppControllerProps;
  textFieldProps?: TextFieldProps;
};

const DateTimeInput = ({ label, controllerProps, textFieldProps }: Props) => (
  <Controller
    {...controllerProps}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <DateTimePicker
        label={label}
        inputFormat='DD/MM/YYYY HH:mm'
        disableFuture
        value={value}
        onChange={event => onChange(event?.toString())}
        renderInput={params => (
          <SmallTextField
            textFieldProps={{ ...params, ...textFieldProps }}
            errorMessage={error?.message}
          />
        )}
      />
    )}
  />
);

export default DateTimeInput;
