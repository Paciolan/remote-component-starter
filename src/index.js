/**
 * Entrypoint of the Remote Component.
 */
import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { get } from "./lib/get";

const Title = styled.h1(props => get(["theme", "typography", "title"], props));

const RemoteComponent = ({ name }) => {
  return <Title>Hello {name}!</Title>;
};

RemoteComponent.propTypes = {
  name: propTypes.string
};

RemoteComponent.defaultProps = {
  name: "World"
};

export default RemoteComponent;
