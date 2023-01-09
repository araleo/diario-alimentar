import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Title from '../../components/Title/Title';
import CenterBox from '../../components/UI/containers/CenterBox';
import OutlinedPaper from '../../components/UI/containers/OutlinedPaper';
import { APP_DESCRIPTION, BUTTONS } from '../../constants/texts';

type PageMode = 'login' | 'signup';

const Landing = () => {
  const [mode, setMode] = useState<PageMode>('login');

  const handleModeChange = () => {
    setMode(currentMode => (currentMode === 'login' ? 'signup' : 'login'));
  };

  return (
    <CenterBox sx={{ height: '100%' }}>
      <OutlinedPaper style={{ width: '40%' }}>
        <Title />
        <Typography sx={{ marginBottom: '2rem', textAlign: 'center' }}>
          {APP_DESCRIPTION}
        </Typography>
        {mode === 'login' ? <SignInForm /> : <SignUpForm />}
        <Divider sx={{ margin: '2rem 0' }} />
        <CenterBox>
          <Button variant='outlined' onClick={handleModeChange}>
            {mode === 'login'
              ? BUTTONS.createAccount
              : BUTTONS.alreadyHaveAccount}
          </Button>
        </CenterBox>
      </OutlinedPaper>
    </CenterBox>
  );
};

export default Landing;
