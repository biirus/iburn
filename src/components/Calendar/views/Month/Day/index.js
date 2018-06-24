import React from "react";
import cn from "classnames";

// components
import TableCell from "components/Table/Cell";
import Button from "components/Button";

// enhancers
import { enhance } from "./enhance";

class Day extends React.Component {
  render () {
    const {
      classes,
      value,
      disabled,
      selected,
      highlighted,
      onClick,
      onHover,
    } = this.props;

    return (
      <TableCell className={classes.root}>
        <Button
          view="thin"
          className={cn(classes.tile, {
            [classes.highlighted]: highlighted,
            [classes.selected]: selected,
          })}
          classes={{ content: classes.content, }}
          disabled={disabled}
          onClick={e => onClick(value, e)}
          onMouseOver={e => onHover(value, e)}
        >
          {value.getDate()}
        </Button>
      </TableCell>
    );
  }
}

export default enhance(Day);
