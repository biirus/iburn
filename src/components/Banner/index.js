import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// assets
import Icon from "components/Icon";

// enhancers
import { enhance } from "./enhance";

class Banner extends React.Component {
  static defaultProps = {
    type: "warning",
    autoCloseTimeout: null,
    onClose: f => f,
  };

  static propTypes = {
    type: PropTypes.string,
    autoCloseTimeout: PropTypes.number,
    onClose: PropTypes.func,
  };

  componentDidUpdate (oldProps) {
    const { isOpen, autoCloseTimeout, onClose, } = this.props;

    if (!oldProps.isOpen && isOpen && autoCloseTimeout) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(onClose, autoCloseTimeout);
    }
  }

  componentWillUnmount () {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render () {
    const {
      type,
      isOpen,
      classes,
      children,
      className,
      autoCloseTimeout,
      onClose,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, classes[type], {
      [classes.open]: isOpen,
    });

    return (
      <div {...rest} className={classNames}>
        <Icon label={type} className={classes.icon} />
        <span className={classes.label}>{children}</span>
      </div>
    );
  }
}

export default enhance(Banner);
