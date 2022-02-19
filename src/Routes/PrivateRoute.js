import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'

const PrivateRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext)

  return user.username ? children : <Navigate to='/'/>
}

export default PrivateRoute