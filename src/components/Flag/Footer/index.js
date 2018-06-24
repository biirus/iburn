import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// components
import Button from "components/Button";

// enhancers
import { enhance } from "./enhance";

class FlagFooter extends React.Component {
  handleClick = action => () => {
    action.onClick(this.props);
    this.context.handleClose();
  };

  render() {
    const {
      className,
      classes,
      children,
      theme,
      sheet,
      actions,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <div {...rest} className={classNames}>
        {actions.map((action, index) => (
          <Button
            key={index}
            view="link"
            inline={true}
            className={classes.action}
            onClick={this.handleClick(action)}
          >
            {action.title}
          </Button>
        ))}
      </div>
    );
  }
}

FlagFooter.contextTypes = {
  handleClose: PropTypes.func
};

export default enhance(FlagFooter);
