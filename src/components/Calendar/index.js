import React from "react";

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

class Calendar extends React.Component {
  static defaultProps = {
    locale: "enUS",
    maxDate: null,
    minDate: null,
    onChange: f => f,
    onDayClick: f => f,
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

    const locale = locales[localeString];
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
          locale={localeString}
          maxDate={maxDate}
          minDate={minDate}
          onClick={this.handleDayClick}
          onSelect={this.handleValueChange}
        />

        <YearView
          className={view !== "year" && classes.hidden}
          locale={localeString}
          onSelect={this.handleMonthSelect}
        />
      </div>
    );
  }
}

export default enhance(Calendar);
