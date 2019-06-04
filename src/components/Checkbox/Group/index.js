import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// styles
import styles from "./styles";

class CheckboxGroup extends Component {
  static propTypes = {
    /**
     * Class name string to be merged to the root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/) classes object notation
     */
    classes: PropTypes.object,
    /**
     * Array of `Checkbox` components to be shown as group
     */
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  };

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
