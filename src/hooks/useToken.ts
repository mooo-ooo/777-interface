
import { useState } from 'react'
import jwtDecode from 'jwt-decode'
import { TOKEN_KEY } from 'config'

export interface UserProps {
  username: string
  balance: number
}

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem(TOKEN_KEY)
    return tokenString
  }

  const getParsedToken = (): UserProps | null => {
    const token = getToken()
    if (token) {
      return jwtDecode(token || "")
    }
    return null
  }

  const [token, setToken] = useState(getToken())

  const saveToken = (tokenString: string) => {
    sessionStorage.setItem(TOKEN_KEY, tokenString)
    setToken(tokenString)
  }

  const removeToken = () => {
    sessionStorage.removeItem(TOKEN_KEY)
    setToken(null)
  }

  return {
    setToken: saveToken,
    removeToken,
    token,
    getParsedToken
  }
}