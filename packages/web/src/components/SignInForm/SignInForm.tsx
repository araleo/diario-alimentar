import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { z } from 'zod';
import { useTheme } from '@mui/material';

import ROUTES from '../../constants/routes';
import { BUTTONS, ERRORS, LABELS } from '../../constants/texts';
import useFirebase from '../../hooks/use-firebase';
import TextInput from '../Input/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import CenterBox from '../UI/containers/CenterBox';
import { AuthPageMode } from '../../@types/auth-page-mode';

type FormData = {
  email: string;
  password: string;
};

const defaultValues: FormData = {
  email: '',
  password: '',
};

const schema = z.object({
  email: z
    .string()
    .min(1, { message: ERRORS.required })
    .refine(val => isEmail(val), { message: ERRORS.invalidEmail }),
  password: z.string().min(1, { message: ERRORS.required }),
});

type Props = {
  setPageMode: (mode: AuthPageMode) => void;
};

const SignInForm = ({ setPageMode }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { isLoading, errors: firebaseError, signIn } = useFirebase();

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    const submitCallback = () => navigate(ROUTES.dashboard);
    signIn({ email: data.email, password: data.password }, submitCallback);
  };

  const theme = useTheme();

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
      </Stack>
      {firebaseError && (
        <Typography color='error' sx={{ marginTop: '1rem' }}>
          {ERRORS.signInError}
        </Typography>
      )}
      <Typography
        onClick={() => setPageMode('resetPassword')}
        sx={{
          textAlign: 'right',
          marginTop: '1rem',
          cursor: 'pointer',
          color: theme.palette.primary.main,
          fontWeight: '500',
        }}
      >
        {LABELS.forgotPassword}
      </Typography>
      <CenterBox sx={{ marginTop: '2rem' }}>
        <SubmitButton disabled={isLoading} label={BUTTONS.signIn} />
      </CenterBox>
    </form>
  );
};

export default SignInForm;
