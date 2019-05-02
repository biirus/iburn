import React from "react";

// lib
import cn from "classnames";
import { capitalize } from "../../lib";

// components
import Button from "components/Button";

// enhancers
import { enhance } from "./enhance";

const monthPerYear = 12;
const monthes = Array.from({ length: monthPerYear }, (_, i) => i);

class MonthView extends React.PureComponent {
  render () {
    const { className, classes, locale, onSelect } = this.props;
    const { localize } = locale;

    const classNames = cn(classes.root, className);

    return (
      <div className={classNames}>
        {monthes.map((month, index) => (
          <Button
            key={index}
            variant="thin"
            className={classes.month}
            onClick={() => onSelect(month)}
          >
            {capitalize(localize.month(month))}
          </Button>
        ))}
      </div>
    );
  }
}

export default enhance(MonthView);
