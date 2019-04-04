/**
 * Entrypoint of the Remote Component.
 */
import React from "react";
import propTypes from "prop-types";

const RemoteComponent = ({ name }) => {
  return <div>Hello {name}!</div>;
};

RemoteComponent.propTypes = {
  name: propTypes.string
};

RemoteComponent.defaultProps = {
  name: "World"
};

export default RemoteComponent;
