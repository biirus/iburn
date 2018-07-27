import React from "react";
import PropTypes from "prop-types";

// lib
import cn from "classnames";
import { getMonth, getYear } from "date-fns";
import * as locales from "date-fns/esm/locale";
import { capitalize } from "./lib";

// components
import Controls from "./Controls";
import MonthView from "./views/Month";
import YearView from "./views/Year";

// enhancers
import { enhance } from "./enhance";

/**
 * Clean and simple to use Calendar Component
 */
class Calendar extends React.Component {
  static defaultProps = {
    locale: "enUS",
    onChange: f => f,
    onDayClick: f => f,
  };

  static propTypes = {
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

  constructor (props) {
    super(props);

    const today = new Date();
    let selected = props.value || today;

    if (props.range && !Array.isArray(selected)) {
      selected = [selected, selected,];
    }

    this.state = {
      year: getYear(props.range ? selected[0] : selected),
      month: getMonth(props.range ? selected[0] : selected),
      view: "month",
      selected,
    };
  }

  prevMonth = () => {
    this.setState(({ month, year, }) => {
      const prevMonth = month - 1;
      const prevYear = prevMonth < 0 ? year - 1 : year;

      return {
        month: (prevMonth + 12) % 12,
        year: prevYear,
      };
    });
  };

  nextMonth = () => {
    this.setState(({ month, year, }) => {
      const nextMonth = month + 1;
      const nextYear = nextMonth >= 12 ? year + 1 : year;

      return {
        month: nextMonth % 12,
        year: nextYear,
      };
    });
  };

  prevYear = () => {
    this.setState(({ year, }) => ({
      year: year - 1,
    }));
  };

  nextYear = () => {
    this.setState(({ year, }) => ({
      year: year + 1,
    }));
  };

  handlePrev = () => {
    const { view, } = this.state;
    return view === "year" ? this.prevYear() : this.prevMonth();
  };

  handleNext = () => {
    const { view, } = this.state;
    return view === "year" ? this.nextYear() : this.nextMonth();
  };

  handleMonthSelect = month => {
    this.setState({ month, view: "month", });
  };

  handleDayClick = (day, isSelectionStarted) => {
    const { range, onDayClick, } = this.props;

    if (range) {
      onDayClick(day, isSelectionStarted);
    } else {
      onDayClick(day);
    }
  };

  handleValueChange = (value, e) => {
    const { name, onChange, } = this.props;

    e.persist();
    e.target = { ...e.target, value, name, };

    this.setState({ selected: value, }, () => onChange(e));
  };

  changeView = () => {
    this.setState(({ view, }) => ({
      view: view === "month" ? "year" : "month",
    }));
  };

  render () {
    const {
      classes,
      className,
      locale: localeString,
      maxDate,
      minDate,
      range,
    } = this.props;
    const { month, year, view, } = this.state;

    const locale =
      typeof localeString === "string" ? locales[localeString] : localeString;

    const { localize, } = locale;
    const classNames = cn(classes.root, className);

    return (
      <div className={classNames} ref={el => (this.root = el)}>
        <Controls
          onPrev={this.handlePrev}
          onNext={this.handleNext}
          onClick={this.changeView}
          content={
            view === "month"
              ? `${capitalize(localize.month(month))} ${year}`
              : year
          }
        />

        <MonthView
          {...this.state}
          className={view !== "month" && classes.hidden}
          range={range}
          locale={locale}
          maxDate={maxDate}
          minDate={minDate}
          onClick={this.handleDayClick}
          onSelect={this.handleValueChange}
        />

        <YearView
          className={view !== "year" && classes.hidden}
          locale={locale}
          onSelect={this.handleMonthSelect}
        />
      </div>
    );
  }
}

export default enhance(Calendar);
