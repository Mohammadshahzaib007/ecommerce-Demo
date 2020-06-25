import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import { signIn, showLoader, hideLoader } from '../../store/actions/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <NavLink to="/" style={{fontSize: '1.2rem'}} color="inherit">
        E - Mart
      </NavLink>{' '}
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: '1.8rem',
  },
}));

 function SignIn(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signInWithEmailAndPasswordHandler = ( email, password) => {
    props.signIn(email, password);
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
        <Typography component="h1" style={{fontSize: '3rem'}} variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={ e => e.preventDefault()} noValidate>
          <TextField
          InputLabelProps={{style: {fontSize: '2rem'}}}
          inputProps={{
            style: {fontSize: '2rem'},
          }}
            //id="standard-multiline-flexible"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={ e => setEmail(e.target.value)}
          />
          <TextField
           inputProps={{
            style: {fontSize: '2rem'} 
          }}
          //id="standard-multiline-flexible"
          InputLabelProps={{style: {fontSize: '2rem'}}}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={ e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label= {<Typography style={{fontSize: "1.5rem"}} variant="h6" color="inherit">Remember me</Typography>}
          />
          <Typography style={{fontSize: "1.5rem", color: 'red'}} variant="h6">{props.authError}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={ () => signInWithEmailAndPasswordHandler(email, password)}
          >
            {props.btnLoader ? <CircularProgress color="secondary" /> : <>Sign In</>}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link style={{fontSize: '1.5rem'}} href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
                <NavLink  to="/signup"variant="body2" style={{fontSize: '1.5rem'}}>
                  {"Don't have an account? Sign Up"}
                </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    authError: state.authError,
    uid: state.auth.currentUser,
    btnLoader: state.btnLoader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);