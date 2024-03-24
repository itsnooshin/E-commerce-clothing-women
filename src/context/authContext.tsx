"use client";

import React, {
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { createContext } from "react";

interface AuthContextType {
  login: (dataForm: FormValues) => Promise<void>;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
  isLoggedIn: boolean;

  logout(): void;
}

interface FormValues {
  email: string;
  password: string;
}
const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  useEffect(() => {
    const username = localStorage.getItem("username");

    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  async function login(dataForm: FormValues) {
    try {
      const { email, password } = dataForm;
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      if (res.status === 200) {
        // Store the logged-in user's email in localStorage
        localStorage.setItem("username", email);
        setIsLoggedIn(true);

        router.push("/");
      }
      if (res.status === 401) {
        console.log("Registration is faild");
        setErrorMessage("Password or email is incorrect. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem("username");
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, errorMessage, setErrorMessage, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
