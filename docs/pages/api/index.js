import React from "react";

import withStyles from "react-jss";
import styles from "./styles";

import ReactMarkdown from "react-markdown";
import { parse } from "react-docgen";

import Typography from "iburn/components/Typography";
import PageHeader from "iburn/components/Page/Header";
import PropsTable from "docs/components/PropsTable";
import StylesTable from "docs/components/StylesTable";

import getStylesDocs from "docs/lib/get-styles-docs";

class API extends React.Component {
  static async getInitialProps (props) {
    const { component } = props.query;

    const codeSrc = require(`!!raw-loader!iburn/components/${component}`);
    const stylesSrc = require(`!!raw-loader!iburn/components/${component}/styles`);

    const docs = parse(codeSrc);
    const stylesDocs = getStylesDocs(stylesSrc);

    return { docs, stylesDocs };
  }

  render () {
    const { classes, docs, stylesDocs } = this.props;

    console.log(docs);

    return (
      <div>
        <PageHeader>{docs.displayName} API</PageHeader>

        <ReactMarkdown
          className={classes.description}
          source={docs.description}
          renderers={{
            paragraph: ({ children }) => (
              <Typography type="lead">{children}</Typography>
            ),
          }}
        />

        <section className={classes.section}>
          <Typography type="h500" className={classes.sectionHeader}>
            Props API
          </Typography>
          <PropsTable propsList={docs.props} />
        </section>

        <section className={classes.section}>
          <Typography type="h500" className={classes.sectionHeader}>
            CSS API
          </Typography>
          <StylesTable stylesList={stylesDocs} />
        </section>
      </div>
    );
  }
}

const enhance = withStyles(styles);
export default enhance(API);
