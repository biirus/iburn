import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// enhancers
import withStyles from "react-jss";

// styles
import styles from "./styles";

/**
 * The component to render an array of `<Avatar />` in a row
 */
class AvatarStack extends React.Component {
  static propTypes = {
    /**
     * Class name string to be merged to root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/?v=v8.5.1) classes object notation
     */
    classes: PropTypes.object.isRequired,
    /**
     * Array of `<Avatar />` components to be shown as stack
     */
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
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

export default enhance(AvatarStack);
