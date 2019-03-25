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
    },
  };
});

function Demo ({ classes }) {
  return (
    <div className={classes.root}>
      <ButtonGroup>
        <Button>Reply</Button>
        <Button>Reply All</Button>
        <Button>Forward</Button>
      </ButtonGroup>

      <ButtonGroup color="primary">
        <Button>Reply</Button>
        <Button>Reply All</Button>
        <Button>Forward</Button>
      </ButtonGroup>

      <ButtonGroup color="error">
        <Button>Achtung</Button>
        <Button>Run for your lifes</Button>
        <Button>Launch missiles</Button>
      </ButtonGroup>

      <ButtonGroup color="success">
        <Button>Good</Button>
        <Button>Better</Button>
        <Button>The best</Button>
      </ButtonGroup>

      <ButtonGroup color="info">
        <Button>Help</Button>
        <Button>More Info</Button>
      </ButtonGroup>

      <ButtonGroup color="warning">
        <Button>Warning</Button>
        <Button>Be ware</Button>
        <Button>Attention</Button>
      </ButtonGroup>
    </div>
  );
}

export default enhance(Demo);
