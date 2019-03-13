import React, { Component } from "react";

import cn from "classnames";

import { compose } from "lodash/fp";
import { withRouter } from "next/router";
import withStyles from "react-jss";

import Link from "next/link";
import Nav from "iburn/components/Nav";
import NavItem from "iburn/components/Nav/Item";
import Divider from "iburn/components/Divider";

import styles from "./styles";

class Navigation extends Component {
  render () {
    const { className, classes, router } = this.props;

    // TODO: implement next page prefetching
    // router.prefetch('/dynamic')

    return (
      <div className={cn(classes.root, className)}>
        <Nav header="Demo">
          <Link href="/demo/avatar">
            <NavItem active={router.pathname === "/demo/avatar"}>
              Avatar
            </NavItem>
          </Link>
          <Link href="/api/avatar/stack">
            <NavItem active={router.pathname === "/api/avatar/stack"}>
              Avatar Stack
            </NavItem>
          </Link>
        </Nav>

        <Divider />

        <Nav header="API Reference">
          <Link href="/api?component=Avatar">
            <NavItem
              active={
                router.pathname === "/api" &&
                router.query.component === "Avatar"
              }
            >
              Avatar
            </NavItem>
          </Link>
          <Link href="/api?component=Avatar/Stack">
            <NavItem
              active={
                router.pathname === "/api" &&
                router.query.component === "Avatar/Stack"
              }
            >
              AvatarStack
            </NavItem>
          </Link>
          <Link href="/api?component=Banner">
            <NavItem
              active={
                router.pathname === "/api" &&
                router.query.component === "Banner"
              }
            >
              Banner
            </NavItem>
          </Link>
        </Nav>
      </div>
    );
  }
}

const enhance = compose(
  withRouter,
  withStyles(styles)
);
export default enhance(Navigation);
