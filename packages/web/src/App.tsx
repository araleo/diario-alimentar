/* eslint-disable arrow-body-style */
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Title from './components/Title/Title';
import CenterBox from './components/UI/containers/CenterBox';
import Main from './pages/Main/Main';

const App = () => {
  const theme = useTheme();

  // eslint-disable-next-line no-console
  console.log(theme.palette.background.default);

  return (
    <Box style={{ width: '100%', height: '100%' }}>
      <CenterBox sx={{ height: '10%' }}>
        <Title />
      </CenterBox>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Outlet />} />
          <Route index element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Dashboard />
    </Box>
  );
};

export default App;
