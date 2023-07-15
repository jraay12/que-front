import { createContext, useState, useEffect } from "react";
import  secureLocalStorage  from  "react-secure-storage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = secureLocalStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : {};
  });

  useEffect(() => {
    secureLocalStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
