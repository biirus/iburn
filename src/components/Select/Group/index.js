import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

class SelectGroup extends React.Component {
  static defaultProps = {
    label: "",
  };

  render () {
    const {
      className,
      classes,
      children,
      label,
      onSearch,
      theme,
      sheet,
      ...rest
    } = this.props;

    const { search, } = this.context;

    const visibleChildren = onSearch
      ? React.Children.toArray(children).filter(child =>
          onSearch(search, child.props, this.props)
        )
      : children;

    const classNames = cn(classes.root, className, {
      [classes.hidden]: visibleChildren.length === 0,
    });

    return (
      <div {...rest} className={classNames}>
        <Typography type="h100" className={classes.label}>
          {label}
        </Typography>

        {visibleChildren}
      </div>
    );
  }
}

SelectGroup.contextTypes = {
  search: PropTypes.string,
};

export default enhance(SelectGroup);
