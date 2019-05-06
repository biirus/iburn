import React, { useState } from "react";

import withStyles from "react-jss";

import Calendar from "iburn/components/Calendar";
import Typography from "iburn/components/Typography";

const enhance = withStyles(({ spacing }) => {
  const calendarSize = spacing.unit * 40;

  return {
    row: {
      display: "grid",
      gridTemplateColumns: `${calendarSize}px 1fr`,
      gridGap: `${spacing.large}px`,
      marginBottom: spacing.large,
    },
  };
});

function Demo ({ classes }) {
  const [value, change] = useState([]);
  const [initialValue, changeInitialValue] = useState([
    new Date("2017-05-03"),
    new Date("2017-05-10"),
  ]);

  return (
    <div>
      <div className={classes.row}>
        <Calendar
          range={true}
          value={value}
          onChange={e => change(e.target.value)}
        />

        <div>
          <Typography type="h500">Selected range</Typography>

          <pre>
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        </div>
      </div>

      <div className={classes.row}>
        <Calendar
          value={initialValue}
          range={true}
          onChange={e => changeInitialValue(e.target.value)}
        />

        <div>
          <Typography type="h500">Initially selected range</Typography>

          <pre>
            <code>{JSON.stringify(initialValue, null, 2)}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default enhance(Demo);
