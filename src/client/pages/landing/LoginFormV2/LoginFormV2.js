import React from 'react'
import { Google, Facebook } from '@styled-icons/boxicons-logos'

import { Wrapper, Header, OAuthGroup, OAuthButton, OrLabel, Form, Input, SubmitButton } from './LoginFormV2.styles'
import useAuthContext from '../../../hooks/useAuthContext'


const LoginFormV2 = ({ isLoginForm }) => {
  const { login } = useAuthContext()
  const {
    invokeLogin,
    loginSuccess,
    pending,
    email,
    password,
    setEmail,
    setPassword
  } = login()

	const onSuccess = () => {
    if (typeof window !== 'undefined') {
			console.log("redirecting to dash")
      window.location.href = `/dashboard`
    }
	}

  const onFormSubmit = e => {
    e.preventDefault()
    invokeLogin(onSuccess)
  }

  return (
    <Wrapper disabled={pending || loginSuccess} isLoginForm={isLoginForm}>
      <Header>Log in with</Header>
      <OAuthGroup>
        <OAuthButton><Google size="28" color="#f14236" />Google</OAuthButton>
        <OAuthButton><Facebook size="28" color="#4267b2" />Facebook</OAuthButton>
      </OAuthGroup>
      <OrLabel>or</OrLabel>
      <Form onSubmit={onFormSubmit} autoComplete="on">
        <label>Email</label>
        <Input type="email" placeholder="Enter email address" required value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <Input type="password" placeholder="Enter your password" required value={password} onChange={e => setPassword(e.target.value)}/>
        <SubmitButton type="submit" value="Log In" />
      </Form>
    </Wrapper>
  )
}

export default LoginFormV2