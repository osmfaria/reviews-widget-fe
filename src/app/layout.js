import { Box, CssBaseline, Stack } from '@mui/material'
import { Inter } from 'next/font/google'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/components/Theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer
            position='top-center'
            autoClose={2000}
            limit={1}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme='light'
            transition={Flip}
          />
          <Stack
            direction='column'
            justifyContent='space-between'
            minHeight='100vh'
          >
            <Box
              minHeight='80vh'
              sx={{ padding: { xs: '20px 0', sm: '60px 0' } }}
            >
              {children}
            </Box>
          </Stack>
        </ThemeProvider>
      </body>
    </html>
  )
}
