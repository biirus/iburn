import React from "react";
import cn from "classnames";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

class NavItem extends React.Component {
  static defaultProps = {
    component: "a",
  };

  render () {
    const {
      className,
      classes,
      children,
      icon,
      badge,
      secondary,
      active,
      disabled,
      component: Component,
      theme,
      sheet,
      ...rest
    } = this.props;

    if (Component.name && Component.name === "NavLink") {
      rest.activeClassName = classes.active;
    }

    const classNames = cn(classes.root, className, {
      [classes.active]: active,
      [classes.disabled]: disabled,
    });

    return (
      <Component {...rest} className={classNames}>
        <div className={classes.inner}>
          {icon && <span className={classes.icon}>{icon}</span>}
          <div className={classes.label}>
            <div>{children}</div>
            {secondary && <Typography type="h200">{secondary}</Typography>}
          </div>
        </div>

        {badge}
      </Component>
    );
  }
}

export default enhance(NavItem);
