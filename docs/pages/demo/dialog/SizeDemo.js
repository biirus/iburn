import React, { useState, useCallback } from "react";
import { capitalize } from "lodash";

import withStyles from "react-jss";
import Dialog from "iburn/components/Dialog";
import DialogHeader from "iburn/components/Dialog/Header";
import DialogContent from "iburn/components/Dialog/Content";
import DialogFooter from "iburn/components/Dialog/Footer";
import Button from "iburn/components/Button";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      display: "grid",
      gridGap: `${spacing.medium}px`,
      gridTemplateColumns: `repeat(3, min-content)`,
    },
  };
});

const Demo = enhance(({ classes }) => {
  const [dialogs, toggle] = useState({
    small: false,
    medium: false,
    large: false,
  });

  const toggleDialog = useCallback(name => {
    toggle({
      ...dialogs,
      [name]: !dialogs[name],
    });
  });

  return (
    <div className={classes.root}>
      {Object.keys(dialogs).map(dialog => (
        <Button key={dialog} onClick={() => toggleDialog(dialog)}>
          Open {dialog} dialog
        </Button>
      ))}

      {Object.keys(dialogs).map(dialog => (
        <Dialog
          key={dialog}
          size={dialog}
          isOpen={dialogs[dialog]}
          onClose={() => toggleDialog(dialog)}
        >
          <DialogHeader>{capitalize(dialog)} dialog header</DialogHeader>
          <DialogContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            asperiores tenetur eius voluptatem autem facilis quam officiis
            corporis culpa sunt, illo, praesentium sed, commodi necessitatibus
            debitis id itaque ab veritatis?
          </DialogContent>
          <DialogFooter>Dialog footer</DialogFooter>
        </Dialog>
      ))}
    </div>
  );
});

export default Demo;
