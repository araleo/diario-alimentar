import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AuthContainer from '../../components/UI/containers/AuthContainer';
import { LABELS } from '../../constants/texts';

const Signup = () => (
  <AuthContainer title={LABELS.signUp}>
    <SignUpForm />
  </AuthContainer>
);

export default Signup;
