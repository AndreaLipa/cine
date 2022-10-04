import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cartelera from './vistas/Cartelera'
import Inicio from './vistas/Inicio'
import Login from './vistas/Login'
import Usuarios from './vistas/Usuarios'
import FormUsuario from './vistas/FormUsuario'
import Logout from './vistas/Logout'
import { AutenticarContextoProveedor } from './contextos/autenticar'
import { AlertaContextoProveedor } from './contextos/alerta'
import RutaPublica from './componentes/RutaPublica'
import RutaPrivada from './componentes/RutaPrivada'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue, teal, amber } from '@mui/material/colors'
import { esES } from '@mui/x-data-grid'
import { esES as coreEsES } from '@mui/material/locale'

const theme = createTheme({
  palette: {
    primary: {
      main: blue['500']
    },
    secondary: {
      main: blue['50']
    },
    tertiary: {
      main: teal['500']
    },
    extra: {
      main: amber['500']
    },
  },
}, {
  esES,
  coreEsES,
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertaContextoProveedor>
        <AutenticarContextoProveedor>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={ <RutaPublica /> }>
                <Route index element={ <Cartelera /> } />
                <Route path='login' element={ <Login /> } />
              </Route>
              <Route path='admin' element={ <RutaPrivada /> }>
                <Route index element={ <Inicio /> } />
                <Route path='usuarios' element={ <Usuarios /> } />
                <Route path="usuarios/editar/:id" element={<FormUsuario />} />
                <Route path='logout' element={ <Logout /> } />
              </Route>
            </Routes>
          </BrowserRouter>
        </AutenticarContextoProveedor>
      </AlertaContextoProveedor>
    </ThemeProvider>
  )
}

export default App
