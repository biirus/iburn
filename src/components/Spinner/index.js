import React from "react";
import cn from "classnames";

import { enhance } from "./enhance";

class Spinner extends React.Component {
  static defaultProps = {
    size: "medium",
    invert: false,
  };

  render () {
    const { className, size, invert, classes, } = this.props;

    const classNames = cn(classes.root, classes[size], className, {
      [classes.invert]: invert,
    });

    return (
      <div className={classNames}>
        <div className={cn(classes.item, classes.outer)} />
        <div className={cn(classes.item, classes.inner)} />
      </div>
    );
  }
}

export default enhance(Spinner);
