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
import pageHeaderDemoCode from "!!raw-loader!./PageHeaderDemo";
import PageHeaderDemo from "./PageHeaderDemo";

class BreadcrumbsDemo extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PageHeader>Breadcrumbs Demo</PageHeader>

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
          <Link href="#page-header">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="page-header"
            >
              PageHeader
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <PageHeaderDemo />
            </Tab>
            <Tab label="Code">
              <Code>{pageHeaderDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(BreadcrumbsDemo);
