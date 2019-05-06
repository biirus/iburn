import React from "react";
import cn from "classnames";
import {
  isSameDay,
  min,
  max,
  differenceInCalendarDays,
  compareAsc
} from "date-fns";

// components
import { Calendar as CalendarBase } from "calendar";
import WeekDays from "./WeekDays";
import Day from "./Day";

// enhancers
import { enhance } from "./enhance";

class MonthView extends React.Component {
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
    const { month, maxDate, minDate } = this.props;

    return (
      day.getMonth() !== month ||
      (!!maxDate && day > maxDate) ||
      (!!minDate && day < minDate)
    );
  };

  handleClick = (day, e) => {
    const { range, onSelect, onClick } = this.props;

    if (range) {
      if (!this.state.isSelectionStarted) {
        this.setState(
          {
            isSelectionStarted: true,
            buffer: day,
          },
          () => {
            onClick(day, this.state.isSelectionStarted);
          }
        );
      } else {
        const { buffer } = this.state;
        onSelect([buffer, day].sort(compareAsc), e);

        this.setState(
          {
            isSelectionStarted: false,
            buffer: null,
            hovered: null,
          },
          () => {
            // TODO: handle this comment
            onClick(day, this.state.isSelectionStarted);
          }
        );
      }
    } else {
      onClick(day);
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
