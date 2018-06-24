import React from "react";
import cn from "classnames";

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

  constructor (props) {
    super(props);

    const { selectable, selected, } = props;
    const selectedIndex = selectable
      ? selected !== undefined ? selected : null
      : null;

    this.state = {
      selectedIndex,
    };
  }

  onClick = index => () => {
    if (this.props.selectable) {
      const { selectedIndex, } = this.state;

      if (selectedIndex !== index) {
        this.setState({ selectedIndex: index, });
        this.props.onChange(index);
      }
    }
  };

  getInnerProps = index => {
    const { view, classes, selectable, } = this.props;
    const { selectedIndex, } = this.state;

    let props = {
      className: classes.inner,
    };

    if (view) {
      props.view = view;
    }

    if (selectable) {
      props.selected = selectedIndex === index ? "true" : "";
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
              onClick={this.onClick(index)}
            >
              {React.cloneElement(child, this.getInnerProps(index))}
            </span>
          );
        })}
      </span>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(ButtonGroup);
