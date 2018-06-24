import React from "react";
import cn from "classnames";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

class NavItem extends React.Component {
  static defaultProps = {
    component: "a"
  };

  render() {
    const {
      className,
      classes,
      children,
      icon,
      secondary,
      isActive,
      component: Component,
      theme,
      sheet,
      ...rest
    } = this.props;    

    if (Component.name && Component.name === "NavLink") {
      rest.activeClassName = classes.active;
    }

    const classNames = cn(classes.root, className, {
      [classes.active]: isActive
    });

    return (
      <Component {...rest} className={classNames}>
        {icon && <span className={classes.icon}>{icon}</span>}
        <div className={classes.title}>
          <div>{children}</div>
          {secondary && <Typography type="h200">{secondary}</Typography>}
        </div>
      </Component>
    );
  }
}

export default enhance(NavItem);
