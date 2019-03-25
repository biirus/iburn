import React from "react";

import withStyles from "react-jss";
import Button from "iburn/components/Button";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: `repeat(3, max-content) 1fr`,
      gridGap: `${spacing.large}px`,
      alignItems: "center",
    },
  };
});

function Demo (props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Button>Default Button</Button>
      <Button padding="inline">Inline Button</Button>
      <Button padding="compact">Compact Button</Button>
      <Button padding="block">Block Button</Button>
    </div>
  );
}

export default enhance(Demo);
