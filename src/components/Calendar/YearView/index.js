import React from "react";
import PropTypes from "prop-types";

// lib
import cn from "classnames";
import { capitalize } from "../lib";

// components
import Button from "components/Button";

// enhancers
import { enhance } from "./enhance";

const monthPerYear = 12;
const monthes = Array.from({ length: monthPerYear }, (_, i) => i);

class MonthView extends React.PureComponent {
  static propTypes = {
    /**
     * Class name string to be merged to the root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/) classes object notation
     */
    classes: PropTypes.object,
    /**
     * Locale string such as `ru`, `ja`, `en` or config object. Check out the complete list of available languages here [date-fns i18n](https://date-fns.org/docs/I18n). You can find an additional information for creation your own locale config.
     */
    locale: PropTypes.oneOfType([
      PropTypes.string,

      PropTypes.shape({
        formatDistance: PropTypes.func.isRequired,
        formatLong: PropTypes.shape({
          date: PropTypes.func.isRequired,
          dateTime: PropTypes.func.isRequired,
          time: PropTypes.func.isRequired,
        }),
        formatRelative: PropTypes.func.isRequired,
        localize: PropTypes.shape({
          day: PropTypes.func.isRequired,
          dayPeriod: PropTypes.func.isRequired,
          era: PropTypes.func.isRequired,
          month: PropTypes.func.isRequired,
          ordinalNumber: PropTypes.func.isRequired,
          quarter: PropTypes.func.isRequired,
        }),
        match: PropTypes.shape({
          day: PropTypes.func.isRequired,
          dayPeriod: PropTypes.func.isRequired,
          era: PropTypes.func.isRequired,
          month: PropTypes.func.isRequired,
          ordinalNumber: PropTypes.func.isRequired,
          quarter: PropTypes.func.isRequired,
        }),
        options: PropTypes.shape({
          weekStartsOn: PropTypes.number.isRequired,
          firstWeekContainsDate: PropTypes.number.isRequired,
        }),
      }),
    ]),
    /**
     * Callback fired when month button is clicked
     */
    onSelect: PropTypes.func.isRequired,
  };

  render () {
    const { className, classes, locale, onSelect } = this.props;
    const { localize } = locale;

    const classNames = cn(classes.root, className);

    return (
      <div className={classNames}>
        {monthes.map((month, index) => (
          <div key={index} className={classes.monthWrapper}>
            <Button
              variant="thin"
              className={classes.month}
              onClick={() => onSelect(month)}
            >
              {capitalize(localize.month(month))}
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

export default enhance(MonthView);
