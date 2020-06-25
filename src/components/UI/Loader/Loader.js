import React from "react";

import classes from "./Loader.module.css";

const loader = () => (
  <div className={classes.Sk_chase}>
    <div className={classes.Sk_chase_dot}></div>
    <div className={classes.Sk_chase_dot}></div>
    <div className={classes.Sk_chase_dot}></div>
    <div className={classes.Sk_chase_dot}></div>
    <div className={classes.Sk_chase_dot}></div>
    <div className={classes.Sk_chase_dot}></div>
  </div>
);

export default loader;
