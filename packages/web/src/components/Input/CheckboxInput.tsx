import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from 'react-hook-form';
import { AppControllerProps } from './types';

type Props = {
  controllerProps: AppControllerProps;
  label: string;
};

const CheckboxInput = ({ controllerProps, label }: Props) => (
  <Box mt={2} mb={1}>
    <FormControlLabel
      control={
        <Controller
          {...controllerProps}
          render={({ field: props }) => (
            <Checkbox
              {...props}
              checked={!!props.value}
              onChange={e => props.onChange(e.target.checked)}
            />
          )}
        />
      }
      label={label}
    />
  </Box>
);

export default CheckboxInput;
