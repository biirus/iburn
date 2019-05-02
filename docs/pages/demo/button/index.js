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
import iconButtonDemoCode from "!!raw-loader!./IconButtonDemo";
import IconButtonDemo from "./IconButtonDemo";
import componentDemoCode from "!!raw-loader!./ComponentDemo";
import ComponentDemo from "./ComponentDemo";
import buttonGroupDemoCode from "!!raw-loader!./ButtonGroupDemo";
import ButtonGroupDemo from "./ButtonGroupDemo";
import selectableBGDemoCode from "!!raw-loader!./SelectableBGDemo";
import SelectableBGDemo from "./SelectableBGDemo";
import justifiedBGDemoCode from "!!raw-loader!./JustifiedBGDemo";
import JustifiedBGDemo from "./JustifiedBGDemo";

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
          <Link href="#icon-button">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="icon-button"
            >
              IconButton
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <IconButtonDemo />
            </Tab>
            <Tab label="Code">
              <Code>{iconButtonDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#custom-component">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="custom-component"
            >
              Custom component
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

        <section className={classes.section}>
          <Link href="#button-group">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="button-group"
            >
              ButtonGroup
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <ButtonGroupDemo />
            </Tab>
            <Tab label="Code">
              <Code>{buttonGroupDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#selectable-button-group">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="selectable-button-group"
            >
              Selectable ButtonGroup
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <SelectableBGDemo />
            </Tab>
            <Tab label="Code">
              <Code>{selectableBGDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#justified-button-group">
            <Typography
              type="h600"
              className={classes.sectionHeader}
              id="justified-button-group"
            >
              Justified ButtonGroup
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <JustifiedBGDemo />
            </Tab>
            <Tab label="Code">
              <Code>{justifiedBGDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(ButtonDemo);
