import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import { z } from 'zod';
import ROUTES from '../../constants/routes';

import { ERRORS, LABELS } from '../../constants/texts';
import useFirebase from '../../hooks/use-firebase';
import TextInput from '../Input/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import FlexEndBox from '../UI/containers/FlexEndBox';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultValues: FormData = {
  email: '',
  password: '',
  confirmPassword: '',
};

const schema = z.object({
  email: z
    .string()
    .min(1, { message: ERRORS.required })
    .refine(val => isEmail(val), { message: ERRORS.invalidEmail }),
  password: z
    .string()
    .min(1, { message: ERRORS.required })
    .refine(val => isStrongPassword(val), { message: ERRORS.weakPassword }),
  confirmPassword: z
    .string()
    .min(1, { message: ERRORS.required })
    .refine(val => isStrongPassword(val), { message: ERRORS.weakPassword }),
});

const SignUpForm = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { isLoading, errors: firebaseError, createUser } = useFirebase();

  const [password, confirmPassword] = useWatch({
    control,
    name: ['password', 'confirmPassword'],
  });

  useEffect(() => {
    let message = '';
    if (password && confirmPassword && password !== confirmPassword) {
      message = ERRORS.pwsDontMatch;
    }
    setError('confirmPassword', { message });
  }, [password, confirmPassword, setError]);

  const parseFirebaseError = () => {
    if (firebaseError.includes('email-already-in-use')) {
      return ERRORS.emailInUse;
    }
    return ERRORS.signUpError;
  };

  const onSubmit = (data: FormData) => {
    const submitCallback = () => navigate(ROUTES.verifyEmail);
    createUser({ email: data.email, password: data.password }, submitCallback);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          controllerProps={{ name: 'email', control }}
          fieldProps={{ label: LABELS.email }}
          fieldError={errors.email}
        />
        <TextInput
          controllerProps={{ name: 'password', control }}
          fieldProps={{ label: LABELS.password }}
          fieldError={errors.password}
        />
        <TextInput
          controllerProps={{ name: 'confirmPassword', control }}
          fieldProps={{ label: LABELS.confirmPassword }}
          fieldError={errors.confirmPassword}
        />
      </Stack>
      {firebaseError && (
        <Typography color='error' sx={{ marginTop: '1rem' }}>
          {parseFirebaseError()}
        </Typography>
      )}
      <FlexEndBox sx={{ marginTop: '2rem' }}>
        <SubmitButton disabled={isLoading} />
      </FlexEndBox>
    </form>
  );
};

export default SignUpForm;
