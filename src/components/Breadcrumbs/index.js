import React from "react";
import cn from "classnames";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

class Breadcrumbs extends React.Component {
  render() {
    const { className, classes, path, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <Typography {...rest} className={classNames} type="h200">
        {path.map(item => (
          <span key={item.href} className={classes.item}>
            <a href={item.href} className={classes.link}>
              {item.title}
            </a>
          </span>
        ))}
      </Typography>
    );
  }
}

export default enhance(Breadcrumbs);
