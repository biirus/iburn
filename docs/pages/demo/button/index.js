import React, { Component } from "react";
import Link from "next/link";

import withStyles from "react-jss";
import styles from "docs/pages/demo/common-styles";

import Code from "docs/components/Code";

import PageHeader from "iburn/components/Page/Header";
import Typography from "iburn/components/Typography";
import Tabs from "iburn/components/Tabs";
import Tab from "iburn/components/Tabs/Tab";

import variantDemoCode from "!!raw-loader!./VariantDemo";
import VariantDemo from "./VariantDemo";
import colorDemoCode from "!!raw-loader!./ColorDemo";
import ColorDemo from "./ColorDemo";
import paddingDemoCode from "!!raw-loader!./PaddingDemo";
import PaddingDemo from "./PaddingDemo";
import iconDemoCode from "!!raw-loader!./IconDemo";
import IconDemo from "./IconDemo";
import componentDemoCode from "!!raw-loader!./ComponentDemo";
import ComponentDemo from "./ComponentDemo";

class ButtonDemo extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PageHeader>Button Demo</PageHeader>

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
              <VariantDemo />
            </Tab>
            <Tab label="Code">
              <Code>{variantDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

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
          <Link href="#padding">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="padding"
            >
              Padding
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <PaddingDemo />
            </Tab>
            <Tab label="Code">
              <Code>{paddingDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#icon">
            <Typography type="h600" className={classes.sectionHeader} id="icon">
              Icon
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <IconDemo />
            </Tab>
            <Tab label="Code">
              <Code>{iconDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#component">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="component"
            >
              Component
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <ComponentDemo />
            </Tab>
            <Tab label="Code">
              <Code>{componentDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(ButtonDemo);
