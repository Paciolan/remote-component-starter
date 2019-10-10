/**
 * webpack-dev-server entry point for debugging.
 * This file is not bundled with the library during the build process.
 */
import base, { withTheme } from "@paciolan/pac-theme-base";
import { RemoteComponent } from "@paciolan/remote-component";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

const node = document.getElementById("app");

const colors = {
  orange: "#ffa500"
};

const theme = withTheme(base).extendWith({
  colors,
  typography: {
    title: {
      color: colors.orange
    }
  }
});

const Component = props => <RemoteComponent url={url} {...props} />;

const App = () => (
  <ThemeProvider theme={theme}>
    <Component name="Webpack" />
  </ThemeProvider>
);

// different paths for localhost vs s3
const url =
  global.location.hostname === "localhost" ? "/dist/main.js" : "main.js";

ReactDOM.render(<App />, node);
