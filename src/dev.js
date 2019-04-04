/**
 * Application entry point for debugging and running webpack-dev-server.
 * This file is not bundled with the library during the build process.
 */
import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import Component from "./";

const node = document.getElementById("app");

ReactDOM.render(<Component />, node);
