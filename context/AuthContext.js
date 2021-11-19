import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const register = async (user) => {
    console.log(user);
  };

  const login = async ({ email, password }) => {
    try {
      setError(null);
      const { data } = await axios.post("/api/users", {
        email,
        password,
      });
      setUser(data.user);
      return data.user;
    } catch (e) {
      console.log(e.response.data.message);
      setError(e.response.data.message);
    }
  };

  const logout = async () => {
    router.replace("/");
    setUser(null);
    console.log("logout");
  };

  const checkUserLoggedIn = async () => {
    console.log("check");
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
