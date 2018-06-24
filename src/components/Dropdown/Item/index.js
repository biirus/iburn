import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// styles
import styles from "./styles";

class DropdownItem extends React.Component {
  static defaultProps = {
    onClick: f => f,
  };

  render () {
    const {
      className,
      classes,
      children,
      onClick,
      theme,
      sheet,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <div
        {...rest}
        className={classNames}
        onClick={() => {
          onClick(this.props);
          this.context.handleClose();
        }}
      >
        {children}
      </div>
    );
  }
}

DropdownItem.contextTypes = {
  handleClose: PropTypes.func,
};

const enhance = withStyles(styles);

export default enhance(DropdownItem);
