import React, { useState, useCallback } from "react";

import withStyles from "react-jss";

import Button from "iburn/components/Button";
import ButtonGroup from "iburn/components/Button/Group";
import Typography from "iburn/components/Typography";

const enhance = withStyles(() => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "32px",
      alignItems: "center",
    },

    groups: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridGap: "16px",
      justifyItems: "start",
    },
  };
});

function Demo ({ classes }) {
  const [groups, select] = useState({
    tech: null,
    numbers: "initial",
  });

  const changeHandler = useCallback(e => {
    select({
      ...groups,
      [e.target.name]: e.target.value,
    });
  });

  return (
    <div className={classes.root}>
      <div className={classes.groups}>
        <ButtonGroup
          name="tech"
          value={groups.tech}
          selectable={true}
          onChange={changeHandler}
        >
          <Button value="routing">Routing</Button>
          <Button value="splitting">Splitting</Button>
          <Button value="rendering">Rendering</Button>
        </ButtonGroup>

        <ButtonGroup
          name="numbers"
          selectable={true}
          value={groups.numbers}
          onChange={changeHandler}
        >
          <Button value="initial">Initially selected</Button>
          <Button value="second">Sencond item</Button>
          <Button value="third">Third item</Button>
          <Button value="fourth">Fourth item</Button>
        </ButtonGroup>
      </div>

      <div>
        <Typography type="h500">Selected</Typography>
        <pre>
          <code>{JSON.stringify(groups, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

export default enhance(Demo);
