import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import TextField from "components/TextField";
import Popover from "components/Popover";
import Icon from "components/Icon";

// enhancers
import { enhance } from "./enhance";

class Select extends React.Component {
  static defaultProps = {
    placeholder: "",
    size: null,
    onChange: f => f,
    renderValue: f => f,
  };

  state = {
    search: "",
    trigger: null,
    isPopoverOpen: false,
    popoverWidth: null,
  };

  getChildContext () {
    return { selectItem: this.selectItem, search: this.state.search, };
  }

  openPopover = e => {
    this.setState({
      trigger: e.currentTarget,
      isPopoverOpen: true,
    });

    // FIXME: jums up to the page start
    setTimeout(() => {
      if (this.props.searchable) {
        this.input.focus();
      }
    }, 0);
  };

  closePopover = () => {
    this.setState(
      {
        trigger: null,
        isPopoverOpen: false,
      },
      () => {
        // to prevent popover content jumping
        setTimeout(() => {
          this.setState({
            search: "",
          });
        }, 300);
      }
    );
  };

  togglePopover = e => {
    if (!this.state.isPopoverOpen) {
      this.openPopover(e);
    } else {
      this.closePopover();
    }
  };

  clearSearchField = e => {
    this.setState({ search: "", });
    this.input.focus();
  };

  changeSearchField = e => {
    this.setState({ search: e.target.value, });
  };

  selectItem = (e, value) => {
    const { name, } = this.props;

    e.persist();
    e.target = { ...e.target, value, name, };

    this.props.onChange(e, value);
    this.closePopover();
  };

  setWidth = () => {
    // wait for native events
    setTimeout(() => {
      this.setState({
        popoverWidth: this.root.offsetWidth,
      });
    }, 0);
  };

  render () {
    const { trigger, isPopoverOpen, search, popoverWidth, } = this.state;

    const {
      className,
      classes,
      searchable,
      disabled,
      block,
      size,
      icon,
      leftIcon,
      children,
      placeholder,
      renderValue,
      onChange,
      value,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.disabled]: disabled,
      [classes.block]: block,
      [classes.compact]: size === "compact",
    });

    const itemsClassNames = cn(classes.items, className);

    const renderIcons = search => {
      return !!search ? (
        <Icon
          label="cross-circle"
          className={classes.inputIcon}
          onClick={this.clearSearchField}
        />
      ) : (
        <Icon label="search" className={classes.inputIcon} />
      );
    };

    return (
      <React.Fragment>
        <div
          {...rest}
          className={classNames}
          onClick={this.togglePopover}
          ref={el => (this.root = el)}
        >
          {leftIcon && (
            <span className={cn(classes.icon, classes.leftIcon)}>
              {leftIcon}
            </span>
          )}

          <div className={classes.result}>
            {!value &&
              placeholder && (
                <span className={classes.placeholder}>{placeholder}</span>
              )}

            {(value || !placeholder) && renderValue(value)}
          </div>

          {!icon ? (
            <span className={cn(classes.icon, classes.rightIcon)}>
              <Icon label="chevron-down" />
            </span>
          ) : (
            <span className={cn(classes.icon, classes.rightIcon)}>{icon}</span>
          )}
        </div>

        <Popover
          trigger={trigger}
          isOpen={isPopoverOpen}
          width={popoverWidth}
          onOpen={this.setWidth}
          onClose={this.closePopover}
        >
          <div className={classes.popover}>
            {searchable && (
              <div className={classes.search}>
                <TextField
                  block
                  innerRef={el => (this.input = el)}
                  icon={renderIcons(search)}
                  value={search}
                  onChange={this.changeSearchField}
                />
              </div>
            )}

            <div className={itemsClassNames}>{children}</div>
          </div>
        </Popover>
      </React.Fragment>
    );
  }
}

Select.childContextTypes = {
  selectItem: PropTypes.func,
  search: PropTypes.string,
};

export default enhance(Select);
