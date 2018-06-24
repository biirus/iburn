import React from "react";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class Table extends React.Component {
  render () {
    const { className, classes, children, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <table {...rest} className={classNames}>
        {children}
      </table>
    );
  }
}

export default enhance(Table);
