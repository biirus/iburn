import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// enhancers
import { enhance } from "./enhance";

/**
 * The basic Avatar component that renders it's content or image by passing `src` or `srcSet` prop
 */
class Avatar extends React.Component {
  static defaultProps = {
    size: "medium",
  };

  static propTypes = {
    /**
     * Used to render icon or text elements inside the Avatar. `src` and `alt` props will not be used and no `img` will be rendered by default.
     */
    children: PropTypes.node,
    /**
     * Class name string to be merged to the root node.
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/) classes object notation.
     */
    classes: PropTypes.object,
    /**
     * The [`srcSet`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) attribute for the `img` element.
     */
    srcSet: PropTypes.string,
    /**
     * The `src` attribute for the `img` element.
     */
    src: PropTypes.string,
    /**
     * Used in combination with `src` or `srcSet` to provide an alt attribute for the rendered `img` element.
     */
    alt: PropTypes.string,
    /**
     * Defines the size of the avatar.
     */
    size: PropTypes.oneOf([
      "xSmall",
      "small",
      "medium",
      "large",
      "xLarge",
      "xxLarge",
    ]),
    /**
     * Background color
     */
    color: PropTypes.string,
    /**
     * Props object wich will be passed to the `img` element.
     */
    imgProps: PropTypes.object,
  };

  render () {
    const {
      classes,
      className,
      children,
      src,
      srcSet,
      alt,
      theme,
      imgProps,
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
            {...imgProps}
          />
        ) : (
          children
        )}
      </div>
    );
  }
}

export default enhance(Avatar);
