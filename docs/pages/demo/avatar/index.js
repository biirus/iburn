import React, { Component } from "react";
import Link from "next/link";

import cn from "classnames";
import withStyles from "react-jss";
import styles from "docs/pages/demo/common-styles";
import fetch from "node-fetch";

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
import stackImagesDemoCode from "!!raw-loader!./ImagesDemo";
import StackImagesDemo from "./ImagesDemo";
import stackIconsDemoCode from "!!raw-loader!./IconsDemo";
import StackIconsDemo from "./IconsDemo";
import stackLettersDemoCode from "!!raw-loader!./LettersDemo";
import StackLettersDemo from "./LettersDemo";

class AvatarDemo extends Component {
  static async getInitialProps (props) {
    const imagesNumber = 6;

    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    const dataCount = data.length - 1;

    const index = Math.min(
      dataCount - imagesNumber,
      Math.round(Math.random() * dataCount)
    );

    const images = data.slice(index, index + 6).map(user => user.avatar_url);

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

        <section className={classes.section}>
          <Link href="#stack-images">
            <Typography
              id="stack-images"
              type="h600"
              className={classes.sectionHeader}
            >
              AvatarStack Images
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <StackImagesDemo images={images} />
            </Tab>

            <Tab label="Code">
              <Code>{stackImagesDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#stack-icons">
            <Typography
              id="stack-icons"
              type="h600"
              className={classes.sectionHeader}
            >
              AvatarStack Icons
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <StackIconsDemo />
            </Tab>

            <Tab label="Code">
              <Code>{stackIconsDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>

        <section className={classes.section}>
          <Link href="#stack-letters">
            <Typography
              id="stack-letters"
              type="h600"
              className={classes.sectionHeader}
            >
              AvatarStack Letters
            </Typography>
          </Link>

          <Tabs>
            <Tab label="Preview">
              <StackLettersDemo />
            </Tab>

            <Tab label="Code">
              <Code>{stackLettersDemoCode}</Code>
            </Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(AvatarDemo);
