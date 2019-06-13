import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import cn from "classnames";

// components
import EventListener from "react-event-listener";

// enhancers
import { enhance } from "./enhance";

class Dialog extends React.Component {
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
     * Defines size of `Dialog` component
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * If set is `true` then `Dialog` is shown, otherwise it is hidden
     */
    isOpen: PropTypes.bool,
    /**
     * If set is `true` the `Dialog` doesn't close by `ESC` button and click at overlay
     */
    isModal: PropTypes.bool,
    /**
     * Callback fires when `Dialog` opens
     */
    onOpen: PropTypes.func,
    /**
     * Callback fires when `Dialog` closes
     */
    onClose: PropTypes.func,
  };

  static defaultProps = {
    size: "medium",
    isOpen: false,
    isModal: false,
  };

  state = {
    mounted: false,
  };

  componentDidMount () {
    const { isOpen, onOpen } = this.props;

    this.el = document.createElement("div");
    document.body.appendChild(this.el);

    this.setState({ mounted: true });

    if (isOpen) {
      onOpen && onOpen();
    }
  }

  componentWillUnmount () {
    this.setState({ mounted: false }, () => {
      document.body.removeChild(this.el);
    });
  }

  handleKeyDown = e => {
    const { isModal, isOpen, onClose } = this.props;

    if (!isModal && isOpen && e.code === "Escape") {
      onClose && onClose(e);
    }
  };

  handleOverlayClick = e => {
    const { isModal, isOpen, onClose } = this.props;

    if (!isModal && isOpen) {
      onClose && onClose(e);
    }
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

export default enhance(Dialog);
