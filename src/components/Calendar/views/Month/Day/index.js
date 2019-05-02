import React from "react";
import cn from "classnames";

// components
import TableCell from "components/Table/Cell";
import Button from "components/Button";

// enhancers
import { enhance } from "./enhance";

class Day extends React.Component {
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
