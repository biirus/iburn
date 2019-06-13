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
import layoutDemoCode from "!!raw-loader!./LayoutDemo";
import LayoutDemo from "./LayoutDemo";
import sizeDemoCode from "!!raw-loader!./SizeDemo";
import SizeDemo from "./SizeDemo";

class Demo extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PageHeader>Dialog Demo</PageHeader>

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
          <Link href="#layout">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="layout"
            >
              Layout
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <LayoutDemo />
            </Tab>
            <Tab label="Code">
              <Code>{layoutDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#size">
            <Typography type="h600" className={classes.sectionHeader} id="size">
              Size
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <SizeDemo />
            </Tab>
            <Tab label="Code">
              <Code>{sizeDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(Demo);
