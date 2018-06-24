import React from "react";
import cn from "classnames";
import * as locales from "date-fns/esm/locale";
import {
  isSameDay,
  min,
  max,
  differenceInCalendarDays,
  compareAsc
} from "date-fns";

// components
import { Calendar as CalendarBase } from "calendar";
import Table from "components/Table";
import TableBody from "components/Table/Body";
import TableRow from "components/Table/Row";
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
    const { selected, range, } = this.props;
    const { buffer, hovered, } = this.state;

    if (!range) {
      return isSameDay(day, selected);
    }

    if (buffer) {
      return [buffer, hovered,].some(item => isSameDay(item, day));
    }

    return selected.some(item => isSameDay(item, day));
  };

  isDayHighlighted = day => {
    const { range, selected, } = this.props;
    const { isSelectionStarted, buffer, hovered, } = this.state;

    if (range) {
      let minDate = min(selected);
      let maxDate = max(selected);

      if (isSelectionStarted) {
        minDate = min([buffer, hovered,]);
        maxDate = max([buffer, hovered,]);
      }

      const moreThanMin = differenceInCalendarDays(day, minDate) > 0;
      const lessThanMax = differenceInCalendarDays(maxDate, day) > 0;

      return moreThanMin && lessThanMax;
    }

    return false;
  };

  isDayDisabled = day => {
    const { month, maxDate, minDate, } = this.props;

    return (
      day.getMonth() !== month ||
      (!!maxDate && day > maxDate) ||
      (!!minDate && day < minDate)
    );
  };

  handleClick = (day, e) => {
    const { range, onSelect, onClick, } = this.props;

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
        const { buffer, } = this.state;
        onSelect([buffer, day,].sort(compareAsc), e);

        this.setState(
          {
            isSelectionStarted: false,
            buffer: null,
            hovered: null,
          },
          () => {
            // onClick(day, this.state.isSelectionStarted);
          }
        );
      }
    } else {
      onClick(day);
      onSelect(day, e);
    }
  };

  handleHover = (day, e) => {
    const { range, } = this.props;
    const { isSelectionStarted, } = this.state;

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
      locale: localeString,
    } = this.props;

    const locale = locales[localeString];
    const { options, } = locale;

    const firstDayOfWeek = options.weekStartsOn;
    const cal = new CalendarBase(firstDayOfWeek);
    const monthArray = cal.monthDates(year, month);

    const classNames = cn(classes.root, className);

    return (
      <Table className={classNames}>
        <WeekDays locale={localeString} />

        <TableBody>
          {monthArray.map((week, index) => (
            <TableRow key={index}>
              {week.map((day, index) => (
                <Day
                  key={index}
                  value={day}
                  selected={this.isSelected(day)}
                  disabled={this.isDayDisabled(day)}
                  highlighted={this.isDayHighlighted(day)}
                  onClick={this.handleClick}
                  onHover={this.handleHover}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default enhance(MonthView);
