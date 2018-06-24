import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// components
import Button from "components/Button";

// enhancers
import { enhance } from "./enhance";

class DialogFooter extends React.Component {
  static defaultProps = {
    actions: []
  };

  handleClick = action => () => {
    action.onClick(this.props);
    this.context.handleClose();
  };

  render() {
    const {
      className,
      classes,
      children,
      actions,
      theme,
      sheet,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <div {...rest} className={classNames}>
        <div>{children}</div>
        <div>
          {actions.map((action, index) => (
            <Button
              key={index}
              view={action.view}
              className={classes.action}
              onClick={this.handleClick(action)}
            >
              {action.title}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}

DialogFooter.contextTypes = {
  handleClose: PropTypes.func
};

export default enhance(DialogFooter);
