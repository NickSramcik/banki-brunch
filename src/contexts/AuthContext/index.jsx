import { createContext, useContext } from 'react'
import useProvideAuth from './useProvideAuth'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
