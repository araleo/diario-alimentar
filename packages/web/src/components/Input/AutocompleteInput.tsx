import Autocomplete from '@mui/material/Autocomplete';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Controller, FieldError } from 'react-hook-form';
import { AppControllerProps } from './types';

type Props = {
  controllerProps: AppControllerProps;
  fieldProps: TextFieldProps;
  fieldError?: FieldError;
};

const AutocompleteInput = ({
  controllerProps,
  fieldProps,
  fieldError,
}: Props) => {
  <Controller
    {...controllerProps}
    render={({ field: { onChange, value } }) => (
      <Autocomplete
        freeSolo
        options={[]}
        onChange={(_, values) => onChange(values?.toString())}
        value={value}
        renderInput={params => (
          <TextField
            {...params}
            {...fieldProps}
            size='small'
            onChange={onChange}
            error={!!fieldError?.message}
            helperText={fieldError?.message}
          />
        )}
      />
    )}
  />;
};

export default AutocompleteInput;
