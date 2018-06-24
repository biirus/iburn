import React from "react";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// assets
import Icon from "components/Icon";

// styles
import styles from "./styles";

class Radio extends React.Component {
  render() {
    const { className, classes, children, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <label className={classNames}>
        <input {...rest} className={classes.real} type="radio" />

        <span className={classes.wrapper}>
          <Icon label="radio" className={classes.check} />

          <span className={classes.label}>{children}</span>
        </span>
      </label>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(Radio);
