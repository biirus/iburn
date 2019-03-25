import React from "react";
import cn from "classnames";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

class Nav extends React.Component {
  render () {
    const {
      className,
      classes,
      header,
      isSticky,
      children,
      theme,
      sheet,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, className);
    const headerClassName = cn({
      [classes.sticky]: isSticky,
    });

    return (
      <div {...rest} className={classNames}>
        {header && (
          <Typography type="h100" className={headerClassName}>
            {header}
          </Typography>
        )}
        {children}
      </div>
    );
  }
}

export default enhance(Nav);
