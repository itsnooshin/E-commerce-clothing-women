'use client';

import React, {
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from 'react';
import { useRouter } from 'next/navigation';
import { createContext } from 'react';
interface FormValues {
  email: string;
  password: string;
}
interface AuthContextType {
  login: (dataForm: FormValues) => Promise<void>;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
  isLoggedIn: boolean;
  logout(): void;
  userInfoFirstName: string;
  userInfoLastName: string;
  userInfoEmail: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userInfoFirstName, setUserInfoFirstName] = useState('');
  const [userInfoLastName, setUserInfoLastName] = useState('');
  const [userInfoEmail, setUserInfoEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const userDetail = localStorage.getItem('userDetails');
    if (username && userDetail) {
      setIsLoggedIn(true);
      const Detail = JSON.parse(userDetail ?? '{}');
      setUserInfoFirstName(Detail.firstname ?? '');
      setUserInfoLastName(Detail.lastname ?? '');
      setUserInfoEmail(Detail.email ?? '');
    }
  }, []);

  async function login(dataForm: FormValues) {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: dataForm.email,
          password: dataForm.password,
        }),
      });

      if (res.status === 200) {
        alert('login successfull');
        localStorage.setItem('username', dataForm.email);
        setIsLoggedIn(true);
        router.push('/');
      }
      if (res.status === 401) {
        setErrorMessage('Password or email is incorrect. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  }

  async function logout() {
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        setIsLoggedIn(false);
        localStorage.removeItem('username');
      } else {
        console.log('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        errorMessage,
        setErrorMessage,
        logout,
        userInfoFirstName,
        userInfoLastName,
        userInfoEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
