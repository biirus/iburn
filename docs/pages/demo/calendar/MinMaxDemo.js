import React, { useState } from "react";

import withStyles from "react-jss";

import Badge from "iburn/components/Badge";
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

  const minDate = new Date("2019-05-04");
  const maxDate = new Date("2019-05-23");

  return (
    <div className={classes.root}>
      <Calendar
        min={minDate}
        max={maxDate}
        value={value}
        onChange={e => change(e.target.value)}
      />

      <div>
        <Typography type="h300" component="p">
          Min date:
          <Badge component="span">{minDate.toLocaleDateString()}</Badge>
        </Typography>

        <Typography type="h300" component="p">
          Max date:
          <Badge component="span">{maxDate.toLocaleDateString()}</Badge>
        </Typography>

        <Typography type="h300" component="p">
          Selected:
          <Badge component="span">{value.toLocaleDateString()}</Badge>
        </Typography>
      </div>
    </div>
  );
}

export default enhance(Demo);
