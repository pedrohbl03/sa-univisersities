import React from 'react'
import { useState } from 'react'

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children, ...props })  => {

  const [user, setUser] = useState({
    username: localStorage.getItem('username')
  })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      { children }
    </AuthContext.Provider>
  )
}