import { onAuthStateChanged, User } from 'firebase/auth';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ROUTES from './constants/routes';
import Landing from './pages/Landing/Landing';
import Main from './pages/Main/Main';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { auth } from './services/firebase';

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, userData => setUser(userData));

  // eslint-disable-next-line no-console
  console.log(user);

  const router = createBrowserRouter([
    { path: '/', element: <Landing /> },
    { path: ROUTES.signIn, element: <SignIn /> },
    { path: ROUTES.signUp, element: <SignUp /> },
    { path: ROUTES.main, element: <Main /> },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
