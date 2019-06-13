import React, { useState, useCallback } from "react";

import withStyles from "react-jss";
import Dialog from "iburn/components/Dialog";
import DialogHeader from "iburn/components/Dialog/Header";
import DialogContent from "iburn/components/Dialog/Content";
import DialogFooter from "iburn/components/Dialog/Footer";
import Button from "iburn/components/Button";
import Typography from "iburn/components/Typography";

const enhance = withStyles(({ spacing }) => {
  return {
    loginForm: {
      display: "grid",
      gridTemplateRows: "repeat(4, auto)",
      gridGap: `${spacing.medium}px`,
      padding: spacing.large,
    },

    action: {
      "& + $action": {
        marginLeft: spacing.small,
      },
    },
  };
});

const Demo = enhance(({ classes }) => {
  const [open, toggle] = useState(false);

  const openDialog = useCallback(() => {
    toggle(true);
  });

  const closeDialog = useCallback(() => {
    toggle(false);
  });

  return (
    <div className={classes.root}>
      <Button onClick={openDialog}>Show licence</Button>

      <Dialog isOpen={open} onClose={closeDialog}>
        <DialogHeader actions={<Button color="info">Help</Button>}>
          Licence to cook
        </DialogHeader>

        <DialogContent>
          <Typography component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            accusamus cum inventore facilis perspiciatis deleniti, quos debitis
            dolores labore nobis non, illo adipisci porro, minus velit esse
            aspernatur rem veritatis! Animi totam quis explicabo illo mollitia
            aperiam ipsa molestiae fuga aspernatur! Molestias totam nisi ad
            sequi, iste quos dolorum illum earum atque sunt deserunt nobis,
            voluptatem modi asperiores incidunt! Architecto assumenda eos
            reiciendis tempore cum, voluptatem voluptatibus ducimus molestiae
            quibusdam! Voluptatem natus cumque placeat provident alias fugit
            illo nemo eaque nobis nihil. Maiores corrupti fugit cum debitis ex
            quaerat nobis voluptatem temporibus odio similique culpa doloremque
            voluptates facilis doloribus consequuntur nisi, inventore error!
            Nihil blanditiis reiciendis vero! Ipsam doloribus dolorum et ad
            eligendi assumenda, ut laudantium reiciendis quaerat dolore labore!
          </Typography>

          <Typography component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            accusamus cum inventore facilis perspiciatis deleniti, quos debitis
            dolores labore nobis non, illo adipisci porro, minus velit esse
            aspernatur rem veritatis! Animi totam quis explicabo illo mollitia
            aperiam ipsa molestiae fuga aspernatur! Molestias totam nisi ad
            sequi, iste quos dolorum illum earum atque sunt deserunt nobis,
            voluptatem modi asperiores incidunt! Architecto assumenda eos
            reiciendis tempore cum, voluptatem voluptatibus ducimus molestiae
            quibusdam! Voluptatem natus cumque placeat provident alias fugit
            illo nemo eaque nobis nihil. Maiores corrupti fugit cum debitis ex
            quaerat nobis voluptatem temporibus odio similique culpa doloremque
            voluptates facilis doloribus consequuntur nisi, inventore error!
            Nihil blanditiis reiciendis vero! Ipsam doloribus dolorum et ad
            eligendi assumenda, ut laudantium reiciendis quaerat dolore labore!
          </Typography>

          <Typography component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            accusamus cum inventore facilis perspiciatis deleniti, quos debitis
            dolores labore nobis non, illo adipisci porro, minus velit esse
            aspernatur rem veritatis! Animi totam quis explicabo illo mollitia
            aperiam ipsa molestiae fuga aspernatur! Molestias totam nisi ad
            sequi, iste quos dolorum illum earum atque sunt deserunt nobis,
            voluptatem modi asperiores incidunt! Architecto assumenda eos
            reiciendis tempore cum, voluptatem voluptatibus ducimus molestiae
            quibusdam! Voluptatem natus cumque placeat provident alias fugit
            illo nemo eaque nobis nihil. Maiores corrupti fugit cum debitis ex
            quaerat nobis voluptatem temporibus odio similique culpa doloremque
            voluptates facilis doloribus consequuntur nisi, inventore error!
            Nihil blanditiis reiciendis vero! Ipsam doloribus dolorum et ad
            eligendi assumenda, ut laudantium reiciendis quaerat dolore labore!
          </Typography>
        </DialogContent>

        <DialogFooter
          actions={
            <>
              <Button
                className={classes.action}
                variant="thin"
                onClick={closeDialog}
              >
                Decline
              </Button>
              <Button
                className={classes.action}
                color="primary"
                onClick={closeDialog}
              >
                Accept
              </Button>
            </>
          }
        />
      </Dialog>
    </div>
  );
});

export default Demo;
