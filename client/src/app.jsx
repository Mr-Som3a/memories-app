import {AppBar, Container, Typography, Grow, Grid} from '@mui/material'
import memories from './images/memories.png'
import Posts from './components/posts/posts'
import Form from './components/form/form'
import setStyles from './styles'
const App = () => {
  const classes = setStyles()
  return (
    <>
      <Container maxWidth="lg">
        <AppBar  sx={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h3" align="center">Memories</Typography>
          <img className={classes.image} height="60" src={memories} alt="memories" />
        </AppBar>
      </Container>
        <Grow in>
      <Container >
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid  >
              <Posts/>              
            </Grid>
            <Grid >
              <Form />
            </Grid>
          </Grid>
      </Container>
        </Grow>
    </>
  )
}

export default App