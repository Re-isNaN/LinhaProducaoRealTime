import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { Layout } from './layout/Layout'
import { ThemeProvider } from '@emotion/react'
import { theme } from './themes/Themes'
import { SnackbarProvider } from 'notistack'

export function App() {
  return (
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </SnackbarProvider>
  )
}
