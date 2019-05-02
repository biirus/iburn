import React, { Component } from "react";
import Link from "next/link";

import withStyles from "react-jss";
import styles from "docs/pages/demo/common-styles";

import Code from "docs/components/Code";

import PageHeader from "iburn/components/Page/Header";
import Typography from "iburn/components/Typography";
import Tabs from "iburn/components/Tabs";
import Tab from "iburn/components/Tabs/Tab";

import defaultDemoCode from "!!raw-loader!./DefaultDemo";
import DefaultDemo from "./DefaultDemo";

class CalendarDemo extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PageHeader>Calendar Demo</PageHeader>

        <section className={classes.section}>
          <Link href="#variant">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="variant"
            >
              Variant
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <DefaultDemo />
            </Tab>
            <Tab label="Code">
              <Code>{defaultDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(CalendarDemo);
