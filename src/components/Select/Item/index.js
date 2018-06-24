import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class SelectItem extends React.Component {
  static defaultProps = {
    onClick: f => f
  };

  render() {
    const {
      className,
      classes,
      children,
      value,
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
        onClick={e => {
          e.stopPropagation();

          onClick(this.props);
          this.context.selectItem(e, value);
        }}
      >
        {children}
      </div>
    );
  }
}

SelectItem.contextTypes = {
  selectItem: PropTypes.func
};

export default enhance(SelectItem);
