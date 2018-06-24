import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// components
import Checkbox from "components/Checkbox";

// styles
import styles from "./styles";

class DropdownCheckboxItem extends React.Component {
  static defaultProps = {
    onClick: f => f
  };

  render() {
    const {
      className,
      classes,
      children,
      theme,
      sheet,
      checkbox,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <Checkbox {...rest} className={classNames}>
        {children}
      </Checkbox>
    );
  }
}

DropdownCheckboxItem.contextTypes = {
  handleClose: PropTypes.func
};

const enhance = withStyles(styles);

export default enhance(DropdownCheckboxItem);
