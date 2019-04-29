import React, { Component } from "react";

import cn from "classnames";

import { compose } from "lodash/fp";
import { withRouter } from "next/router";
import withStyles from "react-jss";

import { getDemoPages, getApiPages } from "docs/lib/pages";

import Link from "next/link";
import Nav from "iburn/components/Nav";
import NavItem from "iburn/components/Nav/Item";
import Divider from "iburn/components/Divider";

import styles from "./styles";

class Navigation extends Component {
  render () {
    const { className, classes, router } = this.props;

    return (
      <div className={cn(classes.root, className)}>
        <Nav header="Demo">
          {getDemoPages().map(p => (
            <Link key={p.path} href={p.path}>
              <NavItem active={router.route === p.path}>{p.name}</NavItem>
            </Link>
          ))}
        </Nav>

        <Divider />

        <Nav header="API Reference">
          {getApiPages().map(p => (
            <Link key={p.path} href={p.path}>
              <NavItem active={router.asPath === p.path}>{p.name}</NavItem>
            </Link>
          ))}
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
