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
      justifyItems: "start",
    },
  };
});

function Demo ({ classes }) {
  return (
    <div className={classes.root}>
      <ButtonGroup selectable={true}>
        <Button value="routing">Routing</Button>
        <Button value="splitting">Splitting</Button>
        <Button value="rendering">Rendering</Button>
      </ButtonGroup>

      <ButtonGroup selectable={true} value="initial">
        <Button value="initial">Initially selected</Button>
        <Button value="second">Sencond item</Button>
        <Button value="third">Third item</Button>
        <Button value="fourth">Fourth item</Button>
      </ButtonGroup>
    </div>
  );
}

export default enhance(Demo);
