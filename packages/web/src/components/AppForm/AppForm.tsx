import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

const AppForm = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <DateTimePicker
      label='Dia e hora'
      value={value}
      onChange={handleChange}
      renderInput={params => <TextField {...params} />}
    />
  );
};
export default AppForm;
