import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';

import { auth } from '../services/firebase';

type UserData = {
  email: string;
  password: string;
};

type Callback = () => void;

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>('');

  const createUser = async (userData: UserData, callback: Callback) => {
    setIsLoading(true);
    setErrors('');

    const { email, password } = userData;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      callback();
    } catch (error) {
      const err = error as { message?: string };
      setErrors(err?.message || '');
    }

    setIsLoading(false);
  };

  const signIn = async (userData: UserData, callback: Callback) => {
    const { email, password } = userData;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      callback();
    } catch (error) {
      const err = error as { message?: string };
      setErrors(err?.message || '');
    }
  };

  return { isLoading, errors, createUser, signIn };
};

export default useFirebase;
