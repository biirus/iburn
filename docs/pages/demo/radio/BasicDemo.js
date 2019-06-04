import React, { useState, useCallback } from "react";
import withStyles from "react-jss";

import Radio from "iburn/components/Radio";
import Typography from "iburn/components/Typography";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: `1fr 1fr`,
      gridGap: `${spacing.large}px`,
    },

    item: {
      display: "block",
    },
  };
});

const Demo = enhance(({ classes }) => {
  const [boxes, changeBox] = useState({
    first: false,
    second: true,
    third: false,
  });

  const handleChange = useCallback(e => {
    changeBox({
      ...boxes,
      [e.target.name]: e.target.checked,
    });
  });

  return (
    <div className={classes.root}>
      <div>
        <Radio
          className={classes.item}
          checked={boxes.first}
          name="first"
          onChange={handleChange}
        >
          First radio
        </Radio>

        <Radio
          className={classes.item}
          checked={boxes.second}
          name="second"
          disabled
          onChange={handleChange}
        >
          Second radio (disabled)
        </Radio>

        <div className={classes.item}>
          <Radio checked={boxes.third} name="third" onChange={handleChange} />
          <Typography component="span" type="h100">
            ← Third box w/o label
          </Typography>
        </div>
      </div>

      <div>
        <Typography type="h500">State</Typography>

        <pre>
          <code>{JSON.stringify(boxes, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
});

export default Demo;
