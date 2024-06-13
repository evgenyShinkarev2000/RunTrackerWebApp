import { ThemeProvider, createTheme } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'src/App'
import { ApiProvider, store } from 'src/store'
import { runTrackerApi } from 'src/store/runTrackerApi'
import "./i18n/AppI18Next"
import "./index.css"

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider runTrackerApi={runTrackerApi}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
)
