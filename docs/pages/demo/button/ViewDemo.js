import React from "react";

import withStyles from "react-jss";
import Button from "iburn/components/Button";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: `repeat(3, max-content)`,
      gridGap: `${spacing.large}px`,
    },
  };
});

function Demo (props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Button>Default Button</Button>
      <Button view="thin">Thin Button</Button>
      <Button view="link">Link Button</Button>
    </div>
  );
}

export default enhance(Demo);
