import React, { useState, useCallback } from "react";

import withStyles from "react-jss";
import Dialog from "iburn/components/Dialog";
import Button from "iburn/components/Button";
import Typography from "iburn/components/Typography";
import TextField from "iburn/components/TextField";

const enhance = withStyles(({ spacing }) => {
  return {
    loginForm: {
      display: "grid",
      gridTemplateRows: "repeat(4, auto)",
      gridGap: `${spacing.medium}px`,
      padding: spacing.large,
    },

    btn: {
      justifySelf: "end",
    },
  };
});

const Demo = enhance(({ classes }) => {
  const [open, toggle] = useState(false);

  const toggleDialog = useCallback(() => {
    toggle(!open);
  }, [open]);

  return (
    <div className={classes.root}>
      <Button onClick={toggleDialog}>Sign in</Button>

      <Dialog isOpen={open} onClose={toggleDialog}>
        <div className={classes.loginForm}>
          <Typography type="h700">Welcome to iBurn</Typography>

          <div>
            <Typography type="h200">Email</Typography>
            <TextField type="email" block />
          </div>

          <div>
            <Typography type="h200">Password</Typography>
            <TextField type="password" block />
          </div>

          <Button className={classes.btn} color="primary">
            Sign in
          </Button>
        </div>
      </Dialog>
    </div>
  );
});

export default Demo;
