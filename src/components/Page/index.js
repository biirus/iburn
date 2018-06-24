import React from "react";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// styles
import styles from "./styles";

class Page extends React.Component {
  static defaultProps = {
    dense: false
  };

  render() {
    const {
      className,
      classes,
      dense,
      theme,
      sheet,
      children,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.dense]: dense
    });

    return (
      <div {...rest} className={classNames}>
        {children}
      </div>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(Page);
