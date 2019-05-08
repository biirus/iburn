import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

const daysPerWeek = 7;
const week = Array.from({ length: daysPerWeek }, (_, i) => i);

class WeekDays extends PureComponent {
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
  };

  render () {
    const { className, classes, locale } = this.props;
    const { options, localize } = locale;
    const firstDayOfWeek = options.weekStartsOn;

    const localizedWeek = week
      .slice(firstDayOfWeek, daysPerWeek)
      .concat(week.slice(0, firstDayOfWeek))
      .map(day => localize.day(day, { width: "short" }));

    const classNames = cn(classes.root, className);

    return (
      <div className={classNames}>
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
