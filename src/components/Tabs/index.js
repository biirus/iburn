import React from "react";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class Tabs extends React.Component {
  static defaultProps = {
    onChange: f => f
  };

  state = {
    selected: 0
  };

  componentDidMount() {
    const tabs = this.getTabs(this.props.children);
    const initiallySelected = tabs.findIndex(tab => !!tab.selected);

    initiallySelected >= 0 && this.setState({ selected: initiallySelected });
  }

  getTabs = children => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.map(child => child.props);
  };

  handleTabTitleClick = (index, onClick = f => f) => e => {
    const oldIndex = this.state.selected;

    this.setState({ selected: index }, () => {
      onClick(index);

      if (index !== oldIndex) {
        this.props.onChange(index);
      }
    });
  };

  renderTabsHeader = tabs => {
    const { classes } = this.props;
    const { selected } = this.state;

    return (
      <div className={classes.tabsHeader}>
        {tabs.map(({ title, disabled, children, onClick, ...rest }, index) => (
          <div
            {...rest}
            key={index}
            className={cn(classes.tabTitle, {
              [classes.disabled]: !!disabled,
              [classes.selected]: index === selected
            })}
            onClick={this.handleTabTitleClick(index, onClick)}
          >
            {title}
          </div>
        ))}
      </div>
    );
  };

  renderTabsContent = tabs => {
    const { classes } = this.props;
    const { selected } = this.state;

    return tabs.map(({ title, children, ...rest }, index) => (
      <div
        {...rest}
        key={index}
        className={cn(classes.tabsContent, {
          [classes.visible]: index === selected
        })}
      >
        {children}
      </div>
    ));
  };

  render() {
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
