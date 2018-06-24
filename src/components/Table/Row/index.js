import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class TableRow extends React.Component {
  render() {
    const { table } = this.context;
    const { className, classes, children, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className, {
      [classes.hoverable]: !!table.hoverable
    });

    return (
      <tr {...rest} className={classNames}>
        {children}
      </tr>
    );
  }
}

TableRow.contextTypes = {
  table: PropTypes.object.isRequired
};

export default enhance(TableRow);
