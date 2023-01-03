import { useForm, useWatch } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';

import TextInput from '../Input/TextInput';
import DateTimeInput from '../Input/DateTimeInput';
import CheckboxInput from '../Input/CheckboxInput';
import { MealData } from '../../@types/meal-data';
import SpaceBetweenBox from '../UI/containers/SpaceBetweenBox';
import FlexRowBox from '../UI/containers/FlexRowBox';
import { ERRORS, LABELS } from '../../constants/texts';
import AppIconButton from '../UI/AppIconButton/AppIconButton';
import FormButtons from '../FormButtons/FormButtons';

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
  quantity: z.string().min(1, { message: ERRORS.required }),
  meal: z.string().min(1, { message: ERRORS.required }),
  where: z.string().min(1, { message: ERRORS.required }),
  who: z.string().min(1, { message: ERRORS.required }),
  wasWanted: z.boolean(),
  wanted: z.string().min(1, { message: ERRORS.required }),
  hunger: z.string().min(1, { message: ERRORS.required }),
  reason: z.string().min(1, { message: ERRORS.required }),
  feeling: z.string().min(1, { message: ERRORS.required }),
});

type Props = {
  toggleForm: () => void;
};

const MealForm = ({ toggleForm }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const wasWanted = useWatch({ control, name: 'wasWanted' });

  // eslint-disable-next-line
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <>
      <AppIconButton
        icon='close'
        buttonProps={{ onClick: toggleForm, sx: { float: 'right' } }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <DateTimeInput
          label={LABELS.datetime}
          controllerProps={{
            name: 'datetime',
            control,
            defaultValue: dayjs().toString(),
          }}
          textFieldProps={{ sx: { width: '45%' } }}
        />
        <SpaceBetweenBox>
          <Stack sx={{ width: '45%' }}>
            <TextInput
              controllerProps={{ name: 'meal', control }}
              fieldProps={{ label: LABELS.meal }}
              fieldError={errors.meal}
            />

            <TextInput
              controllerProps={{ name: 'quantity', control }}
              fieldProps={{ label: LABELS.quantity }}
              fieldError={errors.quantity}
            />

            <TextInput
              controllerProps={{ name: 'where', control }}
              fieldProps={{ label: LABELS.where }}
              fieldError={errors.where}
            />

            <TextInput
              controllerProps={{ name: 'who', control }}
              fieldProps={{ label: LABELS.whoWith }}
              fieldError={errors.who}
            />
          </Stack>
          <Stack sx={{ width: '45%' }}>
            <TextInput
              controllerProps={{ name: 'hunger', control }}
              fieldProps={{ label: LABELS.hunger }}
              fieldError={errors.hunger}
            />

            <TextInput
              controllerProps={{ name: 'reason', control }}
              fieldProps={{ label: LABELS.reason }}
              fieldError={errors.reason}
            />

            <TextInput
              controllerProps={{ name: 'feeling', control }}
              fieldProps={{ label: LABELS.feeling }}
              fieldError={errors.reason}
            />

            <FlexRowBox>
              <CheckboxInput
                label={LABELS.wasWanted}
                controllerProps={{ name: 'wasWanted', control }}
              />
              {!wasWanted && (
                <TextInput
                  controllerProps={{ name: 'wanted', control }}
                  fieldProps={{ label: LABELS.wanted, sx: { width: '100' } }}
                  fieldError={errors.wanted}
                />
              )}
            </FlexRowBox>
          </Stack>
        </SpaceBetweenBox>
        <FormButtons resetCallback={reset} />
      </form>
    </>
  );
};

export default MealForm;
