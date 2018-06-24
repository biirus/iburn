import React from "react";

// components
import Icon from "components/Icon";
import Button from "components/Button";

// enhancers
import { enhance } from "./enhance";

class Controls extends React.Component {
  render () {
    const { classes, content, onPrev, onNext, onClick, } = this.props;

    return (
      <header className={classes.root}>
        <Button
          view="thin"
          icon={<Icon label="chevron-left" />}
          onClick={onPrev}
        />
        <Button view="thin" className={classes.content} onClick={onClick}>
          {content}
        </Button>
        <Button
          view="thin"
          icon={<Icon label="chevron-right" />}
          onClick={onNext}
        />
      </header>
    );
  }
}

export default enhance(Controls);
