import React from "react";

import withStyles from "react-jss";
import IconButton from "iburn/components/IconButton";
import Icon from "iburn/components/Icon";

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
      <IconButton>
        <Icon label="editor/edit" />
      </IconButton>

      <IconButton color="primary">
        <Icon label="lock" />
      </IconButton>

      <IconButton color="error">
        <Icon label="creditcard" />
      </IconButton>

      <IconButton variant="thin">
        <Icon label="editor/edit" />
      </IconButton>

      <IconButton variant="thin">
        <Icon label="lock" />
      </IconButton>

      <IconButton variant="thin">
        <Icon label="creditcard" />
      </IconButton>
    </div>
  );
}

export default enhance(Demo);
