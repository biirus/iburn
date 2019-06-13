import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

class DialogHeader extends React.Component {
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
     * Node to be shown at right-hand side of the component
     */
    actions: PropTypes.node,
  };

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
        <Typography className={classes.children} type="h600">
          {children}
        </Typography>
        <div className={classes.actions}>{actions}</div>
      </div>
    );
  }
}

export default enhance(DialogHeader);
