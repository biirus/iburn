import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import Icon from "components/Icon";
import Button from "components/Button";

// enhancers
import { enhance } from "./enhance";

/**
 * Component to control calendar view. It allows to change months and years - depends on current view.
 */
class CalendarControls extends React.Component {
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
     * The central control button content. Typicaly it is month name or year, it depends on current view.
     */
    content: PropTypes.string.isRequired,
    /**
     * Callback function fired when then `prev` button is clicked
     */
    onPrev: PropTypes.func.isRequired,
    /**
     * Callback function fired when then `next` button is clicked
     */
    onNext: PropTypes.func.isRequired,
    /**
     * Callback function fired when then `content` button is clicked
     */
    onClick: PropTypes.func.isRequired,
  };

  render () {
    const { classes, className, content, onPrev, onNext, onClick } = this.props;
    const classNames = cn(classes.root, className);

    return (
      <header className={classNames}>
        <Button
          variant="thin"
          icon={<Icon label="chevron-left" />}
          onClick={onPrev}
        />

        <Button variant="thin" className={classes.content} onClick={onClick}>
          {content}
        </Button>

        <Button
          variant="thin"
          icon={<Icon label="chevron-right" />}
          onClick={onNext}
        />
      </header>
    );
  }
}

export default enhance(CalendarControls);
