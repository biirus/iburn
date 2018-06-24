import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import EventListener from "react-event-listener";

// ehnacer
import { enhance } from "./enhance";

class Flag extends React.Component {
  static defaultProps = {
    position: "bottom left",
    isOpen: false,
    onOpen: f => f,
    onClose: f => f,
  };

  constructor (props) {
    super(props);
    this.el = document.createElement("div");
  }

  getChildContext () {
    return { handleClose: this.handleClose, };
  }

  componentDidMount () {
    document.body.appendChild(this.el);
    const { isOpen, onOpen, } = this.props;

    if (isOpen) {
      onOpen();
    }
  }

  componentWillUnmount () {
    document.body.removeChild(this.el);
  }

  componentDidUpdate (oldProps) {
    const { isOpen, onOpen, } = this.props;

    if (!oldProps.isOpen && isOpen) {
      onOpen();
    }
  }

  handleKeyDown = e => {
    const { isOpen, } = this.props;

    if (isOpen && e.code === "Escape") {
      this.handleClose(e);
    }
  };

  handleClose = e => {
    this.props.onClose(e);
  };

  renderContent () {
    const {
      className,
      classes,
      trigger,
      position,
      children,
      isOpen,
      onOpen,
      onClose,
      theme,
      sheet,
      ...rest
    } = this.props;

    const direction = {
      [classes.fromLeft]: position.includes("left"),
      [classes.fromRight]: position.includes("right"),
    };

    const classNames = cn(classes.root, className, direction, {
      [classes.open]: isOpen,
    });

    const innerClassName = cn(classes.inner, direction);

    const left = position.includes("left") ? 0 : "auto";
    const right = position.includes("right") ? 0 : "auto";
    const top = position.includes("top") ? 0 : "auto";
    const bottom = position.includes("bottom") ? 0 : "auto";

    const style = !isOpen
      ? {
          top,
          bottom,
        }
      : {
          left,
          right,
          top,
          bottom,
        };

    return (
      <div {...rest} className={classNames} style={style}>
        <EventListener target="window" onKeyDown={this.handleKeyDown} />
        <div className={innerClassName}>{children}</div>
      </div>
    );
  }

  render () {
    return createPortal(this.renderContent(), this.el);
  }
}

Flag.childContextTypes = {
  handleClose: PropTypes.func,
};

export default enhance(Flag);
