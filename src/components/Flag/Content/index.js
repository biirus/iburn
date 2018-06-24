import React from "react";
import cn from "classnames";

import { enhance } from "./enhance";

class FlagContent extends React.Component {
  render () {
    const { className, classes, children, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <div {...rest} className={classNames}>
        {children}
      </div>
    );
  }
}

export default enhance(FlagContent);
