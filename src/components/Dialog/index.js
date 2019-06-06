import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import cn from "classnames";

// components
import EventListener from "react-event-listener";

// enhancers
import { enhance } from "./enhance";

class Dialog extends React.Component {
  static defaultProps = {
    size: "medium",
    isOpen: false,
    isModal: false,
    onOpen: f => f,
    onClose: f => f,
  };

  state = {
    mounted: false,
  };

  getChildContext () {
    return { handleClose: this.handleClose };
  }

  componentDidMount () {
    this.el = document.createElement("div");
    document.body.appendChild(this.el);

    this.setState({ mounted: true });

    if (this.props.isOpen) {
      this.handleOpen();
    }
  }

  componentWillUnmount () {
    this.setState({ mounted: false }, () => {
      document.body.removeChild(this.el);
    });
  }

  componentDidUpdate (oldProps) {
    const { isOpen } = this.props;

    if (!oldProps.isOpen && isOpen) {
      this.handleOpen();
    }
  }

  handleKeyDown = e => {
    const { isModal, isOpen } = this.props;

    if (!isModal && isOpen && e.code === "Escape") {
      this.handleClose(e);
    }
  };

  handleOverlayClick = e => {
    const { isModal, isOpen } = this.props;

    if (!isModal && isOpen) {
      this.handleClose(e);
    }
  };

  handleOpen = e => {
    document.body.classList.add("fixed");
    this.props.onOpen(e);
  };

  handleClose = e => {
    document.body.classList.remove("fixed");
    this.props.onClose(e);
  };

  renderContent () {
    const {
      className,
      classes,
      children,
      size,
      isOpen,
      isModal,
      onOpen,
      onClose,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.open]: isOpen,
    });

    return (
      <div {...rest} className={classNames}>
        <EventListener target="window" onKeyDown={this.handleKeyDown} />
        <div
          className={cn(classes.overlay, { [classes.open]: isOpen })}
          onClick={this.handleOverlayClick}
        />
        <div
          className={cn(classes.inner, classes[size], {
            [classes.open]: isOpen,
          })}
        >
          {children}
        </div>
      </div>
    );
  }

  render () {
    const { mounted } = this.state;
    return mounted ? createPortal(this.renderContent(), this.el) : null;
  }
}

Dialog.childContextTypes = {
  handleClose: PropTypes.func,
};

export default enhance(Dialog);
