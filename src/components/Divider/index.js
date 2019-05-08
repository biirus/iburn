import React from "react";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class Divider extends React.Component {
  static defaultProps = {
    compact: false,
  };

  render () {
    const { classes, className, compact } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.compact]: compact,
    });

    const rowClassNames = cn(classes.row);

    return (
      <div className={classNames}>
        <div className={rowClassNames} />
      </div>
    );
  }
}

export default enhance(Divider);
