import React, { useState, useCallback } from "react";
import withStyles from "react-jss";

import Radio from "iburn/components/Radio";
import RadioGroup from "iburn/components/Radio/Group";
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

const heroes = ["Spiderman", "Thor", "Ironman", "Hawk eye"];

const Demo = enhance(({ classes }) => {
  const [favoriteHero, selectHero] = useState(null);

  const handleChange = useCallback(e => {
    selectHero(e.target.value);
  });

  return (
    <div className={classes.root}>
      <div>
        <Typography type="h500" gutterBottom>
          Favorite hero
        </Typography>
        <RadioGroup>
          {heroes.map(i => (
            <Radio
              key={i}
              checked={favoriteHero === i}
              name="favorite-hero"
              value={i}
              onChange={handleChange}
            >
              {i}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Typography type="h500">State</Typography>

        <pre>
          <code>{JSON.stringify(favoriteHero, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
});

export default Demo;
