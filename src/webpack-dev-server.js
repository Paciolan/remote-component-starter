/**
 * webpack-dev-server entry point for debugging.
 * This file is not bundled with the library during the build process.
 */
import base, { withTheme } from "@paciolan/pac-theme-base";
import { RemoteComponent } from "@paciolan/remote-component";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import LocalComponent from "./index.js";

// different paths for localhost vs s3
const url =
  process.env.NODE_ENV === "development" ? "/dist/main.js" : "main.js";

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

const Component = props =>
  process.env.NODE_ENV === "development"
    ? <LocalComponent {...props} />
    : <RemoteComponent url={url} {...props} />; // prettier-ignore

const App = () => (
  <ThemeProvider theme={theme}>
    <Component name="Webpack" />
  </ThemeProvider>
);

ReactDOM.render(<App />, node);
