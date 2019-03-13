import React from "react";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class Tabs extends React.Component {
  state = {
    selected: 0,
  };

  componentDidMount () {
    const tabs = this.getTabs(this.props.children);
    const initiallySelected = tabs.findIndex(tab => !!tab.selected);

    initiallySelected >= 0 && this.setState({ selected: initiallySelected });
  }

  getTabs = children => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.map(child => child.props);
  };

  handleTabLabelClick = (index, onClick) => e => {
    const { onChange } = this.props;
    const oldIndex = this.state.selected;

    this.setState({ selected: index }, () => {
      onClick && onClick(index);

      if (index !== oldIndex) {
        onChange && onChange(index);
      }
    });
  };

  renderTabsHeader = tabs => {
    const { classes } = this.props;
    const { selected } = this.state;

    return (
      <div className={classes.tabsHeader}>
        {tabs.map(({ label, disabled, children, onClick, ...rest }, index) => (
          <div
            {...rest}
            key={index}
            className={cn(classes.tabLabel, {
              [classes.disabled]: !!disabled,
              [classes.selected]: index === selected,
            })}
            onClick={this.handleTabLabelClick(index, onClick)}
          >
            {label}
          </div>
        ))}
      </div>
    );
  };

  renderTabsContent = tabs => {
    const { classes } = this.props;
    const { selected } = this.state;

    return tabs.map(({ label, className, children, ...rest }, index) => (
      <div
        {...rest}
        key={index}
        className={cn(classes.tabsContent, className, {
          [classes.visible]: index === selected,
        })}
      >
        {children}
      </div>
    ));
  };

  render () {
    const {
      className,
      classes,
      children,
      onChange,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className);
    const tabs = this.getTabs(children);

    return (
      <div {...rest} className={classNames}>
        {this.renderTabsHeader(tabs)}
        {this.renderTabsContent(tabs)}
      </div>
    );
  }
}

export default enhance(Tabs);
