import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// components
import Typography from "components/Typography";
import Icon from "components/Icon";

// enhancers
import { enhance } from "./enhance";

class FlagTitle extends React.Component {
  checkView = () => {
    return ["warning", "danger", "success", "help"].includes(this.props.view);
  };

  getViewIcon = () => {
    const icons = {
      danger: "error",
      warning: "warning",
      success: "check-circle",
      help: "question-circle"
    };

    return icons[this.props.view];
  };

  render() {
    const {
      className,
      classes,
      children,
      theme,
      sheet,
      view,
      icon,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, classes[view], className);

    return (
      <Typography type="h400" component="div" {...rest} className={classNames}>
        <span className={classes.icon}>
          {!icon
            ? this.checkView() && <Icon label={this.getViewIcon()} />
            : icon}
        </span>

        <span className={classes.title}>{children}</span>

        <Icon
          label="cross"
          className={classes.close}
          onClick={this.context.handleClose}
        />
      </Typography>
    );
  }
}

FlagTitle.contextTypes = {
  handleClose: PropTypes.func
};

export default enhance(FlagTitle);
