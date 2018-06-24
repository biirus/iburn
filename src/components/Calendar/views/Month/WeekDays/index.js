import React from "react";
import * as locales from "date-fns/esm/locale";

// components
import TableCell from "components/Table/Cell";
import TableRow from "components/Table/Row";
import TableHead from "components/Table/Head";

// enhancers
import { enhance } from "./enhance";

const daysPerWeek = 7;
const week = Array.from({ length: daysPerWeek, }, (_, i) => i);

class WeekDays extends React.PureComponent {
  render () {
    const { classes, locale: localeString, } = this.props;

    const locale = locales[localeString];
    const { options, localize, } = locale;

    const firstDayOfWeek = options.weekStartsOn;

    const localizedWeek = week
      .slice(firstDayOfWeek, daysPerWeek)
      .concat(week.slice(0, firstDayOfWeek))
      .map(day => localize.day(day, { width: "short", }));

    return (
      <TableHead>
        <TableRow>
          {localizedWeek.map((day, index) => (
            <TableCell key={index} align="center" className={classes.cell}>
              {day}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
}

export default enhance(WeekDays);
