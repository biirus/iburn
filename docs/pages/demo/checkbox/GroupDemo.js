import React, { useState, useCallback } from "react";
import withStyles from "react-jss";

import Checkbox from "iburn/components/Checkbox";
import CheckboxGroup from "iburn/components/Checkbox/Group";
import Typography from "iburn/components/Typography";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: `1fr 1fr`,
      gridGap: `${spacing.large}px`,
    },
  };
});

const salad = ["tomato", "cucumber", "onion", "oil"];
const saladState = salad.reduce((acc, i) => {
  acc[i] = false;
  return acc;
}, {});

const Demo = enhance(({ classes }) => {
  const [saladList, changeSaladList] = useState(saladState);

  const handleChange = useCallback(e => {
    changeSaladList({
      ...saladList,
      [e.target.name]: e.target.checked,
    });
  });

  return (
    <div className={classes.root}>
      <div>
        <Typography type="h500" gutterBottom>
          Salad list
        </Typography>
        <CheckboxGroup header="Salad">
          {salad.map(i => (
            <Checkbox
              key={i}
              checked={saladList[i]}
              name={i}
              onChange={handleChange}
            >
              {i}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>

      <div>
        <Typography type="h500">State</Typography>

        <pre>
          <code>{JSON.stringify(saladList, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
});

export default Demo;
