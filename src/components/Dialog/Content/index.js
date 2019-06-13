import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import { enhance } from "./enhance";

class DialogContent extends React.Component {
  static propTypes = {
    /**
     * Class name string to be merged to the root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/) classes object notation
     */
    classes: PropTypes.object,
  };

  state = {
    topShadow: false,
    bottomShadow: false,
  };

  componentDidMount () {
    this.content.addEventListener("scroll", this.addShadow, false);
  }

  componentDidUpdate () {
    this.addShadow();
  }

  componentWillUnmount () {
    this.content.removeEventListener("scroll", this.addShadow, false);
  }

  addShadow = () => {
    const { scrollTop, scrollHeight, clientHeight } = this.content;
    const treshold = 8;

    const scrollableDistance = scrollHeight - clientHeight;
    const topShadow = scrollTop > treshold;
    const bottomShadow = scrollTop <= scrollableDistance - treshold;

    if (
      topShadow !== this.state.topShadow ||
      bottomShadow !== this.state.bottomShadow
    ) {
      this.setState({ topShadow, bottomShadow });
    }
  };

  render () {
    const { topShadow, bottomShadow } = this.state;
    const { className, classes, children, theme, sheet, ...rest } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.topShadow]: topShadow,
      [classes.bottomShadow]: bottomShadow,
    });

    return (
      <div {...rest} className={classNames} ref={el => (this.content = el)}>
        {children}
      </div>
    );
  }
}

export default enhance(DialogContent);
