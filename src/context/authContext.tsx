"use client";

import React, { useState, useContext, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { createContext } from "react";

interface AuthContextType {
  login: (dataForm: FormValues) => Promise<void>;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
  isLoggedIn: boolean;
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
        router.push("/");
        setIsLoggedIn(true);
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

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, errorMessage, setErrorMessage }}
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
