import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserSatedChange } from '../api/firebase.js';


const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserSatedChange(user => setUser(user))
  },[])
//이부분이 어렵다

  return(
    <AuthContext.Provider value={{user, login:login, logout:logout, uid: user && user.uid}}>
      {children}
    </AuthContext.Provider>
    )
}

export function useAuthContext() {
  return useContext(AuthContext);
}