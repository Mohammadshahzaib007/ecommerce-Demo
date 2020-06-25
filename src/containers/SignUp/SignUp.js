import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { createNewUser, showLoader, hideLoader } from '../../store/actions/actions';
import { Redirect } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        <NavLink to ="/" color="inherit" style={{color: '#757575'}}>
          E - Mart
      </NavLink>
     {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: '1.8rem'
  },
}));

 function SignUp(props) {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createNewUserHandler = ( email, password) => {
    props.createNewUser(email, password);
    props.showLoader();
    setTimeout( () => {
    props.hideLoader();
  }, 2000)
  }

  if(props.uid) return <Redirect to="/" />

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{fontSize: '3rem'}} component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={ e => e.preventDefault()} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                inputProps={{
                  style: {fontSize: '2rem'} 
                }}
                //id="standard-multiline-flexible"
                InputLabelProps={{style: {fontSize: '2rem'}}}
                autoComplete="name"
                name="Name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              inputProps={{
                style: {fontSize: '2rem'} 
              }}
              //id="standard-multiline-flexible"
              InputLabelProps={{style: {fontSize: '2rem'}}}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              inputProps={{
                style: {fontSize: '2rem'} 
              }}
              //id="standard-multiline-flexible"
              InputLabelProps={{style: {fontSize: '2rem'}}}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={<Typography style={{fontSize: "1.5rem"}} variant="h6" color="inherit">I want to receive new offers and updates via email.</Typography>}
              />
            </Grid>
          </Grid>
          <Typography style={{fontSize: "1.5rem", color: 'red'}} variant="h6">{props.signupError}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => createNewUserHandler(email, password)}
          >
            {props.btnLoader ? <CircularProgress color="secondary" /> : <>Sign Up </> }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
                <NavLink to="/signin" variant="body2" style={{fontSize: '1.5rem'}}>
                  Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: (email, password) => dispatch(createNewUser(email, password)),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
  }
}

const mapStateToProps = state => {
  return {
    uid: state.auth.currentUser,
    signupError: state.signupError,
    btnLoader: state.btnLoader
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)