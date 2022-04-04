import { createContext, useReducer } from "react";

const innitialState = {
  isAuthenticated: false,
  user: null,
};
const AuthContext = createContext(innitialState);

const LOGIN_SUCESS = "LOGIN_SUCESS";
const LOGOUT = "LOGOUT";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCESS:
      return { ...state, isAuthenticated: true, user: action.payload.user };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, innitialState);

  const login = (username, cb) => {
    dispatch({ type: LOGIN_SUCESS, payload: { user: { username } } });
    cb();
  };
  const logout = (cb) => {
    dispatch({ type: LOGOUT });
    cb();
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
