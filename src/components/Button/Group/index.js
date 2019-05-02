import React, { Children, cloneElement } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// enhancers
import withStyles from "react-jss";

// styles
import styles from "./styles";

class ButtonGroup extends React.Component {
  static defaultProps = {
    selectable: false,
    justified: false,
  };

  static propTypes = {
    /**
     * Class name string to be merged to the root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/?v=v8.5.1) classes object notation
     */
    classes: PropTypes.object,
    /**
     * If it is set to `true`, you will be able to select one of the button.
     * If selected button is changed then `onChange` callback will be called.
     * To define preselected button, you can use the `value` component prop.
     */
    selectable: PropTypes.bool,
    /**
     * It stretches the component to the full width, and all children will be a same size.
     */
    justified: PropTypes.bool,
    /**
     * The color of child `Button` element. It supports the theme meaningfull values
     */
    color: PropTypes.oneOf([
      "default",
      "primary",
      "warning",
      "error",
      "success",
      "info",
    ]),
    /**
     * Array of `<Button />` elements
     */
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    /**
     * The callback which will be called when `selectable` prop is passed.
     */
    onChange: PropTypes.func,
  };

  handleClick = value => e => {
    const { value: currentValue, onChange } = this.props;

    if (value !== currentValue) {
      this.setState({ value });

      e.persist();

      e.target = this.root;
      e.target.name = this.props.name;
      e.target.value = value;

      onChange && onChange(e);
    }
  };

  getItemProps = child => {
    const { value: currentValue, color, classes, selectable } = this.props;
    const { value } = child.props;

    let props = {
      className: classes.item,
      onClick: this.handleClick(child.props.value),
    };

    if (color) {
      props.color = color;
    }

    if (selectable && currentValue !== undefined) {
      props.selected = value === currentValue;
    }

    return props;
  };

  render () {
    const {
      className,
      justified,
      selectable,
      selected,
      classes,
      children,
      theme,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.justified]: justified,
    });

    return (
      <span {...rest} className={classNames} ref={el => (this.root = el)}>
        {Children.map(children, (child, index) => {
          return (
            <span key={index} className={classes.itemWrapper}>
              {cloneElement(child, this.getItemProps(child))}
            </span>
          );
        })}
      </span>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(ButtonGroup);
