import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    id: null,
    role: null,
  });

  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthContextProvider };

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
