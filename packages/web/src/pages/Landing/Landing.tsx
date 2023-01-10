import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { AuthPageMode } from '../../@types/auth-page-mode';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Title from '../../components/Title/Title';
import CenterBox from '../../components/UI/containers/CenterBox';
import OutlinedPaper from '../../components/UI/containers/OutlinedPaper';
import { APP_DESCRIPTION, BUTTONS, LABELS } from '../../constants/texts';

const Landing = () => {
  const [mode, setMode] = useState<AuthPageMode>('signin');

  const handleModeChange = () => {
    setMode(currentMode => (currentMode === 'signin' ? 'signup' : 'signin'));
  };

  const getPageComponent = () => {
    if (mode === 'signup') {
      return <SignUpForm />;
    }
    if (mode === 'resetPassword') {
      return <ForgotPassword />;
    }
    return <SignInForm setPageMode={setMode} />;
  };

  return (
    <CenterBox sx={{ height: '100%' }}>
      <OutlinedPaper style={{ width: '40%' }}>
        <Title />
        <Typography sx={{ marginBottom: '2rem', textAlign: 'center' }}>
          {mode === 'resetPassword' ? LABELS.sendResetEmail : APP_DESCRIPTION}
        </Typography>
        {getPageComponent()}
        <Divider sx={{ margin: '2rem 0' }} />
        <CenterBox>
          <Button variant='outlined' onClick={handleModeChange}>
            {mode === 'signin'
              ? BUTTONS.createAccount
              : BUTTONS.alreadyHaveAccount}
          </Button>
        </CenterBox>
      </OutlinedPaper>
    </CenterBox>
  );
};

export default Landing;
