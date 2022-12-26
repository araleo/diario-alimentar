import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs, { Dayjs } from 'dayjs';
import Autocomplete from '@mui/material/Autocomplete';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

type FormData = {
  datetime: Dayjs | null;
  quantity: string;
  meal: string;
};

const defaultValues: FormData = {
  datetime: null,
  quantity: '',
  meal: '',
};

const schema = z.object({
  datetime: z.string(),
  quantity: z.string().min(1, { message: 'Required' }),
  meal: z.string(),
});

const AppForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  // eslint-disable-next-line
  const onSubmit = (data: FormData) => console.log(data);

  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='datetime'
        control={control}
        render={({ field }) => (
          <DateTimePicker
            label='Dia e hora'
            inputFormat='DD-MM-YYYY HH:mm'
            value={value}
            onChange={handleChange}
            renderInput={params => <TextField {...params} {...field} />}
          />
        )}
      />

      <Controller
        name='meal'
        control={control}
        render={({ field }) => (
          <Autocomplete
            freeSolo
            options={['123', '456', '789']}
            renderInput={params => (
              <TextField {...field} {...params} label='Alimento' />
            )}
          />
        )}
      />

      <Controller
        name='quantity'
        control={control}
        render={({ field }) => (
          <TextField
            size='small'
            label='Quantidade'
            error={!!errors.quantity?.message}
            helperText={errors.quantity?.message}
            {...field}
          />
        )}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};
export default AppForm;
