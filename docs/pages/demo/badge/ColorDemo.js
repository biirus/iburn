import React from "react";

import withStyles from "react-jss";
import Badge from "iburn/components/Badge";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {},

    badge: {
      margin: [[0, spacing.small, spacing.small, 0]],
    },
  };
});

function Demo ({ classes }) {
  return (
    <div className={classes.root}>
      <Badge className={classes.badge}>inline:code</Badge>

      <Badge color="primary" className={classes.badge}>
        10 new messages
      </Badge>

      <Badge color="error" className={classes.badge}>
        failed
      </Badge>

      <Badge color="warning" className={classes.badge}>
        not secure
      </Badge>

      <Badge color="success" className={classes.badge}>
        approved
      </Badge>

      <Badge color="info" className={classes.badge}>
        update is available
      </Badge>
    </div>
  );
}

export default enhance(Demo);
