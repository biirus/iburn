import React from "react";
import cn from "classnames";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

class DialogTitle extends React.Component {
  render () {
    const {
      className,
      classes,
      children,
      actions,
      theme,
      sheet,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <div {...rest} className={classNames}>
        <Typography className={classes.label} type="h600">
          {children}
        </Typography>
        <div className={classes.actions}>{actions}</div>
      </div>
    );
  }
}

export default enhance(DialogTitle);
