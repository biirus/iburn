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
import imagesDemoCode from "!!raw-loader!./ImagesDemo";
import ImagesDemo from "./ImagesDemo";
import lettersDemoCode from "!!raw-loader!./LettersDemo";
import LettersDemo from "./LettersDemo";
import iconsDemoCode from "!!raw-loader!./IconsDemo";
import IconsDemo from "./IconsDemo";

class AvatarStackDemo extends Component {
  static async getInitialProps (props) {
    const images = Array(6)
      .fill(0)
      .map(() => f.image.people(300, 300, true));

    return { images };
  }

  render () {
    const { classes, images } = this.props;
    return (
      <div>
        <PageHeader>AvatarStack Demo</PageHeader>

        <section className={classes.section}>
          <Link href="#images">
            <Typography
              id="images"
              type="h600"
              className={classes.sectionHeader}
            >
              Images
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <ImagesDemo images={images} />
            </Tab>
            <Tab label="Code">
              <Code>{imagesDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#letters">
            <Typography
              id="letters"
              type="h600"
              className={classes.sectionHeader}
            >
              Letters
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <LettersDemo />
            </Tab>
            <Tab label="Code">
              <Code>{lettersDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#icons">
            <Typography
              id="icons"
              type="h600"
              className={classes.sectionHeader}
            >
              Icons
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
export default enhance(AvatarStackDemo);
