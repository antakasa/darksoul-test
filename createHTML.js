import * as fs from "fs";
import React, {useContext} from "react";
import ReactDOMServer from "react-dom/server";
import pkg from "./package.json";
import { ServerStyleSheet } from "styled-components";
const minify = require("@node-minify/core");
const htmlMinifier = require("@node-minify/html-minifier");
import { App } from "./src/App";
import fetch from 'node-fetch';
import Context from "./Context";

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

const sheet = new ServerStyleSheet();

const markup = (initialData, styleTags, html) => `<!DOCTYPE html>
<html lang="fi">
	<head>
		<meta charset="UTF-8" />
    <meta name="robots" content="noindex, nofollow" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Demo page</title>
	</head>
	<body>${styleTags}${initialData}
		<div id="app" class="ist" data-yle-vis-id="${pkg.name}">${html}</div>
		<script src="./index.js" type="module"></script>
	</body>
</html>`;

render();
async function render() {
  const window = {};

  try {

    const contextValue = { requests: [] };
    
    ReactDOMServer.renderToString(
      <Context.Provider value={contextValue}> 
      <App /></Context.Provider>
    );

    await Promise.all(contextValue.requests);
    delete contextValue.requests;


    let initialData = `<script>window["${pkg.name}-initial-data"] = ${JSON.stringify(contextValue)};</script>`

    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <Context.Provider value={contextValue}>
        <App />
        </Context.Provider>
      )
    );
    const styleTags = sheet.getStyleTags(); 
    let outputFile = "./darksoul.html";
    fs.writeFileSync(outputFile, markup(initialData, styleTags, html));
    console.log(`Wrote ${outputFile}`);
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    sheet.seal();
  }
}
