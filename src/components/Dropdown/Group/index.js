import React from "react";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// components
import Typography from "components/Typography";

// styles
import styles from "./styles";

class DropdownGroup extends React.Component {
  static defaultProps = {
    title: ""
  };

  render() {
    const {
      className,
      classes,
      children,
      title,
      theme,
      sheet,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <div {...rest} className={classNames}>
        <Typography type="h100" className={classes.title}>
          {title}
        </Typography>
        {children}
      </div>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(DropdownGroup);
