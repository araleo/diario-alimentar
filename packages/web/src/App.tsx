import { onAuthStateChanged } from 'firebase/auth';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import ROUTES from './constants/routes';
import { ERRORS } from './constants/texts';
import Landing from './pages/Landing/Landing';
import { auth } from './services/firebase';
import Main from './pages/Main/Main';

const App = () => {
  const authStatePromise = () =>
    new Promise((resolve, reject) => {
      onAuthStateChanged(auth, userData => {
        if (userData === null) {
          return reject(new Error(ERRORS.userNotFound));
        }
        return resolve(userData);
      });
    });

  const redirectIfNotLoggedIn = async () => {
    try {
      await authStatePromise();
    } catch (error) {
      redirect(ROUTES.main);
    }
    return null;
  };

  const redirectIfLoggedIn = async () => {
    try {
      const user = await authStatePromise();
      if (user) {
        return redirect(ROUTES.dashboard);
      }
    } catch (error) {
      return null;
    }
    return null;
  };

  const router = createBrowserRouter([
    {
      path: ROUTES.main,
      element: <Landing />,
      loader: redirectIfLoggedIn,
    },
    {
      path: ROUTES.dashboard,
      element: <Main />,
      loader: redirectIfNotLoggedIn,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
