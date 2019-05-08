import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import {
  min,
  max,
  isSameDay,
  compareAsc,
  differenceInCalendarDays
} from "date-fns";

// components
import { Calendar as CalendarBase } from "calendar";
import WeekDays from "../WeekDays";
import Day from "../Day";

// enhancers
import { enhance } from "./enhance";

class MonthView extends React.Component {
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
     * The month number to render it's days
     */
    month: PropTypes.number.isRequired,
    /**
     * The year to render month
     */
    year: PropTypes.number.isRequired,
    /**
     * Currently selected day or range of days
     */
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.instanceOf(Date)),
      PropTypes.instanceOf(Date),
    ]),
    /**
     * Minimal available date to select
     */
    min: PropTypes.instanceOf(Date),
    /**
     * Maximal available date to select
     */
    max: PropTypes.instanceOf(Date),
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
     * Callback function fired when a day element is selected. If `range={true}` then `onSelect` callback will be fired when both days in range will be selected. It is used to change `value`.
     */
    onSelect: PropTypes.func.isRequired,
    /**
     * Callback function fired when user clicks a day element.
     */
    onClick: PropTypes.func,
    /**
     * Object passed to the `Day` element
     */
    dayProps: PropTypes.object,
    /**
     * Object passed to the `WeekDays` element
     */
    weekDaysProps: PropTypes.object,
  };

  state = {
    isSelectionStarted: false,
    buffer: null,
    hovered: null,
  };

  isSelected = day => {
    const { value, range } = this.props;
    const { buffer, hovered } = this.state;

    if (!value && !buffer) {
      return false;
    }

    if (!range) {
      return isSameDay(day, value);
    }

    if (buffer) {
      return [buffer, hovered].some(item => isSameDay(item, day));
    }

    return value.some(item => isSameDay(item, day));
  };

  isDayHighlighted = day => {
    const { range, value } = this.props;
    const { isSelectionStarted, buffer, hovered } = this.state;

    if (!value && !buffer) {
      return false;
    }

    if (range) {
      const minDate = isSelectionStarted ? min([buffer, hovered]) : min(value);
      const maxDate = isSelectionStarted ? max([buffer, hovered]) : max(value);

      const moreThanMin = differenceInCalendarDays(day, minDate) > 0;
      const lessThanMax = differenceInCalendarDays(maxDate, day) > 0;

      return moreThanMin && lessThanMax;
    }

    return false;
  };

  isDayDisabled = day => {
    const { month, max, min } = this.props;

    return (
      day.getMonth() !== month || (!!max && day > max) || (!!min && day < min)
    );
  };

  handleClick = (day, e) => {
    const { range, onSelect, onClick } = this.props;

    if (range) {
      if (!this.state.isSelectionStarted) {
        const isSelectionStarted = true;

        onClick(day, this.state.isSelectionStarted);

        this.setState({
          isSelectionStarted,
          buffer: day,
        });
      } else {
        const { buffer } = this.state;
        const isSelectionStarted = false;

        onClick(day, isSelectionStarted);
        onSelect([buffer, day].sort(compareAsc), e);

        this.setState({
          isSelectionStarted,
          buffer: null,
          hovered: null,
        });
      }
    } else {
      onClick && onClick(day);
      onSelect(day, e);
    }
  };

  handleMouseOver = (day, e) => {
    const { range } = this.props;
    const { isSelectionStarted } = this.state;

    if (range && isSelectionStarted) {
      this.setState({
        hovered: day,
      });
    }
  };

  render () {
    const {
      className,
      classes,
      year,
      month,
      locale,
      weekDaysProps,
      dayProps,
    } = this.props;

    const { options } = locale;

    const firstDayOfWeek = options.weekStartsOn;
    const cal = new CalendarBase(firstDayOfWeek);
    const dates = cal.monthDates(year, month).reduce((acc, week) => {
      return acc.concat(week);
    }, []);

    const classNames = cn(classes.root, className);

    return (
      <div className={classNames}>
        <WeekDays locale={locale} {...weekDaysProps} />

        <div className={classes.month}>
          {dates.map((day, index) => (
            <Day
              key={day}
              value={day}
              selected={this.isSelected(day)}
              disabled={this.isDayDisabled(day)}
              highlighted={this.isDayHighlighted(day)}
              onMouseOver={this.handleMouseOver}
              onClick={this.handleClick}
              {...dayProps}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default enhance(MonthView);
