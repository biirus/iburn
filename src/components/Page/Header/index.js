import React from "react";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// components
import Typography from "components/Typography";

// styles
import styles from "./styles";

class PageHeader extends React.Component {
  render () {
    const {
      className,
      classes,
      children,
      breadcrumbs,
      actions,
      sheet,
      theme,
      ...rest
    } = this.props;

    return (
      <div
        {...rest}
        className={cn(classes.root, className, {
          [classes.justified]: !breadcrumbs,
        })}
      >
        {breadcrumbs}
        <div className={classes.wrapper}>
          <Typography type="h700" className={classes.label}>
            {children}
          </Typography>
          <div className={classes.actions}>{actions}</div>
        </div>
      </div>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(PageHeader);
