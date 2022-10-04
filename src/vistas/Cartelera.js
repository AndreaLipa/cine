import { Container, Grid, CardActionArea, Card, CardMedia, CardContent, Typography } from '@mui/material'

function Cartelera() {
  return (
    <Container>
      <Typography variant="h6" component="div" align="center" sx={{ py: 2 }}>
        Cartelera
      </Typography>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="415"
                image="https://es.web.img3.acsta.net/c_310_420/pictures/22/08/30/13/02/2562155.jpg"
                alt="Película"
              />
              <CardContent>
                <Typography variant="body1" component="div" align="center">
                  Pinocho
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="415"
                image="https://es.web.img3.acsta.net/r_160_213/pictures/22/08/30/11/18/5774510.png"
                alt="Película"
              />
              <CardContent>
                <Typography variant="body1" component="div" align="center">
                  La huérfana: Primer asesinato
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="415"
                image="https://es.web.img3.acsta.net/c_310_420/pictures/22/07/06/14/16/5147637.jpg"
                alt="Película"
              />
              <CardContent>
                <Typography variant="body1" component="div" align="center">
                  Dragon Ball Super
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="415"
                image="https://es.web.img3.acsta.net/c_310_420/pictures/22/07/14/14/56/0751518.jpg"
                alt="Película"
              />
              <CardContent>
                <Typography variant="body1" component="div" align="center">
                  After: Amor infinito
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cartelera
