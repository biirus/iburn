import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class TableBody extends React.Component {
  getChildContext () {
    return {
      table: {
        hoverable: this.props.hoverable,
        body: true,
      },
    };
  }

  render () {
    const {
      className,
      classes,
      hoverable,
      children,
      theme,
      sheet,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <tbody {...rest} className={classNames}>
        {children}
      </tbody>
    );
  }
}

TableBody.childContextTypes = {
  table: PropTypes.object,
};

export default enhance(TableBody);
