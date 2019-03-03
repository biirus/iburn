import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// enhancers
import { enhance } from "./enhance";

/**
 * The basic Avatar component that renders it's content or image by passing `src` or `srcSet` prop
 */
class Avatar extends React.Component {
  static defaultProps = {};

  static propTypes = {
    /**
     * Class name string to be merged to root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/?v=v8.5.1) classes object notation
     */
    classes: PropTypes.object,
    /**
     * The `srcSet` attribute for the `img` element.
     */
    srcSet: PropTypes.string,
    /**
     * The `sizes` attribute for the `img` element.
     */
    sizes: PropTypes.string,
    /**
     * The `src` attribute for the `img` element.
     */
    src: PropTypes.string,
    /**
     * Used in combination with `src` or `srcSet` to provide an alt attribute for the rendered `img` element.
     */
    alt: PropTypes.string,
    /**
     * Used to render icon or text elements inside the Avatar. `src` and `alt` props will not be used and no `img` will be rendered by default.
     */
    children: PropTypes.node,
  };

  render () {
    const {
      classes,
      className,
      children,
      src,
      srcSet,
      sizes,
      alt,
      theme,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className);

    return (
      <div {...rest} className={classNames}>
        {src || srcSet ? (
          <img
            className={classes.img}
            alt={alt}
            src={src}
            srcSet={srcSet}
            sizes={sizes}
          />
        ) : (
          children
        )}
      </div>
    );
  }
}

export default enhance(Avatar);
