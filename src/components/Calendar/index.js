import React from "react";
import PropTypes from "prop-types";

// lib
import cn from "classnames";
import { getMonth, getYear } from "date-fns";
import * as locales from "date-fns/locale";
import { capitalize } from "./lib";

// components
import Controls from "./Controls";
import MonthView from "./MonthView";
import YearView from "./YearView";

// enhancers
import { enhance } from "./enhance";

/**
 * Clean and simple to use Calendar Component that supports i18n based on [date-fns locales](https://date-fns.org/docs/I18n)
 */
class Calendar extends React.Component {
  static defaultProps = {
    locale: "enUS",
  };

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
     * [JavaScript Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or `null`. **Important**: this prop is required when `onChange` prop is passed.
     */
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
     * Change handler function. **Important**: this prop is requred when `value` prop is passed.
     */
    onChange: function (props, propName, componentName) {
      if (
        props.value !== undefined &&
        (props[propName] === undefined || typeof props[propName] !== "function")
      ) {
        return new Error(
          "The `onChange` prop is required when `value` prop is set. Please provide `onChange` function."
        );
      }
    },
  };

  constructor (props) {
    super(props);

    const today = new Date();
    let value = props.value || today;

    // is not array was passed
    if (props.range && !Array.isArray(value)) {
      value = [value, value];
    }

    // empty array was passed
    if (props.range && value.length === 0) {
      value = [today, today];
    }

    this.state = {
      year: getYear(props.range ? value[0] : value),
      month: getMonth(props.range ? value[0] : value),
      view: "month",
    };
  }

  prevMonth = () => {
    this.setState(({ month, year }) => {
      const prevMonth = month - 1;
      const prevYear = prevMonth < 0 ? year - 1 : year;

      return {
        month: (prevMonth + 12) % 12,
        year: prevYear,
      };
    });
  };

  nextMonth = () => {
    this.setState(({ month, year }) => {
      const nextMonth = month + 1;
      const nextYear = nextMonth >= 12 ? year + 1 : year;

      return {
        month: nextMonth % 12,
        year: nextYear,
      };
    });
  };

  prevYear = () => {
    this.setState(({ year }) => ({
      year: year - 1,
    }));
  };

  nextYear = () => {
    this.setState(({ year }) => ({
      year: year + 1,
    }));
  };

  handlePrev = () => {
    const { view } = this.state;
    return view === "year" ? this.prevYear() : this.prevMonth();
  };

  handleNext = () => {
    const { view } = this.state;
    return view === "year" ? this.nextYear() : this.nextMonth();
  };

  handleMonthSelect = month => {
    this.setState({ month, view: "month" });
  };

  handleDayClick = (day, isSelectionStarted) => {
    const { range, onDayClick } = this.props;

    if (onDayClick) {
      range ? onDayClick(day, isSelectionStarted) : onDayClick(day);
    }
  };

  handleValueChange = (value, e) => {
    const { name, onChange } = this.props;

    e.persist();
    e.target = this.root;
    e.target.name = name;
    e.target.value = value;

    onChange && onChange(e);
  };

  changeView = () => {
    this.setState(({ view }) => ({
      view: view === "month" ? "year" : "month",
    }));
  };

  render () {
    const {
      classes,
      className,
      value,
      max,
      min,
      range,
      locale: localeString,
    } = this.props;
    const { month, year, view } = this.state;

    const locale =
      typeof localeString === "string" ? locales[localeString] : localeString;

    const { localize } = locale;
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
          value={value}
          className={cn({ [classes.hidden]: view !== "month" })}
          range={range}
          locale={locale}
          max={max}
          min={min}
          onClick={this.handleDayClick}
          onSelect={this.handleValueChange}
        />

        <YearView
          className={cn({ [classes.hidden]: view !== "year" })}
          locale={locale}
          onSelect={this.handleMonthSelect}
        />
      </div>
    );
  }
}

export default enhance(Calendar);
