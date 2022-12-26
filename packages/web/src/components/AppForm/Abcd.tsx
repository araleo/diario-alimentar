import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const AppForm = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <>
      <DateTimePicker
        label='Dia e hora'
        value={value}
        onChange={handleChange}
        renderInput={params => <TextField {...params} />}
      />

      <Autocomplete
        freeSolo
        options={[]}
        renderInput={params => <TextField {...params} label='Alimento' />}
      />

      <Autocomplete
        freeSolo
        options={[]}
        renderInput={params => <TextField {...params} label='Onde estava' />}
      />

      <Autocomplete
        freeSolo
        options={[]}
        renderInput={params => (
          <TextField {...params} label='Com quem estava' />
        )}
      />

      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='Comeu o que queria?'
        />
      </FormGroup>
    </>
  );
};
export default AppForm;
