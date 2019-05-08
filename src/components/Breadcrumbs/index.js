import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

class Breadcrumbs extends React.Component {
  static propTypes = {
    /**
     * Class name string to be merged to the root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/) classes object notation
     */
    classes: PropTypes.object,
    /**
     * Array of visited pages
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
    /**
     * Props object wich will be passed to the item's `span` element.
     */
    itemProps: PropTypes.object,
    /**
     * Props object wich will be passed to the item's `a` element.
     */
    linkProps: PropTypes.object,
  };

  render () {
    const {
      className,
      classes,
      items,
      itemProps,
      linkProps,
      theme,
      ...rest
    } = this.props;
    const classNames = cn(classes.root, className);

    if (!items) {
      return null;
    }

    return (
      <Typography {...rest} className={classNames} type="h200" component="div">
        {items.map((item, index) => (
          <span {...itemProps} className={classes.item} key={index}>
            <a {...linkProps} href={item.href} className={classes.link}>
              {item.label}
            </a>
          </span>
        ))}
      </Typography>
    );
  }
}

export default enhance(Breadcrumbs);
