import propTypes from "prop-types";
import React from "react";
import { Title } from "./components/Title";

export const App = ({ name }) => {
  return <Title>Hello {name}!</Title>;
};

App.propTypes = {
  name: propTypes.string
};

App.defaultProps = {
  name: "World"
};
