import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class TableFoot extends React.Component {
  getChildContext () {
    return {
      table: {
        footer: true,
      },
    };
  }

  render () {
    const { className, classes, children, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <tfoot {...rest} className={classNames}>
        {children}
      </tfoot>
    );
  }
}

TableFoot.childContextTypes = {
  table: PropTypes.object,
};

export default enhance(TableFoot);
