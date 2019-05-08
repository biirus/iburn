import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import Button from "components/Button";

// enhancers
import { enhance } from "./enhance";

/**
 * A `Button` to display a day element into a `Calendar`
 */
class Day extends React.Component {
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
     * The value of a day element. Must an instance of `Date` object.
     */
    value: PropTypes.instanceOf(Date).isRequired,
    /**
     * Shows when a day element is disabled
     */
    disabled: PropTypes.bool,
    /**
     * Shows when a day element is selected
     */
    selected: PropTypes.bool,
    /**
     * Shows when a day element is hightlighted
     */
    highlighted: PropTypes.bool,
    /**
     * Callback funciton fired when day element is clicked
     */
    onClick: PropTypes.func.isRequired,
    /**
     * Callback funciton fired when day element is mouse overed
     */
    onMouseOver: PropTypes.func.isRequired,
  };

  handleClick = e => {
    const { value, onClick } = this.props;
    onClick(value, e);
  };

  handleMouseOver = e => {
    const { value, onMouseOver } = this.props;
    onMouseOver(value, e);
  };

  render () {
    const { classes, value, disabled, selected, highlighted } = this.props;

    let buttonProps = {
      disabled,
      color: selected ? "primary" : "default",
      className: cn(classes.day, {
        [classes.selected]: selected,
        [classes.highlighted]: highlighted,
      }),
    };

    if (!selected) {
      buttonProps.variant = "thin";
    }

    return (
      <div className={classes.dayWrapper}>
        <Button
          {...buttonProps}
          padding="block"
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
        >
          {value.getDate()}
        </Button>
      </div>
    );
  }
}

export default enhance(Day);
