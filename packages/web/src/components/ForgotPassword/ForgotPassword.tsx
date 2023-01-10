import { zodResolver } from '@hookform/resolvers/zod';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import { z } from 'zod';

import { BUTTONS, ERRORS, LABELS, MESSAGES } from '../../constants/texts';
import useFirebase from '../../hooks/use-firebase';
import TextInput from '../Input/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import CenterBox from '../UI/containers/CenterBox';

type FormData = {
  email: string;
};

const defaultValues: FormData = {
  email: '',
};

const schema = z.object({
  email: z
    .string()
    .min(1, { message: ERRORS.required })
    .refine(val => isEmail(val), { message: ERRORS.invalidEmail }),
});

const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { resetPassword, isLoading, errors: firebaseError } = useFirebase();

  const [emailSent, setEmailSent] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    const resetCallback = () => setEmailSent(true);
    resetPassword(data.email, resetCallback);
  };

  return emailSent ? (
    <Typography>{MESSAGES.recoverPasswordEmailSent}</Typography>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          controllerProps={{ name: 'email', control }}
          fieldProps={{ label: LABELS.email }}
          fieldError={errors.email}
        />
      </Stack>
      {firebaseError && (
        <Typography color='error' sx={{ marginTop: '1rem' }}>
          {ERRORS.unexpected}
        </Typography>
      )}
      <CenterBox sx={{ marginTop: '2rem' }}>
        <SubmitButton label={BUTTONS.sendEmail} disabled={isLoading} />
      </CenterBox>
    </form>
  );
};

export default ForgotPassword;
