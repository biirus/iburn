import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// components
import Button from "components/Button";
import Popover from "components/Popover";

// assets
import Icon from "components/Icon";

// styles
import styles from "./styles";

class Dropdown extends React.Component {
  static defaultProps = {
    position: "",
    onClick: f => f,
  };

  state = {
    isOpen: false,
    trigger: null,
  };

  getChildContext () {
    return { handleClose: this.handleClose, };
  }

  handleClick = e => {
    e.preventDefault();

    this.setState({ isOpen: !this.state.isOpen, trigger: e.target, });
    this.props.onClick(e);
  };

  handleClose = () => {
    this.setState({ isOpen: false, });
  };

  render () {
    const {
      className,
      classes,
      label,
      position,
      children,
      theme,
      sheet,
      onClick,
      ...rest
    } = this.props;

    const { isOpen, trigger, } = this.state;
    const classNames = cn(classes.root, className);

    return (
      <span className={classNames}>
        <Button
          iconAfter={<Icon label="chevron-down" />}
          {...rest}
          selected={isOpen}
          onClick={this.handleClick}
        >
          {label}
        </Button>

        <Popover
          trigger={trigger}
          isOpen={isOpen}
          position={position}
          onClose={this.handleClose}
        >
          <div className={classes.popoverContent}>{children}</div>
        </Popover>
      </span>
    );
  }
}

Dropdown.childContextTypes = {
  handleClose: PropTypes.func,
};

const enhance = withStyles(styles);

export default enhance(Dropdown);
