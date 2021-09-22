import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";
import pkg from './package.json';
import { MDXProvider } from "@mdx-js/react";
import Content from './src/Content.mdx'
import { SubHeader} from "./src//SubHeader"


const components = {
	h1: props => <h1 style={{color: 'blue'}} {...props} />,
	SubHeader: SubHeader
      }

const markup = () => `
<!DOCTYPE html>
<html lang="fi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Demo page</title>
  </head>

  <body>
    <div data-yle-vis-id="${pkg.name}">
    ${ReactDOMServer.renderToString(<MDXProvider components={components}>
    <Content />
  </MDXProvider>)} 
    </div>
    <script src="./index.js" type="module"></script>
  </body>
</html>
`
render();
function render() {
  let prettyHtml = prettier.format(markup(), { parser: "html" });
  let outputFile = "./output.html";
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

