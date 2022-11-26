import React, { createContext, useEffect, useState } from 'react'
import { userObserver } from '../auth/firebase';


export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentuser] = useState(false)

  useEffect(() => {
  userObserver(setCurrentuser);
}, []);

  return (
  <AuthContext.Provider value={{currentUser}} >
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContextProvider