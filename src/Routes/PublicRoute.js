import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'

const PublicRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext)

  return user.username ? <Navigate to='/app'/> : children
}

export default PublicRoute