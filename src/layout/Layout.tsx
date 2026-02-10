import { CssBaseline } from '@mui/material'
import { IPropsChildrenComponent } from '@/@types/PropsChildrenComponent'
import { Container, Main } from './styles'
import { Header } from '@/components/Header'
// import { MarcaDAgua } from '@/components/MarcaDAgua'

export function Layout({ children }: IPropsChildrenComponent) {
  return (
    <>
      <CssBaseline />
      <Container>
        <Header />
        <Main>{children}</Main>
      </Container>
    </>
  )
}
