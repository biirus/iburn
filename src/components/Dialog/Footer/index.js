import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// enhancers
import { enhance } from "./enhance";

class DialogFooter extends React.Component {
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
        <div className={classes.children}>{children}</div>
        <div className={classes.actions}>{actions}</div>
      </div>
    );
  }
}

export default enhance(DialogFooter);
