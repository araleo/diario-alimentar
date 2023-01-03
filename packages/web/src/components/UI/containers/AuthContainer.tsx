import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

import CenterBox from './CenterBox';
import OutlinedPaper from './OutlinedPaper';

type Props = {
  title: string;
  children: ReactNode;
};

const AuthContainer = ({ title, children }: Props) => (
  <CenterBox sx={{ height: '100%' }}>
    <OutlinedPaper>
      <Typography variant='h4' component='h2' sx={{ marginBottom: '2rem' }}>
        {title}
      </Typography>
      {children}
    </OutlinedPaper>
  </CenterBox>
);

export default AuthContainer;
