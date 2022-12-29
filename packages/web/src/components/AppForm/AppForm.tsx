import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import TextInput from '../Input/TextInput';
import DateTimeInput from '../Input/DateTimeInput';
import CheckboxInput from '../Input/CheckboxInput';
import { MealData } from '../../@types/meal-data';

type FormData = MealData;

const defaultValues: FormData = {
  id: '',
  datetime: dayjs().toString(),
  quantity: '',
  meal: '',
  where: '',
  who: '',
  wasWanted: false,
  wanted: '',
  hunger: '',
  reason: '',
  feeling: '',
};

const schema = z.object({
  datetime: z.string(),
  quantity: z.string().min(1, { message: 'Required' }),
  meal: z.string().min(1, { message: 'Required' }),
  where: z.string().min(1, { message: 'Required' }),
  who: z.string().min(1, { message: 'Required' }),
  wasWanted: z.boolean(),
  wanted: z.string().min(1, { message: 'Required' }),
  hunger: z.string().min(1, { message: 'Required' }),
  reason: z.string().min(1, { message: 'Required' }),
  feeling: z.string().min(1, { message: 'Required' }),
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <DateTimeInput
          label='Dia e Hora'
          controllerProps={{
            name: 'datetime',
            control,
            defaultValue: dayjs().toString(),
          }}
          textFieldProps={{ sx: { width: '50%' } }}
        />

        <TextInput
          controllerProps={{ name: 'meal', control }}
          fieldProps={{ label: 'Alimento' }}
          fieldError={errors.meal}
        />

        <TextInput
          controllerProps={{ name: 'quantity', control }}
          fieldProps={{ label: 'Quantidade' }}
          fieldError={errors.quantity}
        />

        <TextInput
          controllerProps={{ name: 'where', control }}
          fieldProps={{ label: 'Onde' }}
          fieldError={errors.where}
        />

        <TextInput
          controllerProps={{ name: 'who', control }}
          fieldProps={{ label: 'Com quem' }}
          fieldError={errors.who}
        />

        <CheckboxInput
          label='Comi o que gostaria?'
          controllerProps={{ name: 'wasWanted', control }}
        />

        <TextInput
          controllerProps={{ name: 'wanted', control }}
          fieldProps={{ label: 'O que gostaria' }}
          fieldError={errors.wanted}
        />

        <TextInput
          controllerProps={{ name: 'hunger', control }}
          fieldProps={{ label: 'O quanto estava com fome' }}
          fieldError={errors.hunger}
        />

        <TextInput
          controllerProps={{ name: 'reason', control }}
          fieldProps={{ label: 'Motivo ou gatilho' }}
          fieldError={errors.reason}
        />

        <TextInput
          controllerProps={{ name: 'feeling', control }}
          fieldProps={{ label: 'Como me senti' }}
          fieldError={errors.reason}
        />

        <Button type='submit' variant='contained'>
          Enviar
        </Button>
      </Stack>
    </form>
  );
};

export default AppForm;
