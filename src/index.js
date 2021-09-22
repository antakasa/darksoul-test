/**
 * Entry point for the project.
 *
 * @param {HTMLElement} root Root element.
 * @param {Object} parameters Visualisation parameters.
 */
import React from "react";
import { render } from "react-dom";
import { MDXProvider } from "@mdx-js/react";
import Content from './Content.mdx'
import { SubHeader} from "./SubHeader"
import ReactDOMServer from 'react-dom/server';
//ss
const components = {
  h1: props => <h1 onClick={() => alert("mooooiii")} style={{color: 'blue'}} {...props} />,
  SubHeader: SubHeader
}

export default (root, parameters) => {
  console.log(ReactDOMServer.renderToString(<MDXProvider components={components}>
    <Content />
  </MDXProvider>))
  render(
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>,
    root
  );
};
