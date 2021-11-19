import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import App from './App';

import register from './core/configure-store'
import configureStore from 'core/configure-store'
import { GlobalStyles, theme } from 'styles'

const { persistor, store } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

register()
