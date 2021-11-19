import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookie from "cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const register = async (user) => {};

  const login = async ({ email, password }) => {
    try {
      setError(null);
      const { data } = await axios.post("/api/login", {
        email,
        password,
      });
      setUser(data.user);
      return data.user;
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  const logout = async () => {
    const { data } = await axios.post("/api/logout");
    setUser(null);
    router.push("/");
  };

  const checkUserLoggedIn = async () => {
    console.log("check");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, error, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
