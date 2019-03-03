import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import Icon from "components/Icon";

// enhancers
import { enhance } from "./enhance";

class TableCell extends React.Component {
  static defaultProps = {
    align: "left",
  };

  getIcon = visible => {
    const { sortDirection, classes } = this.props;

    return (
      <Icon
        className={visible ? classes.visible : classes.hidden}
        label={sortDirection === "asc" ? "chevron-up" : "chevron-down"}
      />
    );
  };

  render () {
    const { table } = this.context;
    const {
      className,
      classes,
      numeric,
      sortable,
      sortDirection,
      align,
      children,
      theme,
      sheet,
      ...rest
    } = this.props;

    const Component = table.header ? "th" : "td";

    const classNames = cn(classes.root, className, {
      [classes.head]: table.header,
      [classes.sortable]: sortable,
      [classes.numeric]: numeric,
      [classes.alignLeft]: align === "left",
      [classes.alignRight]: align === "right",
      [classes.alignCenter]: align === "center",
    });

    return (
      <Component {...rest} className={classNames}>
        <div className={classes.inner}>
          {table.header && sortable && numeric && this.getIcon(sortDirection)}
          {children}
          {table.header && sortable && !numeric && this.getIcon(sortDirection)}
        </div>
      </Component>
    );
  }
}

TableCell.contextTypes = {
  table: PropTypes.object.isRequired,
};

export default enhance(TableCell);
