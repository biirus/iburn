import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "react-jss";

// components
import DefaultLayout from "../layout/Default";

// iburn
import CssReset from "iburn/components/Reset";
import theme from "iburn/theme";

export default class MyApp extends App {
  static async getInitialProps (props) {
    const { Component, ctx } = props;

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
        <DefaultLayout>
          <Container>
            <CssReset />
            <Component {...pageProps} />
          </Container>
        </DefaultLayout>
      </ThemeProvider>
    );
  }
}
