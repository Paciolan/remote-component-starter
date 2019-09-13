/**
 * webpack-dev-server entry point for debugging.
 * This file is not bundled with the library during the build process.
 */
import React from "react";
import ReactDOM from "react-dom";
import { RemoteComponent } from "@paciolan/remote-component";

const node = document.getElementById("app");

// different paths for localhost vs s3
const url =
  global.location.hostname === "localhost" ? "/dist/toggle.js" : "toggle.js";

const Component = props => <RemoteComponent url={url} {...props} />;

ReactDOM.render(<Component />, node);
