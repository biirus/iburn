import React, { Component } from "react";

import withStyles from "react-jss";
import styles from "./styles";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import Typography from "iburn/components/Typography";
import NavItem from "iburn/components/Nav/Item";
import Icon from "iburn/components/Icon";

class DefaultLayout extends Component {
  render () {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.navigation}>
          <div className={classes.navigationHeader}>
            <Link href="/">
              <NavItem icon={<Icon label="addon" />}>
                <Typography type="h700" component="div">
                  iburn
                </Typography>
              </NavItem>
            </Link>
          </div>
          <Navigation className={classes.navigationContent} />
        </div>

        <div className={classes.content}>
          <div>{children}</div>
        </div>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(DefaultLayout);
