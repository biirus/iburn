import React, { Component } from "react";
import Link from "next/link";

import withStyles from "react-jss";
import styles from "docs/pages/demo/common-styles";

import Code from "docs/components/Code";

import PageHeader from "iburn/components/Page/Header";
import Typography from "iburn/components/Typography";
import Tabs from "iburn/components/Tabs";
import Tab from "iburn/components/Tabs/Tab";

import basicDemoCode from "!!raw-loader!./BasicDemo";
import BasicDemo from "./BasicDemo";
import callbacksDemoCode from "!!raw-loader!./CallbacksDemo";
import CallbacksDemo from "./CallbacksDemo";

class Demo extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PageHeader>Drawer Demo</PageHeader>

        <section className={classes.section}>
          <Link href="#basic">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="basic"
            >
              Basic
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <BasicDemo />
            </Tab>
            <Tab label="Code">
              <Code>{basicDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#callbacks">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="callbacks"
            >
              Callbacks
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <CallbacksDemo />
            </Tab>
            <Tab label="Code">
              <Code>{callbacksDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(Demo);
