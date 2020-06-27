import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../../components/Utility/GlobalStyle'
import useAuthContext from '../../hooks/useAuthContext'
import AuthProvider from '../../components/Providers/AuthProvider'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #332d3b;
  color: #eaeaea;
`

const Main = () => {
  const { login, logout, isLoggedIn, user, loadingUser } = useAuthContext()
  const {
    invokeLogout,
    pending,
    logoutSuccess,
    error
  } = logout()

  if (!pending && isLoggedIn === false) {
    if (typeof window !== 'undefined') {
			console.log('redirecting home')
      window.location.href = '/landing'
    }
  }

  if (!user || loadingUser) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <button onClick={e => {
        invokeLogout()
      }}>sign out</button>
    </div>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <Wrapper>
        <GlobalStyle />
        <Main />
      </Wrapper>
    </AuthProvider>
  )
}


export const pageConfig = {
  app: App,
  title: 'Gaming Space Dashboard',
  entry: 'dashboard',
  description: 'Gaming Space dashboard description'
}

export default App