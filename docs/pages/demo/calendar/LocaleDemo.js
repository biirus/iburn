import React, { useState } from "react";

import withStyles from "react-jss";

import Calendar from "iburn/components/Calendar";

const enhance = withStyles(({ spacing }) => {
  const calendarSize = spacing.unit * 30;

  return {
    root: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(${calendarSize}px, 1fr))`,
      gridGap: `${spacing.large}px`,
    },
  };
});

function Demo ({ classes }) {
  const [value, change] = useState(new Date("2019-05-09"));

  return (
    <div className={classes.root}>
      <Calendar
        locale="ru"
        value={value}
        onChange={e => change(e.target.value)}
      />
      <Calendar
        locale="ja"
        value={value}
        onChange={e => change(e.target.value)}
      />
      <Calendar value={value} onChange={e => change(e.target.value)} />
    </div>
  );
}

export default enhance(Demo);
