import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// enhancers
import { enhance } from "./enhnace";

/**
 * The basic Avatar component that renders it's content or image
 * which URL passed by `src` prop
 */
class Avatar extends React.Component {
  static defaultProps = {
    src: null,
  };

  static propTypes = {
    /** Image source URL */
    src: PropTypes.string,
  };

  clearProps = () => {
    const {
      classes,
      className,
      children,
      src,
      sheet,
      theme,
      ...rest
    } = this.props;

    return rest;
  };

  render () {
    const { classes, className, children, src, } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <div {...this.clearProps()} className={classNames}>
        {src ? (
          <div
            className={classes.img}
            style={{ backgroundImage: `url(${src})`, }}
          />
        ) : (
          children
        )}
      </div>
    );
  }
}

export default enhance(Avatar);
