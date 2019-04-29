import React from "react";

import withStyles from "react-jss";

import Button from "iburn/components/Button";
import ButtonGroup from "iburn/components/Button/Group";

const enhance = withStyles(() => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridGap: "16px",
      width: 500,
      justifyItems: "start",
    },
  };
});

function Demo ({ classes }) {
  return (
    <div className={classes.root}>
      <ButtonGroup justified={true}>
        <Button>Small</Button>
        <Button>=== Medium ===</Button>
        <Button>====== Large ======</Button>
      </ButtonGroup>
    </div>
  );
}

export default enhance(Demo);
