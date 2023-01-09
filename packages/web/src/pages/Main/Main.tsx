import Box from '@mui/material/Box';

import Dashboard from '../../components/Dashboard/Dashboard';
import Title from '../../components/Title/Title';
import CenterBox from '../../components/UI/containers/CenterBox';

const Main = () => (
  <Box style={{ width: '100%', height: '100%' }}>
    <CenterBox sx={{ height: '10%' }}>
      <Title />
    </CenterBox>
    <Dashboard />
  </Box>
);

export default Main;
