import React from "react";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// asstes
import Icon from "components/Icon";

// styles
import styles from "./styles";

class TextField extends React.Component {
  static defaultProps = {
    block: false,
    size: null,
    onClick: f => f,
    onFocus: f => f,
    onBlur: f => f,
  };

  state = {
    isFocused: false,
  };

  focus = () => {
    this.input.focus();
  };

  onClick = e => {
    this.focus();
    this.props.onClick(e);
  };

  onFocus = e => {
    this.setState({ isFocused: true, });
    this.props.onFocus(e);
  };

  onBlur = e => {
    this.setState({ isFocused: false, });
    this.props.onBlur(e);
  };

  checkView = () => {
    return ["warning", "danger", "success", "info",].includes(this.props.view);
  };

  getViewIcon = () => {
    const icons = {
      danger: "error",
      warning: "warning",
      success: "check-circle",
      info: "editor/info",
    };

    return icons[this.props.view];
  };

  render () {
    const { isFocused, } = this.state;
    const {
      className,
      classes,
      block,
      disabled,
      view,
      icon,
      size,
      leftIcon,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, classes[view], {
      [classes.focus]: isFocused,
      [classes.disabled]: disabled,
      [classes.block]: block,
      [classes.compact]: size === "compact",
    });

    return (
      <div className={classNames} onClick={this.onClick}>
        {leftIcon && (
          <span className={cn(classes.icon, classes.leftIcon)}>{leftIcon}</span>
        )}

        <input
          {...rest}
          ref={el => (this.input = el)}
          disabled={disabled}
          className={classes.input}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />

        {!icon ? (
          this.checkView() && (
            <span className={cn(classes.icon, classes.rightIcon)}>
              <Icon label={this.getViewIcon()} />
            </span>
          )
        ) : (
          <span className={cn(classes.icon, classes.rightIcon)}>{icon}</span>
        )}
      </div>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(TextField);
