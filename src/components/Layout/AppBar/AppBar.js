import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: '2.5rem'
  },
  toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center'
  },
  icon: {
    margin: '1rem',
      fontSize: '2.5rem',
      color: 'white'
  },
  btn: {
      fontSize: '1.8rem'
  },
  container: {
      display: 'flex',
      alignItems: 'center'
  }
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const link = {
    color: '#fff',
    textDecoration: 'none',

  }

  return (
    <div  className={classes.root}>
      <AppBar  position="static">
        <Toolbar className={classes.toolbar}>
        <NavLink to="/" style={link}>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </NavLink>
          
        <div className={classes.container}>
          <NavLink to="/cart">
            <IconButton>
              <ShoppingCartOutlinedIcon className={classes.icon} />
            </IconButton>
          </NavLink>
          
          <Button className={classes.btn} color="inherit">Login</Button>
         </div>
       </Toolbar>
     </AppBar>
    </div>
  );
}
