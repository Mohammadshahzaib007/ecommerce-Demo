import React from "react";
import Typography from "@material-ui/core/Typography";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.HeadingSection}>
        <Typography
          style={{ fontSize: "1.8rem", color: "#ffff" }}
          variant="h6"
        >Copyright © 2020 E - Mart. All Rights Reserved.</Typography>
      </div>
    </div>
  );
}
