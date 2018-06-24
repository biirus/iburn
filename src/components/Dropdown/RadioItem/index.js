import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// components
import Radio from "components/Radio";

// styles
import styles from "./styles";

class DropdownRadioItem extends React.Component {
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
      <Radio {...rest} className={classNames}>
        {children}
      </Radio>
    );
  }
}

DropdownRadioItem.contextTypes = {
  handleClose: PropTypes.func
};

const enhance = withStyles(styles);

export default enhance(DropdownRadioItem);
