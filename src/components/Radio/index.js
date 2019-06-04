import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// enhancers
import withStyles from "react-jss";

// assets
import Icon from "components/Icon";

// styles
import styles from "./styles";

class Radio extends Component {
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
  render () {
    const { className, classes, children, theme, sheet, ...rest } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <label className={classNames}>
        <input {...rest} className={classes.input} type="radio" />

        <span className={classes.wrapper}>
          <Icon label="radio" className={classes.check} />

          <span className={classes.label}>{children}</span>
        </span>
      </label>
    );
  }
}

const enhance = withStyles(styles);

export default enhance(Radio);
