import React from 'react'
import { Switch, Route } from 'react-router';
import { createGlobalStyle } from 'styled-components'
import { Login } from  './login';
import { ForgotPassword } from  './forgot-password';
import { ChangePassword } from  './change-password';
import { Signup } from  './signup';
import ViewHelpers from '../../../backend/utils/view-helpers/view-helpers';

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

export type LoginProps = {
  message?: string;
  action: string;
}

const LoginApp: React.FC<LoginProps> = (props) => {
  const h = new ViewHelpers();

  return (
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route path={h.forgotPasswordUrl()}>
          <ForgotPassword {...props} />
        </Route>
        <Route path={h.changePasswordUrl()}>
          <ChangePassword {...props} />
        </Route>
        <Route path={h.signupUrl()}>
          <Signup {...props} />
        </Route>
        <Route>
          <Login {...props} />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export { LoginApp }
export default LoginApp