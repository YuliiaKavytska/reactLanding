import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/Global'
import { theme } from 'styles/theme'

import App from './App'
import store from './store'

import 'normalize.css'
import 'animate.css/animate.compat.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
