import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "react-jss";

import CssReset from "../../src/components/Reset";
import theme from "../../src/theme";

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#server-side-styles");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <CssReset />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
