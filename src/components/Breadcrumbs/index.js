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
     * Class name string to be merged to root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/?v=v8.5.1) classes object notation
     */
    classes: PropTypes.object.isRequired,
    /**
     * Array of visited pages
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ),
  };

  render () {
    const { className, classes, items, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    if (!items) {
      return null;
    }

    return (
      <Typography {...rest} className={classNames} type="h200" component="div">
        {items.map((item, index) => (
          <span key={index} className={classes.item}>
            <a href={item.href} className={classes.link}>
              {item.label}
            </a>
          </span>
        ))}
      </Typography>
    );
  }
}

export default enhance(Breadcrumbs);
