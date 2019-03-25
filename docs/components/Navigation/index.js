import React, { Component } from "react";

import cn from "classnames";

import { compose } from "lodash/fp";
import { withRouter } from "next/router";
import withStyles from "react-jss";

import pagesMap from "docs/lib/pages-map";

import Link from "next/link";
import Nav from "iburn/components/Nav";
import NavItem from "iburn/components/Nav/Item";
import Divider from "iburn/components/Divider";

import styles from "./styles";

class Navigation extends Component {
  capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  toSlug = str => {
    return str.toLowerCase();
  };

  toName = str => {
    return str
      .split("-")
      .map(this.capitalize)
      .join("");
  };

  getDemoPages = () => {
    const blackList = [
      "Avatar-Stack",
      "Button-Group",
      "Calendar-Controls",
      "Checkbox-Group",
      "Dialog-Content",
      "Dialog-Footer",
      "Dialog-Title",
      "Dropdown-CheckboxItem",
      "Dropdown-RadioItem",
      "Dropdown-Item",
      "Dropdown-Group",
      "Flag-Content",
      "Flag-Footer",
      "Flag-Title",
      "Radio-Group",
      "Reset",
      "Select-Group",
      "Select-Item",
      "Table-Body",
      "Table-Head",
      "Table-Foot",
      "Table-Row",
      "Table-Cell",
      "Table-Pagination",
      "Tabs-Tab",
    ];

    return Object.keys(pagesMap)
      .filter(component => !blackList.includes(component))
      .map(component => {
        return {
          path: `/demo/${this.toSlug(component)}`,
          name: this.toName(component),
        };
      });
  };

  render () {
    const { className, classes, router } = this.props;

    // TODO: implement next page prefetching
    // router.prefetch('/dynamic')

    return (
      <div className={cn(classes.root, className)}>
        <Nav header="Demo">
          {this.getDemoPages().map(p => (
            <Link key={p.path} href={p.path}>
              <NavItem active={router.pathname === p.path}>{p.name}</NavItem>
            </Link>
          ))}
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
          <Link href="/api?component=Breadcrumbs">
            <NavItem
              active={
                router.pathname === "/api" &&
                router.query.component === "Breadcrumbs"
              }
            >
              Breadcrumbs
            </NavItem>
          </Link>
          <Link href="/api?component=Button">
            <NavItem
              active={
                router.pathname === "/api" &&
                router.query.component === "Button"
              }
            >
              Button
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
