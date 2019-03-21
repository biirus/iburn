import React from "react";
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
    onChange: f => f,
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
     * The color of child `Button` component. It supports the theme meaningfull values
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
     * Array of `<Button />` components
     */
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    /**
     * The callback which will be called when `selected` prop is passed.
     */
    onChange: PropTypes.func,
  };

  constructor (props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleClick = value => e => {
    const { value: currentValue } = this.state;

    if (value !== currentValue) {
      this.setState({ value });

      e.persist();
      e.target.name = this.props.name;
      e.target.value = value;
      this.props.onChange(e);
    }
  };

  getInnerProps = child => {
    const { color, classes, selectable } = this.props;
    const { value: currentValue } = this.state;
    const { value } = child.props;

    let props = {
      className: classes.inner,
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
      view,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.justified]: justified,
    });

    return (
      <span {...rest} className={classNames}>
        {React.Children.map(children, (child, index) => {
          return (
            <span
              key={index}
              className={classes.item}
              onClick={this.handleClick(child.props.value)}
            >
              {React.cloneElement(child, this.getInnerProps(child))}
            </span>
          );
        })}
      </span>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(ButtonGroup);
