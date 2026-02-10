import { Box, BoxProps, styled } from '@mui/material'

export const Container = styled(Box)({
  display: 'flex',
  marginTop: '3.75rem',
})

export const Main = styled((props: BoxProps) => (
  <Box component="main" {...props} />
))(({ theme }) => ({
  flexGrow: 1,
  width: '100vw',
  minHeight: 'calc(100vh - 3.75rem)',
  padding: '0.5rem',
  backgroundColor: theme.palette.grey[50],
}))
