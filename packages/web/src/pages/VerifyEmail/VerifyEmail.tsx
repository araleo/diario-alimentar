import Typography from '@mui/material/Typography';
import AuthContainer from '../../components/UI/containers/AuthContainer';
import { MESSAGES } from '../../constants/texts';

const VerifyEmail = () => (
  <AuthContainer title='Verifique seu email'>
    <Typography>{MESSAGES.verificationEmailSent}</Typography>
  </AuthContainer>
);

export default VerifyEmail;
