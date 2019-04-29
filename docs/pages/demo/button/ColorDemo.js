import React from "react";

import withStyles from "react-jss";
import Button from "iburn/components/Button";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fill, minmax(120px, 1fr))`,
      gridGap: `${spacing.large}px`,
    },
  };
});

function Demo (props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Button>Default Button</Button>
      <Button color="primary">Primary Button</Button>
      <Button color="success">Success Button</Button>
      <Button color="warning">Warning Button</Button>
      <Button color="error">Error Button</Button>
      <Button color="info">Info Button</Button>
    </div>
  );
}

export default enhance(Demo);
