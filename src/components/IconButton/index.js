import React from "react";
import cn from "classnames";

// components
import Button from "components/Button";
import Icon from "components/Icon";

// enhancers
import { enhance } from "./enhance";

class IconButton extends React.Component {
  render() {
    const { className, classes, icon, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <Button
        {...rest}
        view="thin"
        className={classNames}
        icon={<Icon label={icon} className={classes.icon} />}
      />
    );
  }
}

export default enhance(IconButton);
