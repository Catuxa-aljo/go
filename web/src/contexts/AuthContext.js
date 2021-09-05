import React, { useEffect, useState } from 'react'
import service from '../services/user.service'

export const AuthContext = React.createContext()

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState()

  useEffect(() => {
    service.profile('me')
      .then((user) => {
        setUser(user)
      })
  }, [])

  function login(user) {
    setUser(user)
  }

  function logout() {
    setUser(null)
  }

  const value = {
    user,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
