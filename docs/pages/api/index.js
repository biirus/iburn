import React, { Component } from "react";

import { compose } from "lodash/fp";
import { withRouter } from "next/router";
import withStyles from "react-jss";
import styles from "./styles";

import { parse } from "react-docgen";

import Typography from "iburn/components/Typography";
import PageHeader from "iburn/components/Page/Header";
import PropsTable from "docs/components/PropsTable";
import Markdown from "docs/components/Markdown";
import StylesTable from "docs/components/StylesTable";

import getStylesDocs from "docs/lib/get-styles-docs";

class API extends Component {
  static async getInitialProps (props) {
    const { component } = props.query;

    const codeSrc = require(`!!raw-loader!iburn/components/${component}`);
    const docs = parse(codeSrc);

    let stylesDocs = null;

    try {
      const stylesSrc = require(`!!raw-loader!iburn/components/${component}/styles`);
      stylesDocs = getStylesDocs(stylesSrc);
    } catch (e) {}

    return { docs, stylesDocs };
  }

  render () {
    const { classes, docs, stylesDocs } = this.props;

    return (
      <div>
        <PageHeader>{docs.displayName} API</PageHeader>

        <Markdown
          className={classes.description}
          source={docs.description}
          renderers={{
            paragraph: ({ children }) => (
              <Typography type="lead">{children}</Typography>
            ),
          }}
        />

        {docs.props && (
          <section className={classes.section}>
            <Typography type="h500" className={classes.sectionHeader}>
              Props API
            </Typography>
            <PropsTable propsList={docs.props} />
          </section>
        )}

        {stylesDocs && stylesDocs.length > 0 && (
          <section className={classes.section}>
            <Typography type="h500" className={classes.sectionHeader}>
              CSS API
            </Typography>
            <StylesTable stylesList={stylesDocs} />
          </section>
        )}
      </div>
    );
  }
}

const enhance = compose(
  withRouter,
  withStyles(styles)
);
export default enhance(API);
