import React from "react";
import App, { Container } from "next/app";
import {
  SheetsRegistry,
  JssProvider,
  ThemeProvider,
  createGenerateClassName
} from "react-jss";

import theme from "../../src/theme";

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = {};

    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(ctx));
    }

    return { pageProps };
  }

  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  constructor (props) {
    super(props);

    this.pageContext = {
      theme,
      sheetsManager: new Map(),
      sheetsRegistry: new SheetsRegistry(),
      generateClassName: createGenerateClassName(),
    };
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            {/* <CssBaseline /> */}

            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </ThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}
