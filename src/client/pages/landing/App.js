import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Banner from './Banner'
import LoginForm from './LoginForm'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1100,
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Banner />
        <LoginForm />
      </Wrapper>
    </ThemeProvider>
  )
}

export const config = {
  AppComponent: App,
  HeadComponent: ({ req }) => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Landing</title>
    </>
  ),
  BottomComponent: ({ req }) => (<script src="/landing.js"></script>)
}

export default App