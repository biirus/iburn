import React from "react";

// lib
import * as locales from "date-fns/esm/locale";
import cn from "classnames";
import { capitalize } from "../../lib";

// components
import Button from "components/Button";
import Table from "components/Table";
import TableBody from "components/Table/Body";
import TableRow from "components/Table/Row";
import TableCell from "components/Table/Cell";

// enhancers
import { enhance } from "./enhance";

const monthPerYear = 12;
const monthes = Array.from({ length: monthPerYear, }, (_, i) => i);
const yearArray = monthes.reduce(
  (acc, month, index) => {
    const accIndex = Math.floor(index / 3);

    acc[accIndex] = [...acc[accIndex], month,];
    return acc;
  },
  [[], [], [], [],]
);

class MonthView extends React.PureComponent {
  render () {
    const { className, classes, locale: localeString, onSelect, } = this.props;

    const locale = locales[localeString];
    const { localize, } = locale;

    const classNames = cn(classes.root, className);

    return (
      <Table className={classNames}>
        <TableBody>
          {yearArray.map((monthes, index) => (
            <TableRow key={index}>
              {monthes.map((month, index) => (
                <TableCell key={index} className={classes.cell}>
                  <Button
                    view="thin"
                    className={classes.tile}
                    classes={{ content: classes.tileContent, }}
                    onClick={() => onSelect(month)}
                  >
                    {capitalize(localize.month(month))}
                  </Button>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default enhance(MonthView);
