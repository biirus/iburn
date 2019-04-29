import React, { Component } from "react";
import Link from "next/link";

import withStyles from "react-jss";
import styles from "docs/pages/demo/common-styles";

import Code from "docs/components/Code";

import PageHeader from "iburn/components/Page/Header";
import Typography from "iburn/components/Typography";
import Tabs from "iburn/components/Tabs";
import Tab from "iburn/components/Tabs/Tab";

import colorDemoCode from "!!raw-loader!./ColorDemo";
import ColorDemo from "./ColorDemo";
import navDemoCode from "!!raw-loader!./NavDemo";
import NavDemo from "./NavDemo";

class BadgeDemo extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PageHeader>Badge Demo</PageHeader>

        <section className={classes.section}>
          <Link href="#color">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="color"
            >
              Color
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <ColorDemo />
            </Tab>
            <Tab label="Code">
              <Code>{colorDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#nav">
            <Typography type="h600" className={classes.sectionHeader} id="nav">
              Composition with Nav, NavItem
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <NavDemo />
            </Tab>
            <Tab label="Code">
              <Code>{navDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(BadgeDemo);
