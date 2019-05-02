import React, { PureComponent } from "react";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

const daysPerWeek = 7;
const week = Array.from({ length: daysPerWeek }, (_, i) => i);

class WeekDays extends PureComponent {
  render () {
    const { classes, locale } = this.props;
    const { options, localize } = locale;
    const firstDayOfWeek = options.weekStartsOn;

    const localizedWeek = week
      .slice(firstDayOfWeek, daysPerWeek)
      .concat(week.slice(0, firstDayOfWeek))
      .map(day => localize.day(day, { width: "short" }));

    return (
      <div className={classes.root}>
        {localizedWeek.map((day, index) => (
          <Typography type="h200" key={index} className={classes.weekDay}>
            {day}
          </Typography>
        ))}
      </div>
    );
  }
}

export default enhance(WeekDays);
