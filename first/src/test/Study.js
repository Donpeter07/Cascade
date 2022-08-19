import React from 'react'
import {Typography, AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, makeStyles} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { Button } from '@mui/material';
// import {makeStyles} from '@mui/material/core/styles'

// const useStyles = makeStyles((theme)=> ({
// container: {
//   backgroundColor: theme.palette.background.paper,
//   padding:theme.spacing(8, 0, 6) 
// }
// }));

function Study() {
  // const classes = useStyles();
  return (
    <>
    <CssBaseline />
    <AppBar position='relative'>
        <Toolbar>
            <PhotoCamera />
            <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
    </AppBar>
    <main>
      <div 
      // className={classes.container}
      >
        <Container maxWidth='sm' style={{marginTop:'100px'}}>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content </Typography>
          <div>
            <Grid Container spacing={2} justify='center'>
              <Grid item>
                <Button variant='contained' color='primary'>click me to see more</Button>
              
                <Button variant='outlined' color='primary'>hello buttn</Button>
              </Grid>
            </Grid>
          </div>
        </Container> 
      </div>    
    </main>
    </>
  )
}

export default Study