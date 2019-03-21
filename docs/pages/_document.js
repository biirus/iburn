import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import {
  SheetsRegistry,
  JssProvider,
  createGenerateClassName,
  ThemeProvider
} from "react-jss";

import theme from "iburn/theme";

export default class JssDocument extends Document {
  static async getInitialProps (ctx) {
    const registry = new SheetsRegistry();
    const generateClassName = createGenerateClassName();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <JssProvider
            registry={registry}
            generateClassName={generateClassName}
          >
            <ThemeProvider theme={theme}>
              <App {...props} />
            </ThemeProvider>
          </JssProvider>
        ),
      });

    let props = await Document.getInitialProps(ctx);
    props.registry = registry;

    return props;
  }

  render () {
    return (
      <html>
        <Head>
          <style id="server-side-styles">
            {this.props.registry.toString()}
          </style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
