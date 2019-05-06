import React, { useState } from "react";

import withStyles from "react-jss";

import Calendar from "iburn/components/Calendar";
import Typography from "iburn/components/Typography";

const enhance = withStyles(({ spacing }) => {
  const calendarSize = spacing.unit * 40;

  return {
    root: {
      display: "grid",
      gridTemplateColumns: `${calendarSize}px 1fr`,
      gridGap: `${spacing.large}px`,
    },
  };
});

function Demo ({ classes }) {
  const [value, change] = useState(new Date("2019-05-09"));

  return (
    <div className={classes.root}>
      <Calendar value={value} onChange={e => change(e.target.value)} />

      <div>
        <Typography type="h500">Selected</Typography>

        <pre>
          <code>{JSON.stringify(value, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

export default enhance(Demo);
