/**
 * Entry point for the project.
 *
 * @param {HTMLElement} root Root element.
 * @param {Object} parameters Visualisation parameters.
 */
import React from "react";
import { hydrate, render } from "react-dom";
import { App } from "./App";

export default (root, parameters) => {
  window.plusFeature = {
    dark: { bg: "black", color: "white", color2: "white" },
    light: { bg: "black", color: "white", color2: "white" },
  };

  hydrate(
    <App root={root} />,
    root
  );
};
