import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
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
    setIsLoading(true);
    setErrors('');

    const { email, password } = userData;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      callback();
    } catch (error) {
      const err = error as { message?: string };
      setErrors(err?.message || '');
    }

    setIsLoading(false);
  };

  const resetPassword = async (email: string, callback: Callback) => {
    setIsLoading(true);
    setErrors('');

    try {
      await sendPasswordResetEmail(auth, email);
      callback();
    } catch (error) {
      const errorResponse = error as { message?: string };
      const err = errorResponse?.message || '';
      if (err.includes('user-not-found')) {
        callback();
      } else {
        setErrors(err);
      }
    }

    setIsLoading(false);
  };

  return { isLoading, errors, createUser, signIn, resetPassword };
};

export default useFirebase;
