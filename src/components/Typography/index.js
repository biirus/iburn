import React from "react";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// styles
import styles from "./styles";

class Typography extends React.Component {
  static defaultProps = {
    type: null,
    component: null,
    componentsMap: {
      h800: "h1",
      h700: "h1",
      h600: "h2",
      h500: "h3",
      h400: "h4",
      h300: "h5",
      h200: "div",
      h100: "div",
      lead: "div",
      body: "div",
      label: "div",
      paragraph: "p",
    },
  };

  render () {
    const {
      componentsMap,
      component,
      className,
      children,
      classes,
      type,
      theme,
      sheet,
      ...rest
    } = this.props;

    const Component = component || componentsMap[type] || "div";
    const classNames = cn(classes.root, classes[type], className);

    return (
      <Component {...rest} className={classNames}>
        {children}
      </Component>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(Typography);
