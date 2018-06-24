import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// enhancers
import withStyles from "react-jss";

// styles
import styles from "./styles";

class AvatarsStack extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
  };

  render () {
    const { className, classes, children, sheet, theme, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <div {...rest} className={classNames}>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              key={index}
              className={classes.item}
              style={{ zIndex: children.length - index, }}
            >
              {React.cloneElement(child, { className: classes.inner, })}
            </div>
          );
        })}
      </div>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(AvatarsStack);
