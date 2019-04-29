import React from "react";

import withStyles from "react-jss";
import Badge from "iburn/components/Badge";
import Divider from "iburn/components/Divider";
import Nav from "iburn/components/Nav";
import NavItem from "iburn/components/Nav/Item";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      width: spacing.unit * 40,
    },
  };
});

function Demo ({ classes }) {
  return (
    <div className={classes.root}>
      <Nav header="Main menu">
        <NavItem href="#contacts">Contacts</NavItem>
        <NavItem href="#calls">Calls</NavItem>
        <NavItem
          href="#messages"
          active={true}
          badge={
            <Badge color="primary" className={classes.badge}>
              10
            </Badge>
          }
        >
          Messages
        </NavItem>
        <NavItem href="#settings">Settings</NavItem>
      </Nav>

      <Divider />

      <Nav header="System menu">
        <NavItem
          href="#general"
          badge={
            <Badge color="error" className={classes.badge}>
              Storage is full
            </Badge>
          }
        >
          General
        </NavItem>
        <NavItem
          href="#updates"
          badge={
            <Badge color="info" className={classes.badge}>
              v1.2.3
            </Badge>
          }
        >
          Updates
        </NavItem>
      </Nav>
    </div>
  );
}

export default enhance(Demo);
