import React from "react";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class DialogContent extends React.Component {
  state = {
    topShadow: false,
    bottomShadow: false,
  };

  constructor (props) {
    super(props);

    this.content = React.createRef();
  }

  componentDidMount () {
    this.content.current.addEventListener("scroll", this.addShadow, false);
  }

  componentDidUpdate () {
    this.addShadow();
  }

  componentWillUnmount () {
    this.content.current.removeEventListener("scroll", this.addShadow, false);
  }

  addShadow = () => {
    const { scrollTop, scrollHeight, clientHeight, } = this.content.current;
    const treshold = 8;

    const scrollableDistance = scrollHeight - clientHeight;
    const topShadow = scrollTop > treshold;
    const bottomShadow = scrollTop <= scrollableDistance - treshold;

    if (
      topShadow !== this.state.topShadow ||
      bottomShadow !== this.state.bottomShadow
    ) {
      this.setState({ topShadow, bottomShadow, });
    }
  };

  render () {
    const { topShadow, bottomShadow, } = this.state;
    const { className, classes, children, theme, sheet, ...rest } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.topShadow]: topShadow,
      [classes.bottomShadow]: bottomShadow,
    });

    return (
      <div {...rest} className={classNames} ref={this.content}>
        {children}
      </div>
    );
  }
}

export default enhance(DialogContent);
