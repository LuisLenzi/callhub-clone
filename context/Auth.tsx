import { createContext, ReactNode, useEffect, useState } from 'react'

import { chatApi } from '../services/chatApi'

interface User {
  id: string
  name: string
  login: string
  avatar_url: string
}

interface AuthContextData {
  user: User | null
  signInUrl: string
  signOut: () => void
}

interface AuthResponse {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}

interface AuthProvider {
  children: ReactNode
}
export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=245445ad36c6119ba34e`

  async function signIn(githubCode: string) {
    if (typeof localStorage !== 'undefined') {
      const response = await chatApi.post<AuthResponse>('authenticate', {
        code: githubCode,
      })

      const { token, user } = response.data

      chatApi.defaults.headers.common.authorization = `Bearer ${token}`

      localStorage.setItem('@Callhub:token', token)

      setUser(user)
    }
  }

  function signOut() {
    setUser(null)

    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('@Callhub:token')
    }
  }

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('@Callhub:token')

      if (token) {
        chatApi.defaults.headers.common.authorization = `Bearer ${token}`

        chatApi
          .get<User>('profile')
          .then((response) => {
            setUser(response.data)
          })
          .catch((error) => {})
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href
      const hasGithubCode = url.includes('dashboard?code=')

      if (hasGithubCode) {
        const [urlWithoutCode, githubCode] = url.split('dashboard?code=')

        window.history.pushState({}, '', urlWithoutCode)

        signIn(githubCode)
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInUrl, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
