import React from "react";

import withStyles from "react-jss";
import Button from "iburn/components/Button";
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
      <Button icon={<Icon label="editor/edit" />}>Edit</Button>
      <Button iconAfter={<Icon label="googledrive" />}>Google Drive</Button>
      <Button
        icon={<Icon label="lock" />}
        iconAfter={<Icon label="lock-filled" />}
      >
        Both icons
      </Button>
    </div>
  );
}

export default enhance(Demo);
