import React, { Component } from "react";
import Link from "next/link";

import cn from "classnames";
import withStyles from "react-jss";
import styles from "./styles";

import f from "faker";

import Badge from "iburn/components/Badge";
import Tabs from "iburn/components/Tabs";
import Tab from "iburn/components/Tabs/Tab";
import Typography from "iburn/components/Typography";
import PageHeader from "iburn/components/Page/Header";
import Avatar from "iburn/components/Avatar";

import Code from "docs/components/Code";
import sizesDemoCode from "!!raw-loader!./SizesDemo";
import SizesDemo from "./SizesDemo";
import childrenDemoCode from "!!raw-loader!./ChildrenDemo";
import ChildrenDemo from "./ChildrenDemo";

class AvatarDemo extends Component {
  static async getInitialProps (props) {
    const images = Array(6)
      .fill(0)
      .map(() => f.image.people(300, 300, true));

    console.log(images);

    return { images };
  }

  render () {
    const { classes, images } = this.props;

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
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(AvatarDemo);
