import React from "react";
import { ThemeProvider } from "react-jss";

import theme from "../src/theme";
import Reset from "../src/components/Reset";

export default props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Reset />
      {props.children}
    </React.Fragment>
  </ThemeProvider>
);
