import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAutenticarContexto } from '../contextos/autenticar'
import { useAlertaContexto } from '../contextos/alerta'
import { Grid, Paper, Typography, TextField, Stack, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function Usuario() {
  const navigate = useNavigate()
  const { mostrarAlerta } = useAlertaContexto()

  let { id } = useParams()
  const [ formulario, setFormulario] = useState([])
  const { rol } = useAutenticarContexto()

  const [errores, setErrores] = useState({
    error: false,
    mensaje: '',
    datos: {}
  })

  const roles = rol === 'Administrador' ? ['Administrador', 'Gerente'] : ['Gerente']

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setErrores({
        error: false,
        mensaje: '',
        datos: {}
      })
      if (id === '0') {
        const res = await axios.post('usuarios', formulario)
        mostrarAlerta(res.mensaje, 'success')
        navigate('/admin/usuarios')
      } else{
        const res = await axios.patch(`usuarios/${formulario._id}`, formulario)
        mostrarAlerta(res.mensaje, 'success')
        navigate('/admin/usuarios')
      }
    } catch(error) {
      setErrores(error)
    }
  }

  const handleChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if (id === '0') {
      setFormulario({
        _id: null,
        nombre: null,
        apellido: null,
        telefono: null,
        email: null,
        direccion: null,
        usuario: null,
        clave: null,
        rol: rol
      })
    } else {
      axios.get(`usuarios/${id}`).then(res => {
        setFormulario({ ...res.datos.usuario, clave: null})
      }).catch((error) => {
        navigate('usuarios')
      })
    }
  }, [id, rol, navigate])

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper sx={{ pb: 2, px: 3 }}>
          <Typography variant="h6" component="div" align="center" sx={{ py: 2 }}>
            { id === '0' ? 'Nuevo' : 'Editar' } usuario
          </Typography>
          { errores.error && (
            <Typography gutterBottom variant="body2" component="div" align="center" color="error" sx={{ mb: 2 }}>
              { errores.mensaje }
            </Typography>
          )}
          <form onSubmit={ handleSubmit }>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <TextField
                  error={ errores.datos.hasOwnProperty('nombre') }
                  name="nombre"
                  label="Nombre"
                  onChange={ handleChange }
                  helperText={ errores.datos.hasOwnProperty('nombre') ? errores.datos.nombre : '' }
                  fullWidth
                  required
                  value={ formulario.nombre || '' }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  error={ errores.datos.hasOwnProperty('apellido') }
                  name="apellido"
                  label="Apellido"
                  onChange={ handleChange }
                  helperText={ errores.datos.hasOwnProperty('apellido') ? errores.datos.apellido : '' }
                  fullWidth
                  required
                  value={ formulario.apellido || '' }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  error={ errores.datos.hasOwnProperty('telefono') }
                  name="telefono"
                  label="Teléfono"
                  onChange={ handleChange }
                  helperText={ errores.datos.hasOwnProperty('telefono') ? errores.datos.telefono : '' }
                  fullWidth
                  type="number"
                  value={ formulario.telefono || '' }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  error={ errores.datos.hasOwnProperty('email') }
                  name="email"
                  label="Correo"
                  onChange={ handleChange }
                  helperText={ errores.datos.hasOwnProperty('email') ? errores.datos.email : '' }
                  fullWidth
                  value={ formulario.email || '' }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={ errores.datos.hasOwnProperty('direccion') }
                  name="direccion"
                  label="Dirección"
                  onChange={ handleChange }
                  helperText={ errores.datos.hasOwnProperty('direccion') ? errores.datos.direccion : '' }
                  fullWidth
                  value={ formulario.direccion || '' }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  error={ errores.datos.hasOwnProperty('usuario') }
                  name="usuario"
                  label="Usuario"
                  onChange={ handleChange }
                  helperText={ errores.datos.hasOwnProperty('usuario') ? errores.datos.usuario : '' }
                  fullWidth
                  required
                  value={ formulario.usuario || '' }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  error={ errores.datos.hasOwnProperty('clave') }
                  name="clave"
                  label="Contraseña"
                  onChange={ handleChange }
                  helperText={ errores.datos.hasOwnProperty('clave') ? errores.datos.clave : '' }
                  fullWidth
                  required={ id === '0' }
                  value={ formulario.clave || '' }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel required id="selectRol">Rol</InputLabel>
                  <Select
                    labelId="selectRol"
                    name="rol"
                    label="Rol"
                    onChange={ handleChange }
                    fullWidth
                    required
                    value={ formulario.rol || '' }
                  >
                    {roles.map(function(rol, i){
                      return <MenuItem value={ rol } key={ i }>{ rol }</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={2}
                >
                  <Button variant="contained" color="error" component={ Link } to="/admin/usuarios">Cancelar</Button>
                  <Button variant="contained" color="success" type="submit">Guardar</Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Usuario
