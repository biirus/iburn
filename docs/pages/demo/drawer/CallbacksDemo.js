import React, { useState, useCallback } from "react";

import withStyles from "react-jss";
import Drawer from "iburn/components/Drawer";
import Button from "iburn/components/Button";
import Typography from "iburn/components/Typography";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: `min-content 1fr`,
      gridGap: `${spacing.large}px`,
    },

    drawer: {
      width: spacing.unit * 30,
      padding: spacing.medium,
    },
  };
});

const Demo = enhance(({ classes }) => {
  const [open, toggle] = useState(false);
  const [callbacks, fire] = useState({ onEnter: false, onExit: false });

  const toggleDrawer = useCallback(() => {
    toggle(!open);
  });

  const trigger = useCallback(isOpening => {
    return () => {
      const onEnter = isOpening;
      const onExit = !isOpening;
      fire({ onEnter, onExit });
    };
  });

  return (
    <div className={classes.root}>
      <Button onClick={toggleDrawer}>Toggle drawer</Button>

      <div>
        <Typography type="h500">Callbacks state</Typography>

        <pre>
          <code>{JSON.stringify(callbacks, null, 2)}</code>
        </pre>
      </div>

      <Drawer
        isOpen={open}
        onEnter={trigger(true)}
        onExit={trigger(false)}
        onClose={toggleDrawer}
      >
        <div className={classes.drawer}>
          <Typography type="h400" gutterBottom>
            Drawer
          </Typography>

          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            consequuntur quas assumenda provident adipisci dolores quibusdam
            ipsam pariatur quae fuga temporibus voluptates, rem, illum aliquid
            possimus vitae sapiente cumque maxime?
          </Typography>
        </div>
      </Drawer>
    </div>
  );
});

export default Demo;
