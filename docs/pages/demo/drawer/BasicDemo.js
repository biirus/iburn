import React, { useState, useCallback } from "react";

import withStyles from "react-jss";
import Drawer from "iburn/components/Drawer";
import Button from "iburn/components/Button";
import Typography from "iburn/components/Typography";

const enhance = withStyles(({ spacing }) => {
  return {
    btn: {
      "&+$btn": {
        marginLeft: spacing.small,
      },
    },

    drawer: {
      width: spacing.unit * 30,
      padding: spacing.medium,
    },
  };
});

const Demo = enhance(({ classes }) => {
  const [drawers, toggle] = useState({ left: false, right: false });

  const toggleDrawer = useCallback(drawer => {
    return () => {
      toggle({
        ...drawers,
        [drawer]: !drawers[drawer],
      });
    };
  });

  return (
    <div className={classes.root}>
      <Button className={classes.btn} onClick={toggleDrawer("left")}>
        Toggle left
      </Button>

      <Button className={classes.btn} onClick={toggleDrawer("right")}>
        Toggle right
      </Button>

      <Drawer isOpen={drawers.left} onClose={toggleDrawer("left")}>
        <div className={classes.drawer}>
          <Typography type="h400" gutterBottom>
            Left Drawer
          </Typography>

          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            consequuntur quas assumenda provident adipisci dolores quibusdam
            ipsam pariatur quae fuga temporibus voluptates, rem, illum aliquid
            possimus vitae sapiente cumque maxime?
          </Typography>
        </div>
      </Drawer>

      <Drawer
        position="right"
        isOpen={drawers.right}
        onClose={toggleDrawer("right")}
      >
        <div className={classes.drawer}>
          <Typography type="h400" gutterBottom>
            Right Drawer
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
