import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import LoginComponent from './components/login'
import ViewHelpers from '../backend/utils/view-helpers/view-helpers'
import ApiClient from './utils/api-client'

import createStore from './store/store'

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
}

const store = createStore(window.REDUX_STATE)
const theme = window.THEME
const login = window.LOGIN
const { locale } = window.REDUX_STATE

i18n
  .use(initReactI18next)
  .init({
    resources: {
      [locale.language]: {
        translation: locale.translations,
      },
    },
    lng: locale.language,
    interpolation: { escapeValue: false },
  })

const Application = (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <LoginComponent action={login.action} message={login.errorMessage} />
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  </Provider>
)

// eslint-disable-next-line no-undef
window.regeneratorRuntime = regeneratorRuntime

export default {
  Application,
  // Review It
  ApiClient,
  ViewHelpers,
  UserComponents: {},
  env,
}
