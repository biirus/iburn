import React, { Component } from "react";
import Link from "next/link";

import f from "faker";
import cn from "classnames";
import withStyles from "react-jss";
import styles from "docs/pages/demo/common-styles";

import Tabs from "iburn/components/Tabs";
import Tab from "iburn/components/Tabs/Tab";
import Typography from "iburn/components/Typography";
import PageHeader from "iburn/components/Page/Header";

import Code from "docs/components/Code";
import sizesDemoCode from "!!raw-loader!./SizesDemo";
import SizesDemo from "./SizesDemo";
import childrenDemoCode from "!!raw-loader!./ChildrenDemo";
import ChildrenDemo from "./ChildrenDemo";
import colorDemoCode from "!!raw-loader!./ColorDemo";
import ColorDemo from "./ColorDemo";

class AvatarDemo extends Component {
  static async getInitialProps (props) {
    const images = Array(6)
      .fill(0)
      .map(() => f.image.people(300, 300, true));

    return { images };
  }

  render () {
    const { classes, images, theme } = this.props;
    const { palette } = theme;
    const colors = [
      palette.primary,
      palette.messages.success,
      palette.messages.warning,
      palette.messages.error,
    ];

    return (
      <div>
        <PageHeader>Avatar Demo</PageHeader>

        <section className={cn(classes.section, classes.sizesSection)}>
          <Link href="#sizes">
            <Typography
              id="sizes"
              type="h600"
              className={classes.sectionHeader}
            >
              Size
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <SizesDemo images={images} />
            </Tab>
            <Tab label="Code">
              <Code>{sizesDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#children">
            <Typography
              id="children"
              type="h600"
              className={classes.sectionHeader}
            >
              Children
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <ChildrenDemo images={images} />
            </Tab>

            <Tab label="Code">
              <Code>{childrenDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#color">
            <Typography
              id="color"
              type="h600"
              className={classes.sectionHeader}
            >
              Color
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <ColorDemo colors={colors} />
            </Tab>

            <Tab label="Code">
              <Code>{colorDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(AvatarDemo);
