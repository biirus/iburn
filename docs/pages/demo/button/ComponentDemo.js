import React from "react";

import withStyles from "react-jss";
import Button from "iburn/components/Button";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: `repeat(3, max-content)`,
      gridGap: `${spacing.large}px`,
      alignItems: "center",
    },
  };
});

function Demo (props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Button component="div">Div component</Button>
      <Button href="https://google.com" target="_blank">
        Link to the Google
      </Button>
    </div>
  );
}

export default enhance(Demo);
