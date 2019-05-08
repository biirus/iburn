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
import rangeDemoCode from "!!raw-loader!./RangeDemo";
import RangeDemo from "./RangeDemo";
import minMaxDemoCode from "!!raw-loader!./MinMaxDemo";
import MinMaxDemo from "./MinMaxDemo";
import localeDemoCode from "!!raw-loader!./LocaleDemo";
import LocaleDemo from "./LocaleDemo";

class CalendarDemo extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PageHeader>Calendar Demo</PageHeader>

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
          <Link href="#range">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="range"
            >
              Range
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <RangeDemo />
            </Tab>
            <Tab label="Code">
              <Code>{rangeDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#min-max">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="min-max"
            >
              Min and max values
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <MinMaxDemo />
            </Tab>
            <Tab label="Code">
              <Code>{minMaxDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#locale">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="locale"
            >
              Locale
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <LocaleDemo />
            </Tab>
            <Tab label="Code">
              <Code>{localeDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(CalendarDemo);
