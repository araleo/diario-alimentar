import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../services/firebase';

type CreateUserData = {
  email: string;
  password: string;
};

type Callback = () => void;

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>('');

  const createUser = async (userData: CreateUserData, callback: Callback) => {
    setIsLoading(true);
    setErrors('');

    const { email, password } = userData;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(user.user);
      callback();
    } catch (error) {
      const err = error as { message?: string };
      setErrors(err?.message || '');
    }

    setIsLoading(false);
  };

  return { isLoading, errors, createUser };
};

export default useFirebase;
