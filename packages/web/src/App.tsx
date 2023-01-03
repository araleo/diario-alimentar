import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ROUTES from './constants/routes';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Outlet />} />
      <Route index element={<Main />} />
      <Route path={ROUTES.signIn} element={<Login />} />
      <Route path={ROUTES.signUp} element={<Signup />} />
      <Route path={ROUTES.verifyEmail} element={<VerifyEmail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
