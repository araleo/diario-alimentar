import SignInForm from '../../components/SignInForm/SignInForm';
import AuthContainer from '../../components/UI/containers/AuthContainer';
import { LABELS } from '../../constants/texts';

const Login = () => (
  <AuthContainer title={LABELS.signIn}>
    <SignInForm />
  </AuthContainer>
);

export default Login;
