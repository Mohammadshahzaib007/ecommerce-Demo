import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut,  showLoader, hideLoader } from "../../../store/actions/actions";
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: "2.5rem",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  icon: {
    margin: "1rem",
    fontSize: "2.5rem",
    color: "white",
  },
  btn: {
    fontSize: "1.8rem",
    color: "#fff",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();

  const link = {
    color: "#fff",
    textDecoration: "none",
  };

  const signOutHandler = () => {
    props.signOut();
    props.showLoader();
    setTimeout( () => {
    props.hideLoader();
  }, 2000)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <NavLink to="/" style={link}>
            <Typography variant="h6" className={classes.title}>
              E - Mart
            </Typography>
          </NavLink>

          <div className={classes.container}>
            <NavLink to="/">
              <IconButton>
                <HomeOutlinedIcon className={classes.icon} />
              </IconButton>
            </NavLink>

            <NavLink to="/cart">
              <IconButton>
                <ShoppingCartOutlinedIcon className={classes.icon} />
              </IconButton>
            </NavLink>

            {props.uid ?  <Button
              onClick={signOutHandler}
              className={classes.btn}
              color="inherit"
            >
              {props.btnLoader ? <CircularProgress color="secondary"/> : <>Sign Out</>}
            </Button>
            :
            <NavLink to="/Signin">
            <Button className={classes.btn} color="inherit">
              Sign in
            </Button>
          </NavLink>}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    uid: state.auth.currentUser,
    btnLoader: state.btnLoader
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
