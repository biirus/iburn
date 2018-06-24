import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class TableHead extends React.Component {
  getChildContext () {
    return {
      table: {
        header: true,
      },
    };
  }

  render () {
    const { className, classes, children, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <thead {...rest} className={classNames}>
        {children}
      </thead>
    );
  }
}

TableHead.childContextTypes = {
  table: PropTypes.object,
};

export default enhance(TableHead);
