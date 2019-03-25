import React, { Component } from "react";
import Link from "next/link";

import withStyles from "react-jss";
import styles from "docs/pages/demo/common-styles";

import Code from "docs/components/Code";

import PageHeader from "iburn/components/Page/Header";
import Typography from "iburn/components/Typography";
import Tabs from "iburn/components/Tabs";
import Tab from "iburn/components/Tabs/Tab";

import colorsDemoCode from "!!raw-loader!./ColorsDemo";
import ColorsDemo from "./ColorsDemo";
import autoCloseDemoCode from "!!raw-loader!./AutoCloseDemo";
import AutoCloseDemo from "./AutoCloseDemo";
import iconsDemoCode from "!!raw-loader!./IconsDemo";
import IconsDemo from "./IconsDemo";

class BannerDemo extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PageHeader>Banner Demo</PageHeader>

        <section className={classes.section}>
          <Link href="#colors">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="colors"
            >
              Colors
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <ColorsDemo />
            </Tab>
            <Tab label="Code">
              <Code>{colorsDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#auto-close">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="auto-close"
            >
              Auto close
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <AutoCloseDemo />
            </Tab>
            <Tab label="Code">
              <Code>{autoCloseDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#custom-icons">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="custom-icons"
            >
              Custom Icons
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <IconsDemo />
            </Tab>
            <Tab label="Code">
              <Code>{iconsDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(BannerDemo);
