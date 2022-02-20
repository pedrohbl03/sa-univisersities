import React from 'react'
import { useState } from 'react'

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children, ...props })  => {

  const [user, setUser] = useState({
    username: localStorage.getItem('username')
  })

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favoriteUniversities')) || [])

  return (
    <AuthContext.Provider value={{ user, setUser, favorites, setFavorites }}>
      { children }
    </AuthContext.Provider>
  )
}