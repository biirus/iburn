import React from "react";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// styles
import styles from "./styles";

class CheckboxGroup extends React.Component {
  render () {
    const { className, classes, children, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <div {...rest} className={classNames}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className={classes.item}>
            {child}
          </div>
        ))}
      </div>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(CheckboxGroup);
