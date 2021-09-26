// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jwXKR":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "b824fde42f2f646a";
module.bundle.HMR_BUNDLE_ID = "f757705d4f1453a1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hXW5D":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var fs = _interopRequireWildcard(require("fs"));
var _react = _interopRequireWildcard(require("react"));
var _server = _interopRequireDefault(require("react-dom/server"));
var _package = _interopRequireDefault(require("./package.json"));
var _styledComponents = require("styled-components");
var _App = require("./src/App");
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _Context = _interopRequireDefault(require("./Context"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
var minify = require("@node-minify/core");
var htmlMinifier = require("@node-minify/html-minifier");
if (!globalThis.fetch) globalThis.fetch = _nodeFetch.default;
var sheet = new _styledComponents.ServerStyleSheet();
var markup = function markup1(initialData, styleTags, html) {
    return "<!DOCTYPE html>\n<html lang=\"fi\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n\t\t<title>Demo page</title>\n\t</head>\n\t<body>".concat(styleTags).concat(initialData, "\n\t\t<div id=\"app\" class=\"ist\" data-yle-vis-id=\"").concat(_package.default.name, "\">").concat(html, "</div>\n\t\t<script src=\"./index.js\" type=\"module\"></script>\n\t</body>\n</html>");
};
render();
function render() {
    return _render.apply(this, arguments);
}
function _render() {
    _render = _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee() {
        var window, contextValue, initialData, html, styleTags, outputFile;
        return _regenerator.default.wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    window = {
                    };
                    _context.prev = 1;
                    contextValue = {
                        requests: []
                    };
                    _server.default.renderToString(/*#__PURE__*/ _react.default.createElement(_Context.default.Provider, {
                        value: contextValue
                    }, /*#__PURE__*/ _react.default.createElement(_App.App, null)));
                    _context.next = 6;
                    return Promise.all(contextValue.requests);
                case 6:
                    delete contextValue.requests;
                    initialData = "<script>window[\"".concat(_package.default.name, "-initial-data\"] = ").concat(JSON.stringify(contextValue), ";</script>");
                    html = _server.default.renderToString(sheet.collectStyles(/*#__PURE__*/ _react.default.createElement(_Context.default.Provider, {
                        value: contextValue
                    }, /*#__PURE__*/ _react.default.createElement(_App.App, null))));
                    styleTags = sheet.getStyleTags();
                    outputFile = "./output.html";
                    fs.writeFileSync(outputFile, markup(initialData, styleTags, html));
                    console.log("Wrote ".concat(outputFile));
                    _context.next = 18;
                    break;
                case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](1);
                    // handle error
                    console.error(_context.t0);
                case 18:
                    _context.prev = 18;
                    sheet.seal();
                    return _context.finish(18);
                case 21:
                case "end":
                    return _context.stop();
            }
        }, _callee, null, [
            [
                1,
                15,
                18,
                21
            ]
        ]);
    }));
    return _render.apply(this, arguments);
}

},{"./package.json":"B5dR2","./src/App":"l9sPX","./Context":"2nNza"}],"B5dR2":[function(require,module,exports) {
"use strict";
module.exports = JSON.parse("{\"name\":\"2021-09-mdx-test\",\"license\":\"MIT\",\"browserslist\":[\">0.25% in FI\",\"last 1 chrome version\",\"last 1 firefox version\",\"Firefox ESR\",\"not op_mini all\",\"not dead\"],\"private\":true,\"yleDataviz\":{\"externalContent\":false},\"scripts\":{\"start\":\"cross-var cross-env NODE_ENV=development APP_NAME=$npm_package_name WATCHING=D parcel *.html\",\"gitrepo\":\"cross-var hub create -p Yleisradio/lusi-dataviz-$npm_package_name\",\"confgenerate\":\"dataviz-deploy generate --dir build --exclude *.es6.js\",\"createhtml\":\"parcel watch createHTML.js --target node\",\"deploy\":\"npm run build && dataviz-deploy sync lusi $npm_package_name && cross-var echo \\\"https://lusi-dataviz.ylestatic.fi/$npm_package_name\\\"\",\"deploy:test\":\"npm run build:test && dataviz-deploy sync lusi-test $npm_package_name && cross-var echo \\\"https://lusi-dataviz.test.ylestatic.fi/$npm_package_name\\\"\",\"build\":\"cross-var cross-env NODE_ENV=production APP_NAME=$npm_package_name parcel build index.html --target legacy --public-url https://antakasa.github.io/astro-test-gh/\",\"build:test\":\"cross-var cross-env NODE_ENV=production APP_NAME=$npm_package_name parcel build index.html --public-url https://lusi-dataviz.test.ylestatic.fi/$npm_package_name/\",\"prebuild\":\"rimraf build\",\"prebuild:test\":\"rimraf build\"},\"engines\":{\"node\":\"14\"},\"devDependencies\":{\"@babel/plugin-proposal-object-rest-spread\":\"^7.15.6\",\"@babel/plugin-proposal-optional-chaining\":\"^7.14.5\",\"@babel/preset-env\":\"^7.15.6\",\"@babel/preset-react\":\"^7.14.5\",\"@mdx-js/react\":\"^1.0.0\",\"@parcel/babel-plugin-transform-runtime\":\"^2.0.0-nightly.1823\",\"@parcel/babel-preset-env\":\"^2.0.0-alpha.3\",\"@parcel/transformer-image\":\"^2.0.0-rc.0\",\"@parcel/transformer-mdx\":\"^2.0.0-rc.0\",\"@parcel/transformer-sass\":\"^2.0.0-rc.0\",\"autoprefixer\":\"^10.3.2\",\"babel-plugin-styled-components\":\"^1.13.2\",\"cross-env\":\"^5.2.1\",\"cross-var\":\"^1.1.0\",\"parcel\":\"^2.0.0-rc.0\",\"parcel-namer-es6\":\"file:plugins/parcel-namer-es6\",\"parcel-reporter-runcreatehtml\":\"file:plugins/parcel-reporter-runcreatehtml\",\"parcel-transformer-mdx-frontmatter\":\"file:plugins/parcel-transformer-mdx-frontmatter\",\"postcss\":\"^8.3.6\",\"postcss-prefix-selector\":\"^1.12.0\",\"posthtml\":\"^0.16.5\",\"posthtml-expressions\":\"^1.9.0\",\"prettier\":\"^2.4.1\",\"rimraf\":\"^3.0.2\"},\"targets\":{\"legacy\":{\"includeNodeModules\":true,\"distDir\":\"./build\",\"engines\":{\"browsers\":\"> 0.5%, last 2 versions, not dead\"}},\"default\":{\"context\":\"browser\",\"distDir\":\"./build\",\"includeNodeModules\":true},\"node\":{\"context\":\"node\",\"engines\":{\"node\":\"15\"},\"distDir\":\".\",\"includeNodeModules\":false,\"outputFormat\":\"esmodule\"}},\"dependencies\":{\"@node-minify/core\":\"^6.2.0\",\"@node-minify/html-minifier\":\"^6.2.0\",\"markdown-to-jsx\":\"^7.1.3\",\"node-fetch\":\"^2.0.0\",\"prop-types\":\"^15.7.2\",\"react\":\"^17.0.2\",\"react-dom\":\"^17.0.2\",\"stringify-object\":\"^4.0.0\",\"styled-components\":\"^5.3.1\"}}");

},{}],"l9sPX":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@mdx-js/react");
var _Content = _interopRequireDefault(require("./Content.mdx"));
var _darksoul = _interopRequireDefault(require("./darksoul.md"));
var _SubHeader = require("./SubHeader");
var _server = _interopRequireDefault(require("react-dom/server"));
var _Header2 = _interopRequireDefault(require("./plus-feature-components/Header/Header"));
require("./basics.css");
require("./styles.css");
require("./variables.css");
require("./yle.css");
var _darkSoulHeroText = _interopRequireDefault(require("./plus-feature-components/Fynd/darkSoulHeroText"));
var _scrollingVideo = _interopRequireDefault(require("./plus-feature-components/Fynd/scrollingVideo"));
var _darksoulShareButtons = require("./plus-feature-components/Fynd/darksoulShareButtons");
var _AuthorBox2 = _interopRequireDefault(require("./plus-feature-components/AuthorBox/AuthorBox"));
var _darkSoulSubheader = _interopRequireDefault(require("./plus-feature-components/Fynd/darkSoulSubheader"));
var _PictureTag = _interopRequireDefault(require("./plus-feature-components/VisualComponents/Picture/PictureTag"));
var _dataHandleFunctions = require("./lib/dataHandleFunctions");
var _Context = _interopRequireDefault(require("../Context"));
var _Scrolly = _interopRequireDefault(require("./plus-feature-components/Scrolly/Scrolly"));
var _darkSoulNewChapter = require("./plus-feature-components/Fynd/darkSoulNewChapter");
var _darksoulSourceList = require("./plus-feature-components/Fynd/darksoulSourceList");
var _excluded = [
    "children"
];
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty2.default(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
console.log(_darksoul.default);
var useServerEffect = function useServerEffect1(_ref) {
    var key = _ref.key, effect = _ref.effect;
    // This is nothing more than a PictureTag from Plus-feature
    // BUT it tries to find data that is fetched server-side
    var context = _react.useContext(_Context.default);
    var _useState = _react.useState(context[key] || null), _useState2 = _slicedToArray2.default(_useState, 2), data = _useState2[0], setData = _useState2[1];
    _react.useEffect(function() {
        if (data || typeof window === "undefined") return; //console.log("Could not find server rendered data in Client for " + key)
        _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee() {
            var data1;
            return _regenerator.default.wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        _context.next = 2;
                        return effect();
                    case 2:
                        data1 = _context.sent;
                        setData(data1);
                    case 4:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        }))();
    }, []);
    if (context.requests) context.requests.push(effect().then(function(data1) {
        context[key] = data1;
    }));
    return data;
};
var DataProvider = function DataProvider1(props) {
    var effect = function effect1() {
        return _dataHandleFunctions.formatFetchedData({
            type: props.type,
            value: props.kuvateksti,
            id: props.id,
            style: props.style
        });
    };
    var data = useServerEffect({
        key: props.id,
        effect: effect
    });
    console.log(props);
    if (props.children) return data && props.children(data);
    return data;
};
var components = {
    // Everything in components: <Object> is passed to MDX-file, where you can use them natively w/o importing them.
    // This results with less code boilerplate in MDX file.
    wrapper: function wrapper(_ref3) {
        var children = _ref3.children, props = _objectWithoutProperties2.default(_ref3, _excluded);
        return(/*#__PURE__*/ // Adds classname "yle__article__paragraph fynd" for every p-tag.
        // TODO: This should be solved somehow else.
        _react.default.createElement(_react.default.Fragment, null, children.map(function(e, i) {
            var _e$props;
            return ((_e$props = e.props) === null || _e$props === void 0 ? void 0 : _e$props.mdxType) === "p" ? /*#__PURE__*/ _react.default.cloneElement(e, {
                className: "yle__article__paragraph fynd",
                key: i
            }) : e;
        })));
    },
    SubHeader: _SubHeader.SubHeader,
    Header: function Header(props) {
        // We can pass simpler versions of complex components
        return(/*#__PURE__*/ _react.default.createElement(_Header2.default, {
            articlePublishedText: "",
            soundOn: props.soundOn,
            setSound: props.setSound,
            data: [
                {
                    type: "otsikko",
                    value: props.otsikko,
                    style: {
                        sisältö: "",
                        artikkelitausta: props.artikkelitausta
                    }
                },
                {
                    type: "ingressi",
                    value: props.ingressi,
                    style: {
                        artikkelitausta: props.artikkelitausta
                    }
                }
            ]
        }, props.children));
    },
    DarkSoulHeroText: _darkSoulHeroText.default,
    ScrollingVideo: _scrollingVideo.default,
    DarkSoulShareButtons: _darksoulShareButtons.DarkSoulShareButtons,
    AuthorBox: function AuthorBox(props) {
        return(/*#__PURE__*/ _react.default.createElement("div", {
            className: "tekijatboksi centered"
        }, /*#__PURE__*/ _react.default.createElement(_AuthorBox2.default, props)));
    },
    DarkSoulSubheader: _darkSoulSubheader.default,
    AloitusKappale: _darkSoulNewChapter.DarkSoulNewChapter,
    Kuva: function Kuva(props) {
        return(/*#__PURE__*/ // DataProvider gets IMS data etc.
        _react.default.createElement(DataProvider, _extends2.default({
        }, props, {
            type: "kuva"
        }), function(data) {
            return(/*#__PURE__*/ _react.default.createElement(_PictureTag.default, {
                mobileMediaData: data.urls[1] || null,
                desktopMediaData: data.urls[0],
                positionAbsolute: false,
                id: data.id,
                mediaText: data.value,
                mediaStyling: data.style,
                altText: data.alttext
            }));
        }));
    },
    LahdeLuettelo: _darksoulSourceList.DarksoulSourceList,
    Skrolli: function Skrolli(props) {
        if (!Array.isArray(props.children)) return null;
        console.log(props.tyylit); // DataProvider gets IMS data etc. for every child elemet <Object>. We also extend every child with style property
        var datas = props.children.map(function(e) {
            return DataProvider(_objectSpread(_objectSpread({
            }, e), {
            }, {
                style: props.tyylit
            }));
        });
        var nullsInData = datas.some(function(el) {
            return el === null;
        });
        return !nullsInData && /*#__PURE__*/ _react.default.createElement(_Scrolly.default, {
            scrollyData: datas,
            scrollyIndex: 1
        });
    }
};
var App = function App1() {
    if (typeof window !== "undefined") {
        // Client side
        // We read some data from global window object.
        var initialData = window["".concat(process.env.APP_NAME, "-initial-data")];
        return(/*#__PURE__*/ _react.default.createElement(_Context.default.Provider, {
            value: initialData || {
            }
        }, /*#__PURE__*/ _react.default.createElement(_react2.MDXProvider, {
            components: components
        }, /*#__PURE__*/ _react.default.createElement(_darksoul.default, null))));
    } else // Server side
    return(/*#__PURE__*/ _react.default.createElement(_react2.MDXProvider, {
        components: components
    }, /*#__PURE__*/ _react.default.createElement(_darksoul.default, null)));
};
exports.App = App;

},{"./Content.mdx":"jnco6","./SubHeader":"8O2WD","./plus-feature-components/Header/Header":"2SNCW","./basics.css":"lgSAr","./styles.css":"6xvMG","./variables.css":"iWQvO","./yle.css":"69fjZ","./plus-feature-components/Fynd/darkSoulHeroText":"8Wz8L","./plus-feature-components/Fynd/scrollingVideo":"giCOI","./plus-feature-components/Fynd/darksoulShareButtons":"alsUl","./plus-feature-components/AuthorBox/AuthorBox":"7tPSL","./plus-feature-components/Fynd/darkSoulSubheader":"cVMnU","./plus-feature-components/VisualComponents/Picture/PictureTag":"6X7Hf","./lib/dataHandleFunctions":"gKZyW","../Context":"2nNza","./plus-feature-components/Scrolly/Scrolly":"9GYPM","./plus-feature-components/Fynd/darkSoulNewChapter":"45X8b","./plus-feature-components/Fynd/darksoulSourceList":"hdp3E","./darksoul.md":"i3VQM"}],"jnco6":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MDXContent;
exports.frontMatter = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@mdx-js/react");
var _excluded = [
    "components"
];
/* @jsxRuntime classic */ /* @jsx mdx */ var frontMatter = {
    hello: 'jepulisjepjep',
    test: 'tämä toimii aivan perkeleen hyvin huhuhuhuhuhuhuh'
};
exports.frontMatter = frontMatter;
var makeShortcode = function makeShortcode1(name) {
    return function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return _react2.mdx("div", props);
    };
};
var SubHeader = makeShortcode("SubHeader");
var layoutProps = {
    frontMatter: frontMatter
};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
    var components = _ref.components, props = _objectWithoutProperties2.default(_ref, _excluded);
    return _react2.mdx(MDXLayout, _extends2.default({
    }, layoutProps, props, {
        components: components,
        mdxType: "MDXLayout"
    }), _react2.mdx("p", null, "const testvar = \"hetttt\";"), _react2.mdx("h1", null, "Hello, world!"), _react2.mdx(SubHeader, {
        test: "\xF6k\xF6lkl\xF6kagsdgasd",
        mdxType: "SubHeader"
    }), _react2.mdx("p", null, "This is MDX!fdsdddffdwrwreasdfasdf "));
}
MDXContent.isMDXComponent = true;

},{}],"8O2WD":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SubHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var SubHeader = function SubHeader1(_ref) {
    var test = _ref.test;
    return(/*#__PURE__*/ _react.default.createElement("h2", null, "adsf"));
};
exports.SubHeader = SubHeader;

},{}],"2SNCW":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));
var s = _interopRequireWildcard(require("./Header.styled"));
var ss = _interopRequireWildcard(require("../App.styled"));
var _HeaderVisuals = _interopRequireDefault(require("./HeaderVisuals/HeaderVisuals"));
var _ShareButtons = _interopRequireDefault(require("./ShareButtons/ShareButtons"));
var _ProgressBar = _interopRequireDefault(require("../VisualComponents/VisualHelpers/ProgressBar"));
var _errorFunctions = require("../../lib/errorFunctions");
var _styleHandler = require("../../lib/styleHandler");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty2.default(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}
function Header(props) {
    var data = props.data, articlePublishedText = props.articlePublishedText, eskoHeadline = props.eskoHeadline, eskoLead = props.eskoLead, tag = props.tag, tagLink = props.tagLink, uutisetOrUrheilu = props.uutisetOrUrheilu, soundOn = props.soundOn, setSound = props.setSound; //data contains rows "otsikko", "ingressi", "tekijat"
    var ingressi = data.filter(function(d) {
        return d.type == "ingressi";
    })[0];
    ingressi = ingressi !== undefined ? ingressi.value : _errorFunctions.pushErrorTextToDOM("#ERR: Ingressiä ei löydetty");
    var otsikko = data.filter(function(d) {
        return d.type == "otsikko";
    })[0];
    var otsikkoValue = otsikko !== undefined ? otsikko.value : _errorFunctions.pushErrorTextToDOM("#ERR: Otsikkoa ei löydetty");
    var mediaStyling = otsikko.style;
    var styleOtsikko = _styleHandler.styleHandlerWithDefaults("otsikko", mediaStyling); ////////////////////////////
    //CHANGE ARTICLE BG COLOR///
    ////////////////////////////
    var articleContent = typeof document !== "undefined" ? document.querySelector(".yle__article__content") : null;
    if (articleContent !== null && styleOtsikko.backgroundColor[0] !== "white") {
        function overrideColors(query, style, color) {
            var els = document.querySelectorAll(query);
            els.forEach(function(el) {
                return el.style[style] = color;
            });
        }
        var _window = _window || {
        }; //if custom article bg color then override dark scheme
        var newBg = styleOtsikko.backgroundColor[0];
        articleContent.style["backgroundColor"] = newBg;
        if (styleOtsikko.darkmode[0] == "off" && _window.plusFeature !== {
            dark: {
                bg: newBg,
                color: "black",
                color2: "black"
            },
            light: {
                bg: newBg,
                color: "black",
                color2: "black"
            }
        }) {
            _window.plusFeature = {
                dark: {
                    bg: newBg,
                    color: "black",
                    color2: "black"
                },
                light: {
                    bg: newBg,
                    color: "black",
                    color2: "black"
                }
            };
            overrideColors(".yle__article__paragraph", "color", "black");
            overrideColors(".yle__article__link", "color", "black");
            overrideColors(".yle__article__heading", "color", "black");
            overrideColors(".yle__article__list--ul li", "color", "black"); //paragraphs.style.color = "black";
        //IF DARK MODE SET ON
        } else if (styleOtsikko.darkmode[0] == "on" && _window.plusFeature !== {
            dark: {
                bg: newBg,
                color: "white",
                color2: "white"
            },
            light: {
                bg: newBg,
                color: "white",
                color2: "white"
            }
        }) {
            _window.plusFeature = {
                dark: {
                    bg: newBg,
                    color: "white",
                    color2: "white"
                },
                light: {
                    bg: newBg,
                    color: "white",
                    color2: "white"
                }
            };
            overrideColors(".yle__article__paragraph", "color", "white");
            overrideColors(".yle__article__link", "color", "white");
            overrideColors(".yle__article__heading", "color", "white");
            overrideColors(".yle__article__list--ul li", "color", "white");
        } //set app background if custom bg color
        var appContainer = document.querySelector("#app");
        if (appContainer !== null && appContainer.style["background-color"] !== newBg) appContainer.style["background-color"] = newBg;
    }
    var headerVisualsProps = {
        headerChildren: props.children
    }; //Case id-column is empty and urls is undefined - push manual class to header
    if (otsikko.urls == undefined) headerVisualsProps = _objectSpread(_objectSpread({
    }, headerVisualsProps), {
    }, {
        mediaStyling: mediaStyling,
        emptyHeader: true
    }); //make standard header visuals
    else {
        var mediaFormat = otsikko.mediaFormat;
        var desktopMediaData = otsikko.urls[0] !== undefined ? otsikko.urls[0] : _errorFunctions.pushErrorTextToDOM("#ERR: Ongelma headerin deskarikuvassa - " + otsikko.id);
        var mobileMediaData = otsikko.urls[1] !== undefined ? otsikko.urls[1] : _errorFunctions.pushErrorTextToDOM("#ERR: Ongelma headerin mobiilikuvassa. Tarkista rajaustiedot " + otsikko.id);
        var altText = otsikko.altText || otsikko.alttext;
        headerVisualsProps = _objectSpread(_objectSpread({
        }, headerVisualsProps), {
        }, {
            desktopMediaData: desktopMediaData,
            mobileMediaData: mobileMediaData,
            mediaFormat: mediaFormat,
            mediaStyling: mediaStyling,
            emptyHeader: false,
            altText: altText,
            soundOn: soundOn,
            setSound: setSound,
            headerChildren: props.children
        });
    }
    var progressBar = Object.keys(mediaStyling).includes("etenemispalkki") ? mediaStyling.etenemispalkki[0] : false;
    var colors = {
    };
    if (typeof window === "undefined") colors.plusFeature = {
        dark: {
            bg: "black",
            color: "white",
            color2: "white"
        },
        light: {
            bg: "black",
            color: "white",
            color2: "white"
        }
    };
    else colors.plusFeature = window.plusFeature;
    return(/*#__PURE__*/ _react.default.createElement(s.HeaderContainer, null, /*#__PURE__*/ _react.default.createElement(_HeaderVisuals.default, headerVisualsProps), /*#__PURE__*/ _react.default.createElement(ss.StyledContentContainer, null, /*#__PURE__*/ _react.default.createElement(s.LeadContainer, {
        backgroundColor: colors.plusFeature.light.bg,
        backgroundColorDark: colors.plusFeature.dark.bg
    }, /*#__PURE__*/ _react.default.createElement(s.TagLink, {
        href: tagLink
    }, /*#__PURE__*/ _react.default.createElement(s.Tag, {
        color: colors.plusFeature.light.color,
        colorDark: colors.plusFeature.dark.color
    }, tag)), /*#__PURE__*/ _react.default.createElement(s.HeaderTitle, {
        color: colors.plusFeature.light.color,
        colorDark: colors.plusFeature.dark.color,
        fontSizing: styleOtsikko.fontSize
    }, replaceAll(otsikkoValue, "&shy;", "\xAD")), /*#__PURE__*/ _react.default.createElement(s.HeaderLead, {
        color: colors.plusFeature.light.color,
        colorDark: colors.plusFeature.dark.color
    }, /*#__PURE__*/ _react.default.createElement(_markdownToJsx.default, null, ingressi)), articlePublishedText.length > 0 && /*#__PURE__*/ _react.default.createElement(s.PublishedTextContainer, {
        color: colors.plusFeature.light.color,
        colorDark: colors.plusFeature.dark.color
    }, /*#__PURE__*/ _react.default.createElement("time", null, articlePublishedText)), articlePublishedText.length > 0 && /*#__PURE__*/ _react.default.createElement(_ShareButtons.default, {
        eskoHeadline: eskoHeadline,
        eskoLead: eskoLead,
        uutisetOrUrheilu: uutisetOrUrheilu
    }))), progressBar !== false && /*#__PURE__*/ _react.default.createElement(_ProgressBar.default, {
        querySelector: "article",
        color: progressBar
    })));
}
var _default = Header;
exports.default = _default;

},{"./Header.styled":"cW5P8","../App.styled":"gt4J5","./HeaderVisuals/HeaderVisuals":"dPo3H","./ShareButtons/ShareButtons":"gr6hY","../VisualComponents/VisualHelpers/ProgressBar":"hqATt","../../lib/errorFunctions":"5684i","../../lib/styleHandler":"jiU5V"}],"cW5P8":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PublishedTextContainer = exports.HeaderLead = exports.TagLink = exports.Tag = exports.HeaderTitle = exports.LeadContainer = exports.HeaderContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _isDeviceMobile = require("../../lib/isDeviceMobile");
var HeaderContainer = _styledComponents.default.div.withConfig({
    displayName: "Headerstyled__HeaderContainer",
    componentId: "sc-1u0m3v4-0"
})([
    "position:relative;"
]);
exports.HeaderContainer = HeaderContainer;
var LeadContainer = _styledComponents.default.div.withConfig({
    displayName: "Headerstyled__LeadContainer",
    componentId: "sc-1u0m3v4-1"
})([
    "max-width:800px;background-color:",
    ";position:relative;margin:auto;margin-top:-75px;padding:16px 0px 16px;& strong{font-weight:700;}@media (prefers-color-scheme:dark){background-color:",
    ";}"
], function(props) {
    return props.backgroundColor;
}, function(props) {
    return props.backgroundColorDark;
});
exports.LeadContainer = LeadContainer;
var HeaderTitle = _styledComponents.default.h1.withConfig({
    displayName: "Headerstyled__HeaderTitle",
    componentId: "sc-1u0m3v4-2"
})([
    "position:relative;text-align:center;margin:8px auto;font-size:",
    ";font-weight:900;line-height:1.25em;width:90%;font-family:\"Yle Black\",\"Open Sans\",sans-serif;color:",
    ";@media (prefers-color-scheme:dark){color:",
    ";;}@media (max-width:",
    "px) and (orientation:",
    "){font-size:",
    ";}"
], function(props) {
    return props.fontSizing[0];
}, function(props) {
    return props.color;
}, function(props) {
    return props.colorDark;
}, _isDeviceMobile.maxWidth, _isDeviceMobile.orientation, function(props) {
    return props.fontSizing.length > 1 ? props.fontSizing[1] : props.fontSizing[0];
});
exports.HeaderTitle = HeaderTitle;
var Tag = _styledComponents.default.h5.withConfig({
    displayName: "Headerstyled__Tag",
    componentId: "sc-1u0m3v4-3"
})([
    "font-size:14px;text-align:center;font-weight:700;text-transform:uppercase;color:",
    ";@media (prefers-color-scheme:dark){color:",
    ";}"
], function(props) {
    return props.color;
}, function(props) {
    return props.colorDark;
});
exports.Tag = Tag;
var TagLink = _styledComponents.default.a.withConfig({
    displayName: "Headerstyled__TagLink",
    componentId: "sc-1u0m3v4-4"
})([
    "text-decoration:none;color:inherit;"
]);
exports.TagLink = TagLink;
var HeaderLead = _styledComponents.default.h4.withConfig({
    displayName: "Headerstyled__HeaderLead",
    componentId: "sc-1u0m3v4-5"
})([
    "font-size:20px;text-align:center;padding:0px;margin:8px auto;font-weight:300;line-height:30px;width:90%;color:",
    ";@media (prefers-color-scheme:dark){color:",
    ";}"
], function(props) {
    return props.color;
}, function(props) {
    return props.colorDark;
});
exports.HeaderLead = HeaderLead;
var PublishedTextContainer = _styledComponents.default.div.withConfig({
    displayName: "Headerstyled__PublishedTextContainer",
    componentId: "sc-1u0m3v4-6"
})([
    "color:#131415;font-size:14px;line-height:21px;font-family:\"Open Sans\",sans-serif;font-weight:400;text-align:center;margin:16px auto 8px auto;color:",
    ";@media (prefers-color-scheme:dark){color:",
    ";}"
], function(props) {
    return props.color;
}, function(props) {
    return props.colorDark;
});
exports.PublishedTextContainer = PublishedTextContainer;

},{"../../lib/isDeviceMobile":"8wcmx"}],"8wcmx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDeviceMobile = isDeviceMobile;
exports.orientation = exports.maxWidth = void 0;
var _viewportFunctions = require("./viewportFunctions");
var maxWidth = 550;
exports.maxWidth = maxWidth;
var orientation = "portrait";
exports.orientation = orientation;
function isDeviceMobile() {
    var screenWidth = _viewportFunctions.viewportSize("width");
    var screenHeight = _viewportFunctions.viewportSize("height");
    var mobile = screenHeight > screenWidth && screenWidth <= maxWidth ? true : false;
    return mobile;
}

},{"./viewportFunctions":"3INVk"}],"3INVk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.viewportSize = viewportSize;
exports.isElementInOrAboveViewport = isElementInOrAboveViewport;
exports.isElementVisibleInViewport = isElementVisibleInViewport;
exports.isVideoInViewport = isVideoInViewport;
exports.elementDistanceFromViewport = elementDistanceFromViewport;
exports.isElementFullyInViewport = isElementFullyInViewport;
exports.firstTextBoxViewportFunction = firstTextBoxViewportFunction;
exports.lastTextBoxViewportFunction = lastTextBoxViewportFunction;
exports.onlyOneTextBoxViewportFunction = onlyOneTextBoxViewportFunction;
exports.isTextBoxAlmostInViewport = isTextBoxAlmostInViewport;
exports.isElementCloseToViewport = isElementCloseToViewport;
exports.videoRelativeCloseToViewport = videoRelativeCloseToViewport;
exports.isElementFullyInViewportWithPadding = isElementFullyInViewportWithPadding;
function viewportSize(dimension) {
    if (typeof window === "undefined") return 0;
    var canUseVisualViewport = typeof visualViewport !== "undefined";
    var value;
    if (dimension == "height") value = canUseVisualViewport ? visualViewport.height : window.innerHeight;
    else if (dimension == "width") value = canUseVisualViewport ? visualViewport.width : window.innerWidth;
    return value;
}
function isElementInOrAboveViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.left >= 0 && rect.bottom <= (viewportSize("height") + rect.height || document.documentElement.clientHeight + rect.height) && rect.right <= (viewportSize("width") || document.documentElement.clientWidth);
}
function isElementVisibleInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top - viewportSize("height") <= 0;
}
function isVideoInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (viewportSize("height") || document.documentElement.clientHeight) && rect.right <= (viewportSize("width") || document.documentElement.clientWidth);
}
function elementDistanceFromViewport(el) {
    var rect = el.getBoundingClientRect();
    return Math.abs(rect.top);
}
function isElementFullyInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= rect.height * -1 && rect.left >= 0 && rect.bottom <= (viewportSize("height") || document.documentElement.clientHeight) && rect.right <= (viewportSize("width") || document.documentElement.clientWidth);
}
function firstTextBoxViewportFunction(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= rect.height * -1 && rect.left >= 0 && rect.bottom <= (viewportSize("height") * 1.3 || document.documentElement.clientHeight * 1.3) && rect.right <= (viewportSize("width") || document.documentElement.clientWidth);
}
function lastTextBoxViewportFunction(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= viewportSize("height") * -0.5 && rect.left >= 0 && rect.bottom <= (viewportSize("height") || document.documentElement.clientHeight) && rect.right <= (viewportSize("width") || document.documentElement.clientWidth);
} //use first and last textbox rules
function onlyOneTextBoxViewportFunction(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= viewportSize("height") * -0.5 && rect.left >= 0 && rect.bottom <= (viewportSize("height") * 1.3 || document.documentElement.clientHeight * 1.3) && rect.right <= (viewportSize("width") || document.documentElement.clientWidth);
}
function isTextBoxAlmostInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= rect.height * -1 && rect.left >= 0 && rect.bottom <= (viewportSize("height") + rect.height || document.documentElement.clientHeight + rect.height) && rect.right <= (viewportSize("width") || document.documentElement.clientWidth);
}
function isElementCloseToViewport(el, screenWidthBuffer) {
    var rect = el.getBoundingClientRect();
    var nearEnough;
    if (rect.left >= 0 && rect.top <= viewportSize("height") * (1 + screenWidthBuffer)) nearEnough = true;
    else if (rect.left >= 0 && Math.abs(rect.top) <= viewportSize("height") * (1 + screenWidthBuffer)) nearEnough = true;
    else nearEnough = false;
    return nearEnough;
}
function videoRelativeCloseToViewport(el, buffer) {
    var rect = el.getBoundingClientRect();
    var top = rect.top;
    var windowHeight = viewportSize("height");
    var elHeight = rect.height;
    if (rect.left >= 0 && top < windowHeight * buffer && elHeight * buffer * -1 < top) return true;
    else return false;
}
function isElementFullyInViewportWithPadding(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom - 25 <= (viewportSize("height") || document.documentElement.clientHeight) && rect.right - 25 <= (viewportSize("width") || document.documentElement.clientWidth);
}

},{}],"gt4J5":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SplashText = exports.LoadingContent = exports.SplashFull = exports.ErrorContainer = exports.Errors = exports.StyledContentContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var StyledContentContainer = _styledComponents.default.div.withConfig({
    displayName: "Appstyled__StyledContentContainer",
    componentId: "sc-1yizt7-0"
})([
    "max-width:650px;margin:0.85em auto !important;padding:0px 15px;"
]);
exports.StyledContentContainer = StyledContentContainer;
var Errors = _styledComponents.default.div.withConfig({
    displayName: "Appstyled__Errors",
    componentId: "sc-1yizt7-1"
})([
    "max-width:650px;margin:0.85em auto !important;padding:0px 15px;position:absolute;top:50%;transform:translateY(-50%);"
]);
exports.Errors = Errors;
var ErrorContainer = _styledComponents.default.div.withConfig({
    displayName: "Appstyled__ErrorContainer",
    componentId: "sc-1yizt7-2"
})([
    "max-width:650px;"
]);
exports.ErrorContainer = ErrorContainer;
var SplashFull = _styledComponents.default.div.withConfig({
    displayName: "Appstyled__SplashFull",
    componentId: "sc-1yizt7-3"
})([
    "position:fixed;height:100%;width:100%;background-color:white;top:0;left:0;visibility:visible !important;"
]);
exports.SplashFull = SplashFull;
var LoadingContent = _styledComponents.default.div.withConfig({
    displayName: "Appstyled__LoadingContent",
    componentId: "sc-1yizt7-4"
})([
    "position:absolute;font-size:24px;font-weight:400;color:black;top:40%;text-align:center;margin:auto;width:100%;"
]);
exports.LoadingContent = LoadingContent;
var SplashText = _styledComponents.default.div.withConfig({
    displayName: "Appstyled__SplashText",
    componentId: "sc-1yizt7-5"
})([
    ""
]);
exports.SplashText = SplashText;

},{}],"dPo3H":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var s = _interopRequireWildcard(require("./HeaderVisuals.styled"));
var _PictureTag = _interopRequireDefault(require("../../VisualComponents/Picture/PictureTag"));
var _VideoTag = _interopRequireDefault(require("../../VisualComponents/Video/VideoTag"));
var _SwipingFinger = _interopRequireDefault(require("../../VisualComponents/VisualHelpers/SwipingFinger"));
var _errorFunctions = require("../../../lib/errorFunctions");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
//pushes selected id or class to header
function pushContentToHeader(emptyContainer, newHeaderSelector) {
    _react.useEffect(function() {
        if (emptyContainer.current !== null) {
            var newHeaderElement = document.querySelector(newHeaderSelector);
            if (newHeaderElement !== null) {
                newHeaderElement.style["marginTop"] = "-80px";
                emptyContainer.current.appendChild(newHeaderElement);
            } else _errorFunctions.pushErrorTextToDOM("#ERR: Ei onnistuttu lisäämään sisältöä " + newHeaderSelector + " artikkelin alkuun");
        }
    }, [
        emptyContainer
    ]);
}
function HeaderVisuals(props) {
    var mediaFormat = props.mediaFormat, mobileMediaData = props.mobileMediaData, desktopMediaData = props.desktopMediaData, mediaStyling = props.mediaStyling, emptyHeader = props.emptyHeader, altText = props.altText, soundOn = props.soundOn, setSound = props.setSound;
    var emptyContainer = _react.useRef(null); //if header visual is empty then embed new class to header
    if (emptyHeader) {
        var newHeaderSelector = Object.keys(mediaStyling).includes("sisältö") ? mediaStyling.sisältö[0] : undefined;
        newHeaderSelector !== undefined && pushContentToHeader(emptyContainer, newHeaderSelector);
    }
    var showIcon = Object.keys(mediaStyling).includes("ikoni") ? mediaStyling.ikoni[0] : false;
    return(/*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, emptyHeader ? /*#__PURE__*/ _react.default.createElement(s.VisualEmptyContainer, {
        ref: emptyContainer
    }, props.headerChildren && /*#__PURE__*/ _react.default.cloneElement(props.headerChildren)) : mediaFormat == "imsImage" || mediaFormat == "webImage" ? /*#__PURE__*/ _react.default.createElement(s.VisualContainer, null, /*#__PURE__*/ _react.default.createElement(_PictureTag.default, {
        mobileMediaData: mobileMediaData,
        desktopMediaData: desktopMediaData,
        positionAbsolute: true,
        mediaStyling: mediaStyling,
        headerPicture: true,
        altText: altText
    })) : mediaFormat == "webVideo" ? /*#__PURE__*/ _react.default.createElement(s.VisualContainer, null, /*#__PURE__*/ _react.default.createElement(_VideoTag.default, {
        mobileMediaData: mobileMediaData,
        desktopMediaData: desktopMediaData,
        positionAbsolute: true,
        mediaStyling: mediaStyling,
        audioIconPosition: "20px" //video in header should be preloaded
        ,
        headerVideo: true,
        soundOn: soundOn,
        setSound: setSound
    })) : null, showIcon && /*#__PURE__*/ _react.default.createElement(_SwipingFinger.default, {
        color: showIcon
    })));
}
var _default = HeaderVisuals;
exports.default = _default;
HeaderVisuals.propTypes = {
    mediaFormat: _propTypes.default.string,
    //imsImage, webImage, webVideo 
    mobileMediaData: _propTypes.default.string,
    //mobile media url 
    desktopMediaData: _propTypes.default.string,
    //desktop media url
    mediaStyling: _propTypes.default.object,
    //array containing all styling from sheets
    emptyHeader: _propTypes.default.bool,
    //push scrolly/etc. to header 
    altText: _propTypes.default.string //alt text for search robots and screen readers
};

},{"./HeaderVisuals.styled":"fEu7l","../../VisualComponents/Picture/PictureTag":"6X7Hf","../../VisualComponents/Video/VideoTag":"lghy5","../../VisualComponents/VisualHelpers/SwipingFinger":"ggIfN","../../../lib/errorFunctions":"5684i"}],"fEu7l":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VisualEmptyContainer = exports.VisualContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var VisualContainer = _styledComponents.default.div.withConfig({
    displayName: "HeaderVisualsstyled__VisualContainer",
    componentId: "sc-1ep5v9l-0"
})([
    "position:relative;height:70vh;overflow:hidden;width:100%;"
]);
exports.VisualContainer = VisualContainer;
var VisualEmptyContainer = _styledComponents.default.div.withConfig({
    displayName: "HeaderVisualsstyled__VisualEmptyContainer",
    componentId: "sc-1ep5v9l-1"
})([
    "position:relative;height:auto;width:100%;"
]);
exports.VisualEmptyContainer = VisualEmptyContainer;

},{}],"6X7Hf":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var s = _interopRequireWildcard(require("./PictureTag.styled.js"));
var ss = _interopRequireWildcard(require("../SharedVisualStyles.styled.js"));
var _isDeviceMobile = require("../../../lib/isDeviceMobile");
var _isUsingApp = require("../../../lib/isUsingApp");
var _styleHandler = require("../../../lib/styleHandler");
var _pictureScrollFunctions = require("./pictureScrollFunctions");
var _errorFunctions = require("../../../lib/errorFunctions");
var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
//Helps to description text under picture
function returnPictureWidth(ref, pictureWidth, setPictureWidth) {
    var calcPictureWidth = function calcPictureWidth1(ref1) {
        if (ref1.current !== null) {
            var picContainer = ref1.current.querySelector('img');
            var newPicWidth = picContainer.getBoundingClientRect().width;
            newPicWidth == 0 && setTimeout(function() {
                return calcPictureWidth1(ref1);
            }, 500);
            newPicWidth !== pictureWidth && setPictureWidth(newPicWidth);
        }
    };
    _react.useEffect(function() {
        var timeoutId = null;
        var resizeListener = function resizeListener1() {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId); // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(function() {
                return calcPictureWidth(ref);
            }, 150);
        };
        if (typeof window !== "undefined") {
            window.addEventListener("resize", resizeListener, {
                passive: true
            });
            setTimeout(function() {
                return calcPictureWidth(ref);
            }, 500); //console.log(initialRun)
            //initialRun && setTimeout(() => calcPictureWidth(ref),1500)
            return function() {
                return window.removeEventListener("resize", resizeListener);
            };
        }
    }, [
        pictureWidth
    ]);
}
function PictureTag(props) {
    var mobileMediaData = props.mobileMediaData, desktopMediaData = props.desktopMediaData, positionAbsolute = props.positionAbsolute, id = props.id, mediaText = props.mediaText, mediaStyling = props.mediaStyling, showScrollyMedia = props.showScrollyMedia, altText = props.altText, headerPicture = props.headerPicture;
    var pictureTag = _react.useRef(null);
    var pictureTagRelative = _react.useRef(null);
    var _useState = _react.useState(undefined), _useState2 = _slicedToArray2.default(_useState, 2), pictureWidth = _useState2[0], setPictureWidth = _useState2[1]; //when using app, yle menu takes space 50px
    var usingApp = _isUsingApp.isUsingApp();
    var menuHeight = 50; //for maxWidth and left - padding when object-fit: scale down
    var widthPadding = 20;
    var styleThisEl = _styleHandler.styleHandlerWithDefaults("picture", mediaStyling);
    _pictureScrollFunctions.animateImage(pictureTagRelative, positionAbsolute);
    var colors = {
    };
    if (typeof window === "undefined") colors.plusFeature = {
        dark: {
            bg: "black",
            color: "white",
            color2: "white"
        },
        light: {
            bg: "black",
            color: "white",
            color2: "white"
        }
    };
    else colors.plusFeature = window.plusFeature;
    return positionAbsolute == true ? /*#__PURE__*/ _react.default.createElement(ss.MediaContainerAbsolute, {
        as: "picture",
        onError: function onError() {
            return _errorFunctions.pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id);
        },
        width: styleThisEl.width[0] //animation in scrolly fadeIn/fadeOut
        ,
        showScrollyMedia: showScrollyMedia || showScrollyMedia == undefined ? true : false //renderMedia={renderMedia}
        ,
        imageBackground: styleThisEl.imageBackground[0],
        ref: pictureTag
    }, /*#__PURE__*/ _react.default.createElement(s.MobileSource, {
        srcSet: mobileMediaData == undefined ? _errorFunctions.pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id) : mobileMediaData,
        media: "(orientation:" + _isDeviceMobile.orientation + ") and (max-width:" + _isDeviceMobile.maxWidth + "px)"
    }), /*#__PURE__*/ _react.default.createElement(s.DesktopImgAbs, {
        src: desktopMediaData //height={styleThisEl.imageBackground[0] == undefined || styleThisEl.imageBackground[0] == false ? "100%" : "auto"}
        ,
        height: "100%",
        objectPosition: [
            styleThisEl.horizontalObjectPosition[0],
            styleThisEl.horizontalObjectPosition[1]
        ],
        objectFit: styleThisEl.imageBackground[0] == undefined || styleThisEl.imageBackground[0] == false ? "cover" : "scale-down",
        maxHeight: styleThisEl.imageBackground[0] == undefined && !usingApp && !headerPicture || styleThisEl.imageBackground[0] && usingApp == false //? "calc(100% - " + menuHeight + "px)" 
         ? "calc(100%)" : "100%",
        top: styleThisEl.imageBackground[0] == undefined && !usingApp && !headerPicture || styleThisEl.imageBackground[0] && usingApp == false ? "calc(50%)" : "50%",
        maxWidth: styleThisEl.imageBackground[0] == undefined || styleThisEl.imageBackground[0] == false ? "100%" //: "calc(100% - " + widthPadding + "px)" 
         : "100%",
        left: 0,
        alt: altText !== null ? altText : _errorFunctions.pushErrorTextToDOM("#ERR - altText puuttuu kuvasta: " + id + ". Lisää tiedot IMSiin tai sheetsiin.", id)
    }), styleThisEl.mediaCredits.length > 0 && /*#__PURE__*/ _react.default.createElement(ss.MediaCredits, {
        textColor: styleThisEl.mediaCreditsColor[0],
        textBackground: styleThisEl.mediaCreditsBackground[0]
    }, styleThisEl.mediaCredits[0])) : /*#__PURE__*/ _react.default.createElement(ss.MediaContainerRelative, {
        as: "picture",
        onError: function onError() {
            return _errorFunctions.pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id);
        },
        width: styleThisEl.width[0],
        maxWidth: styleThisEl.maxWidth[0] //control opacity only in scrolly
        ,
        showScrollyMedia: showScrollyMedia || showScrollyMedia == undefined ? true : false,
        ref: pictureTagRelative,
        contentInFeature: styleThisEl.feature[0] == "on"
    }, /*#__PURE__*/ _react.default.createElement(s.MobileSource, {
        srcSet: mobileMediaData == undefined ? _errorFunctions.pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id) : mobileMediaData,
        media: "(orientation:" + _isDeviceMobile.orientation + ") and (max-width:" + _isDeviceMobile.maxWidth + "px)"
    }), /*#__PURE__*/ _react.default.createElement(s.DesktopImgRel, {
        src: desktopMediaData,
        alt: altText !== null ? altText : _errorFunctions.pushErrorTextToDOM("#ERR - altText puuttuu kuvasta: " + id + ". Lisää tiedot IMSiin tai sheetsiin.", id),
        onLoad: returnPictureWidth(pictureTagRelative, pictureWidth, setPictureWidth)
    }), /*#__PURE__*/ _react.default.createElement(ss.Text, {
        elWidth: pictureWidth,
        emptyElement: mediaText.length == 0,
        color: colors.plusFeature.light.color,
        colorDark: colors.plusFeature.dark.color
    }, /*#__PURE__*/ _react.default.createElement(_markdownToJsx.default, null, mediaText)));
}
var _default = PictureTag;
exports.default = _default;
PictureTag.propTypes = {
    mobileMediaData: _propTypes.default.string,
    //mobile media url 
    desktopMediaData: _propTypes.default.string,
    //desktop media url
    id: _propTypes.default.string,
    //media url for error handling
    positionAbsolute: _propTypes.default.bool,
    //position absolute in scrolly
    mediaText: _propTypes.default.string,
    //text under video in position relative
    mediaStyling: _propTypes.default.object,
    //array containing all styling from sheets
    showScrollyMedia: _propTypes.default.bool,
    //boolean from Scrolly deciding whether to show media 
    headerPicture: _propTypes.default.bool,
    //style differently if as headerpicture
    altText: _propTypes.default.string //alt text for search robots and screen readers
};

},{"./PictureTag.styled.js":"gb9O8","../SharedVisualStyles.styled.js":"d3Qz1","../../../lib/isDeviceMobile":"8wcmx","../../../lib/isUsingApp":"ezM1b","../../../lib/styleHandler":"jiU5V","./pictureScrollFunctions":"ekSMp","../../../lib/errorFunctions":"5684i"}],"gb9O8":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DesktopImgRel = exports.DesktopImgAbs = exports.MobileSource = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _isDeviceMobile = require("../../../lib/isDeviceMobile");
var MobileSource = _styledComponents.default.source.withConfig({
    displayName: "PictureTagstyled__MobileSource",
    componentId: "sc-acd4vq-0"
})([
    "position:relative;width:100%;"
]);
/*
export const DesktopImgAbs = styled.img`
    position: absolute;
    left: 0;
    width: 100%;
    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};
    height: ${props => props.height};
    object-fit: ${props => props.objectFit};
    object-position: ${props => props.objectPosition[0] !== undefined ? props.objectPosition[0] : "50"}% 50%;

    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;

    @media only screen and (max-width: ${maxWidth}px) and (orientation: ${orientation}) {
        object-position: ${props => props.objectPosition[1] !== undefined ? props.objectPosition[1] : "50"}% 50%;
    }
`;
*/ exports.MobileSource = MobileSource;
var DesktopImgAbs = _styledComponents.default.img.withConfig({
    displayName: "PictureTagstyled__DesktopImgAbs",
    componentId: "sc-acd4vq-1"
})([
    "position:absolute;width:100%;object-fit:",
    ";max-width:",
    ";max-height:",
    ";height:",
    ";top:",
    ";left:",
    ";transform:translateY(-50%);object-position:",
    "% 50%;@media only screen and (max-width:",
    "px) and (orientation:",
    "){object-position:",
    "% 50%;}"
], function(props) {
    return props.objectFit;
}, function(props) {
    return props.maxWidth;
}, function(props) {
    return props.maxHeight;
}, function(props) {
    return props.height;
}, function(props) {
    return props.top;
}, function(props) {
    return props.left;
}, function(props) {
    return props.objectPosition[0] !== undefined ? props.objectPosition[0] : "50";
}, _isDeviceMobile.maxWidth, _isDeviceMobile.orientation, function(props) {
    return props.objectPosition[1] !== undefined ? props.objectPosition[1] : "50";
});
exports.DesktopImgAbs = DesktopImgAbs;
var DesktopImgRel = _styledComponents.default.img.withConfig({
    displayName: "PictureTagstyled__DesktopImgRel",
    componentId: "sc-acd4vq-2"
})([
    "position:relative;max-height:90vh;width:auto;max-width:100%;display:block;margin:auto;"
]);
exports.DesktopImgRel = DesktopImgRel;

},{"../../../lib/isDeviceMobile":"8wcmx"}],"d3Qz1":[function(require,module,exports) {
"use strict";
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Text = exports.MediaCredits = exports.MediaContainerRelative = exports.MediaContainerAbsolute = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _isDeviceMobile = require("../../lib/isDeviceMobile");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
var padding = "0px";
var MediaContainerAbsolute = _styledComponents.default.div.withConfig({
    displayName: "SharedVisualStylesstyled__MediaContainerAbsolute",
    componentId: "sc-1xzgkl5-0"
})([
    "as:",
    ";position:absolute;transform:translateY(-50%);top:50%;object-fit:cover;height:100%;background-color:",
    ";opacity:",
    ";visibility:",
    ";transition:opacity 500ms ease,visibility 0s linear ",
    ";width:100%;"
], function(props) {
    return props.tag;
}, function(props) {
    return props.imageBackground;
}, function(props) {
    return props.showScrollyMedia ? 1 : 0;
}, function(props) {
    return props.showScrollyMedia ? "visible" : "hidden";
}, function(props) {
    return props.showScrollyMedia ? "" : "500ms";
});
/*
export const MediaContainerAbsolute = styled.div`
    as: ${props => props.tag};
    position: absolute;
    left: 0;
    
    height: 100vh;
    max-height: 100vh;
    width: 100%;

    background-color: ${props => props.imageBackground};
    animation-name: ${props => props.showScrollyMedia ? fadeIn(props.currentOpacity) : fadeOut(props.currentOpacity)};
    animation-duration: 500ms;
    animation-timing-function: ease;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    opacity: 0;
    z-index: ${props => props.zIndex};

    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
`;

*/ exports.MediaContainerAbsolute = MediaContainerAbsolute;
var MediaContainerRelative = _styledComponents.default.div.withConfig({
    displayName: "SharedVisualStylesstyled__MediaContainerRelative",
    componentId: "sc-1xzgkl5-1"
})([
    "as:",
    ";position:relative;color:black;font-size:14px;margin:",
    ";line-height:1.45;max-width:",
    ";width:calc(",
    ");display:block;padding:",
    ";padding-top:",
    ";padding-bottom:",
    ";"
], function(props) {
    return props.tag;
}, function(props) {
    return props.contentInFeature ? "12px auto 0" : "auto";
}, function(props) {
    return props.contentInFeature ? "800px" : "650px";
}, function(props) {
    return props.contentInFeature ? props.width + "% - " + padding : "100%";
}, function(props) {
    return props.contentInFeature ? "0" : "0 15px";
}, function(props) {
    return props.contentInFeature ? "16px" : "20px";
}, function(props) {
    return props.contentInFeature ? "16px" : "20px";
});
exports.MediaContainerRelative = MediaContainerRelative;
var MediaCredits = _styledComponents.default.p.withConfig({
    displayName: "SharedVisualStylesstyled__MediaCredits",
    componentId: "sc-1xzgkl5-2"
})([
    "position:absolute;right:10px;bottom:calc(10px + 3vh);text-align:right;color:",
    ";background-color:",
    ";padding:5px;"
], function(props) {
    return props.textColor;
}, function(props) {
    return props.textBackground;
});
exports.MediaCredits = MediaCredits;
var Text1 = _styledComponents.default.p.withConfig({
    displayName: "SharedVisualStylesstyled__Text",
    componentId: "sc-1xzgkl5-3"
})([
    "margin:auto;margin-top:5px;width:",
    ";min-width:150px;padding:16px;border-bottom:",
    ";color:",
    ";@media (prefers-color-scheme:dark){color:",
    ";}"
], function(props) {
    return props.elWidth !== undefined ? props.elWidth + "px" : "auto";
}, function(props) {
    return props.emptyElement ? "none" : "1px solid rgb(232, 233, 235)";
}, function(props) {
    return props.color;
}, function(props) {
    return props.colorDark;
});
exports.Text = Text1;

},{"../../lib/isDeviceMobile":"8wcmx"}],"ezM1b":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isUsingApp = isUsingApp;
function isUsingApp() {
    if (typeof window === "undefined") return;
    var currentUrl = window.location.href;
    return currentUrl.includes("article-renderer") || currentUrl.includes("about:srcdoc") ? true : false;
}

},{}],"jiU5V":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styleHandlerWithDefaults = styleHandlerWithDefaults;
function styleHandlerWithDefaults(contentType, styles) {
    if (contentType == "picture") return {
        "mediaCredits": keySniffer(styles, "kuvatieto", ""),
        "mediaCreditsColor": keySniffer(styles, "kuvatietoväri", "black"),
        "mediaCreditsBackground": keySniffer(styles, "kuvatietotausta", "transparent"),
        "width": keySniffer(styles, "leveys", 100),
        "maxWidth": keySniffer(styles, "maxleveys", "800px"),
        "imageBackground": keySniffer(styles, "kuvatausta", undefined),
        "horizontalObjectPosition": keySniffer(styles, "keskikohta", "50"),
        "feature": keySniffer(styles, "feature", "on")
    };
    else if (contentType == "video") return {
        "audio": keySniffer(styles, "ääni", false)[0] == "on" ? true : false,
        "preload": keySniffer(styles, "preload", "off")[0] == "on" ? true : false,
        "horizontalObjectPosition": keySniffer(styles, "keskikohta", "50"),
        "autoplay": keySniffer(styles, "autoplay", "on")[0] == "off" ? false : true,
        "iconColor": keySniffer(styles, "ikoniväri", "white"),
        "width": keySniffer(styles, "leveys", 100),
        "maxWidth": keySniffer(styles, "maxleveys", "800px"),
        "mediaCredits": keySniffer(styles, "kuvatieto", ""),
        "mediaCreditsColor": keySniffer(styles, "kuvatietoväri", "black"),
        "mediaCreditsBackground": keySniffer(styles, "kuvatietotausta", "transparent"),
        "controls": keySniffer(styles, "autoplay", "on")[0] == "off" ? true : false,
        "imageBackground": keySniffer(styles, "kuvatausta", undefined),
        "feature": keySniffer(styles, "feature", "on")
    };
    else if (contentType == "otsikko") return {
        "fontSize": keySniffer(styles, "fonttikoko", "3em"),
        "backgroundColor": keySniffer(styles, "artikkelitausta", "white"),
        "darkmode": keySniffer(styles, "darkmode", "off")
    };
    else if (contentType == "skrolli") return {
        "textContainerBackground": keySniffer(styles, "tekstitausta", "black"),
        "textColor": keySniffer(styles, "tekstiväri", "white")
    };
    else if (contentType == "sitaatti") return {
        "textContainerBackground": keySniffer(styles, "tekstitausta", "black"),
        "textColor": keySniffer(styles, "tekstiväri", "#F8F9FA"),
        "fontSize": keySniffer(styles, "fonttikoko", "32px")
    };
} //tries to find styling style object, if couldn't find return default
function keySniffer(styleObj, itemName, fallback) {
    var sniffedValue = Object.keys(styleObj).includes(itemName) ? styleObj[itemName] : [
        fallback
    ];
    return sniffedValue;
}

},{}],"ekSMp":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animateImage = animateImage;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = require("react");
var _viewportFunctions = require("../../../lib/viewportFunctions");
function animateImage(ref, positionAbsolute) {
    _react.useEffect(function() {
        var closeToViewport = /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee() {
                return _regenerator.default.wrap(function _callee$(_context) {
                    while(true)switch(_context.prev = _context.next){
                        case 0:
                            if (ref.current !== null) //Enter animation
                            {
                                if (!positionAbsolute && _viewportFunctions.isElementVisibleInViewport(ref.current) && !ref.current.classList.contains("animatePlusFeatureVisual")) ref.current.classList.add("animatePlusFeatureVisual");
                            }
                        case 1:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            return function closeToViewport1() {
                return _ref.apply(this, arguments);
            };
        }();
        document.getElementById("app").addEventListener("scroll", closeToViewport, {
            passive: true
        });
        return function() {
            return document.getElementById("app").removeEventListener("scroll", closeToViewport);
        };
    }, []);
}

},{"../../../lib/viewportFunctions":"3INVk"}],"5684i":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pushErrorTextToDOM = pushErrorTextToDOM;
function pushErrorTextToDOM(errorText, id) {
    if (typeof document === "undefined") return;
    var el = document.querySelector("#plus-featurepohja-errorlist");
    if (el) {
        if (window.plusFeatureErrors == undefined) window.plusFeatureErrors = [];
        !window.plusFeatureErrors.includes(errorText) && window.plusFeatureErrors.push(errorText);
        el.innerHTML = "<br/>";
        window.plusFeatureErrors.map(function(eText) {
            el.innerHTML = el.innerHTML + eText + "<br/><br/>";
        });
        if (window.location.href.includes("localhost") || window.location.href.includes("esko.yle.fi")) el.style.display = "block";
    }
}

},{}],"lghy5":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var s = _interopRequireWildcard(require("./VideoTag.styled.js"));
var ss = _interopRequireWildcard(require("../SharedVisualStyles.styled.js"));
var _styleHandler = require("../../../lib/styleHandler");
var _VideoAudio = _interopRequireDefault(require("./VideoAudio"));
var _VideoPlay = _interopRequireDefault(require("./VideoPlay"));
var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));
var _videoScrollFunctions = require("./videoScrollFunctions");
var _isDeviceMobile = require("../../../lib/isDeviceMobile");
var _errorFunctions = require("../../../lib/errorFunctions");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
//Helps to position icons and description text under video
function returnVideoSpecs(ref, videoSpecs, setVideoSpecs) {
    var calcVideoSpecs = function calcVideoSpecs1(ref1) {
        if (ref1.current !== null) {
            var newVideoWidth = 0;
            var newVideoPadding = 0;
            var newVideoHeight = 0;
            var videoChildren = _toConsumableArray2.default(ref1.current.querySelectorAll('video'));
            var containerLeft = ref1.current.getBoundingClientRect().left;
            videoChildren.map(function(vid) {
                var videoRect = vid.getBoundingClientRect();
                newVideoWidth = videoRect.width > newVideoWidth ? videoRect.width : newVideoWidth;
                var calcVideoPadding = videoRect.left - containerLeft;
                newVideoPadding = videoRect.left > 0 ? calcVideoPadding : newVideoPadding;
                var videoHeight = videoRect.height;
                newVideoHeight = videoHeight > newVideoHeight ? videoHeight : newVideoHeight;
            });
            newVideoWidth == 0 && setTimeout(function() {
                return calcVideoSpecs1(ref1);
            }, 500);
            newVideoWidth !== videoSpecs[0] && setVideoSpecs([
                newVideoWidth,
                newVideoPadding,
                newVideoHeight
            ]);
        }
    };
    _react.useLayoutEffect(function() {
        var timeoutId = null;
        var resizeListener = function resizeListener1() {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId); // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(function() {
                return calcVideoSpecs(ref);
            }, 150);
        };
        window.addEventListener("resize", resizeListener, {
            passive: true
        });
        setTimeout(function() {
            return calcVideoSpecs(ref, videoSpecs, setVideoSpecs);
        }, 1500);
        return function() {
            return window.removeEventListener("resize", resizeListener);
        };
    }, [
        videoSpecs
    ]);
}
function VideoTag(props) {
    var mobileMediaData = props.mobileMediaData, desktopMediaData = props.desktopMediaData, positionAbsolute = props.positionAbsolute, id = props.id, mediaText = props.mediaText, mediaStyling = props.mediaStyling, showScrollyMedia = props.showScrollyMedia, audioIconPosition = props.audioIconPosition, scrollyTextFullyInScreen = props.scrollyTextFullyInScreen, headerVideo = props.headerVideo, setSound = props.setSound, soundOn = props.soundOn;
    var videoRef = _react.useRef(null);
    var styleThisEl = _styleHandler.styleHandlerWithDefaults("video", mediaStyling);
    var mobile = _isDeviceMobile.isDeviceMobile();
    _videoScrollFunctions.playPauseVideo(videoRef, styleThisEl.controls, scrollyTextFullyInScreen, positionAbsolute, headerVideo); //let videoSpecs = returnVideoSpecs(videoRef);
    var _useState = _react.useState([]), _useState2 = _slicedToArray2.default(_useState, 2), videoSpecs = _useState2[0], setVideoSpecs = _useState2[1]; //when using app, yle menu takes space 50px
    //const usingApp = isUsingApp();
    //const menuHeight = 50;
    var videoProps = {
        preload: styleThisEl.preload || headerVideo ? "auto" : "metadata",
        autoPlay: styleThisEl.preload && !styleThisEl.controls || headerVideo ? true : false,
        muted: true,
        playsInline: true,
        loop: true,
        height: styleThisEl.imageBackground[0] == undefined && positionAbsolute ? "100%" : "auto",
        /*scaleDown keeps whole image in screen while maintaining aspect ratio - menuHeight helps to render under menu element */ objectFit: styleThisEl.imageBackground[0] == undefined && positionAbsolute ? "cover" : "scale-down",
        //maxHeight: positionAbsolute && !usingApp && !headerVideo ? "calc(100% - " + menuHeight + "px)" : "100%",
        maxHeight: "100%",
        top: "50%",
        //top: positionAbsolute && !usingApp && !headerVideo ? "calc(50% + " + Number(menuHeight/2) + "px)"  : "50%",
        onError: function onError() {
            return _errorFunctions.pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id);
        },
        onLoad: returnVideoSpecs(videoRef, videoSpecs, setVideoSpecs)
    }; //Two videos are loaded - preload and autoplay only desktop OR mobile
    var disableAutoplay = {
        preload: "metadata",
        autoPlay: false
    };
    return positionAbsolute == true ? /*#__PURE__*/ _react.default.createElement(ss.MediaContainerAbsolute, {
        as: "div",
        showScrollyMedia: showScrollyMedia || showScrollyMedia == undefined ? true : false,
        ref: videoRef,
        imageBackground: styleThisEl.imageBackground[0] == false || styleThisEl.imageBackground[0] == undefined ? "white" : styleThisEl.imageBackground[0]
    }, /*#__PURE__*/ _react.default.createElement(s.VideoTagAbsoluteDesktop, _extends2.default({
    }, videoProps, mobile && disableAutoplay, {
        objectPositionDesktop: styleThisEl.horizontalObjectPosition[0],
        poster: desktopMediaData.replace("#t=0.1", "") + ".poster.jpg"
    }), /*#__PURE__*/ _react.default.createElement("source", {
        src: desktopMediaData,
        type: "video/mp4"
    })), /*#__PURE__*/ _react.default.createElement(s.VideoTagAbsoluteMobile, _extends2.default({
    }, videoProps, !mobile && disableAutoplay, {
        objectPositionMobile: styleThisEl.horizontalObjectPosition[1],
        poster: mobileMediaData.replace("#t=0.1", "") + ".poster.jpg"
    }), /*#__PURE__*/ _react.default.createElement("source", {
        src: mobileMediaData,
        type: "video/mp4"
    })), styleThisEl.audio && /*#__PURE__*/ _react.default.createElement(_VideoAudio.default, {
        audioIconPosition: audioIconPosition,
        audioIconPositionRight: videoSpecs[1],
        iconColor: styleThisEl.iconColor[0],
        relative: !positionAbsolute,
        soundOn: soundOn,
        setSound: setSound
    }), styleThisEl.controls && /*#__PURE__*/ _react.default.createElement(_VideoPlay.default, {
        playIconPosition: undefined,
        iconColor: styleThisEl.iconColor[0],
        videoContainer: videoRef
    }), styleThisEl.mediaCredits.length > 0 && /*#__PURE__*/ _react.default.createElement(ss.MediaCredits, {
        textColor: styleThisEl.mediaCreditsColor[0],
        textBackground: styleThisEl.mediaCreditsBackground[0]
    }, styleThisEl.mediaCredits[0])) : /*#__PURE__*/ _react.default.createElement(ss.MediaContainerRelative, {
        as: "div",
        showScrollyMedia: showScrollyMedia || showScrollyMedia == undefined ? true : false,
        width: styleThisEl.width[0],
        maxWidth: styleThisEl.maxWidth[0],
        ref: videoRef,
        contentInFeature: styleThisEl.feature[0] == "on",
        className: "plusVideoRelative"
    }, /*#__PURE__*/ _react.default.createElement(s.VideoTagRelativeDesktop, _extends2.default({
    }, videoProps, mobile && disableAutoplay, {
        poster: desktopMediaData.replace("#t=0.1", "") + ".poster.jpg"
    }), /*#__PURE__*/ _react.default.createElement("source", {
        src: desktopMediaData,
        type: "video/mp4"
    }), /*#__PURE__*/ _react.default.createElement(ss.Text, null, /*#__PURE__*/ _react.default.createElement(_markdownToJsx.default, null, mediaText))), /*#__PURE__*/ _react.default.createElement(s.VideoTagRelativeMobile, _extends2.default({
    }, videoProps, !mobile && disableAutoplay, {
        poster: mobileMediaData.replace("#t=0.1", "") + ".poster.jpg"
    }), /*#__PURE__*/ _react.default.createElement("source", {
        src: mobileMediaData,
        type: "video/mp4"
    })), /*#__PURE__*/ _react.default.createElement(ss.Text, {
        elWidth: videoSpecs[0],
        emptyElement: mediaText.length == 0,
        color: window.plusFeature.light.color,
        colorDark: window.plusFeature.dark.color
    }, /*#__PURE__*/ _react.default.createElement(_markdownToJsx.default, null, mediaText)), styleThisEl.audio && /*#__PURE__*/ _react.default.createElement(_VideoAudio.default, {
        audioIconPosition: audioIconPosition,
        audioIconPositionRight: videoSpecs[0] / 2,
        iconColor: styleThisEl.iconColor[0],
        videoContainer: videoRef,
        relative: true,
        soundOn: soundOn,
        setSound: setSound
    }), styleThisEl.controls && /*#__PURE__*/ _react.default.createElement(_VideoPlay.default, {
        iconColor: styleThisEl.iconColor[0],
        playIconPosition: videoSpecs[2],
        videoContainer: videoRef
    }));
}
var _default = VideoTag;
exports.default = _default;
VideoTag.propTypes = {
    mobileMediaData: _propTypes.default.string,
    //mobile media url 
    desktopMediaData: _propTypes.default.string,
    //desktop media url
    id: _propTypes.default.string,
    //media url for error handling
    positionAbsolute: _propTypes.default.bool,
    //position absolute in scrolly
    mediaText: _propTypes.default.string,
    //text under video in position relative
    mediaStyling: _propTypes.default.object,
    //array containing all styling from sheets
    showScrollyMedia: _propTypes.default.bool,
    //boolean from Scrolly deciding whether to show media 
    audioIconPosition: _propTypes.default.string,
    //for example 60px from top
    scrollyTextFullyInScreen: _propTypes.default.bool,
    //boolean from Scrolly deciding whether to play video
    headerVideo: _propTypes.default.bool //header video should be preloaded and auto playing
};

},{"./VideoTag.styled.js":"c7T6i","../SharedVisualStyles.styled.js":"d3Qz1","../../../lib/styleHandler":"jiU5V","./VideoAudio":"i9UkJ","./VideoPlay":"fSNnN","./videoScrollFunctions":"lCM2t","../../../lib/isDeviceMobile":"8wcmx","../../../lib/errorFunctions":"5684i"}],"c7T6i":[function(require,module,exports) {
"use strict";
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PlayButton = exports.AudioButton = exports.VideoTagRelativeMobile = exports.VideoTagRelativeDesktop = exports.VideoTagAbsoluteMobile = exports.VideoTagAbsoluteDesktop = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _isDeviceMobile = require("../../../lib/isDeviceMobile");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/*
export const VideoTagAbsoluteDesktop = styled.video`
    width: 100%;
    height: ${props => props.height};
    position: absolute;
    left: 0;
    max-width: 100%;
    max-height: ${props => props.maxHeight};
    object-fit: ${props => props.objectFit};
    object-position: ${props => props.objectPositionDesktop}% 50%;

    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;

    @media (max-width: ${maxWidth}px) and (orientation: ${orientation}){
        display: none;
    }

    
`;

*/ /*

export const VideoTagAbsoluteMobile = styled.video`
    width: 100%;
    position: absolute;
    left: 0;
    height: ${props => props.height};
    max-width: 100%;
    max-height: ${props => props.maxHeight};
    display: none;
    object-fit: ${props => props.objectFit};
    object-position: ${props => props.objectPositionMobile !== undefined ? props.objectPositionMobile : "50"}% 50%;

    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;

    @media (max-width: ${maxWidth}px) and (orientation: ${orientation}) {
        display: block;
    }
`;
*/ var VideoTagAbsoluteDesktop = _styledComponents.default.video.withConfig({
    displayName: "VideoTagstyled__VideoTagAbsoluteDesktop",
    componentId: "sc-ffy0ca-0"
})([
    "width:100%;position:absolute;height:",
    ";max-width:100%;max-height:",
    ";top:",
    ";transform:translateY(-50%);object-fit:",
    ";display:inline;object-position:",
    "% 50%;@media (max-width:",
    "px) and (orientation:",
    "){display:none;}"
], function(props) {
    return props.height;
}, function(props) {
    return props.maxHeight;
}, function(props) {
    return props.top;
}, function(props) {
    return props.objectFit;
}, function(props) {
    return props.objectPositionDesktop;
}, _isDeviceMobile.maxWidth, _isDeviceMobile.orientation);
exports.VideoTagAbsoluteDesktop = VideoTagAbsoluteDesktop;
var VideoTagAbsoluteMobile = _styledComponents.default.video.withConfig({
    displayName: "VideoTagstyled__VideoTagAbsoluteMobile",
    componentId: "sc-ffy0ca-1"
})([
    "width:100%;position:absolute;height:",
    ";top:50%;transform:translateY(-50%);object-fit:cover;display:none;object-position:",
    "% 50%;@media (max-width:",
    "px) and (orientation:",
    "){display:block;}"
], function(props) {
    return props.height;
}, function(props) {
    return props.objectPositionMobile;
}, _isDeviceMobile.maxWidth, _isDeviceMobile.orientation);
exports.VideoTagAbsoluteMobile = VideoTagAbsoluteMobile;
var VideoTagRelativeDesktop = _styledComponents.default.video.withConfig({
    displayName: "VideoTagstyled__VideoTagRelativeDesktop",
    componentId: "sc-ffy0ca-2"
})([
    "position:relative;max-width:100%;max-height:90vh;width:auto;display:block;margin:12px auto 0;@media (max-width:",
    "px) and (orientation:",
    "){display:none;}"
], _isDeviceMobile.maxWidth, _isDeviceMobile.orientation);
exports.VideoTagRelativeDesktop = VideoTagRelativeDesktop;
var VideoTagRelativeMobile = _styledComponents.default.video.withConfig({
    displayName: "VideoTagstyled__VideoTagRelativeMobile",
    componentId: "sc-ffy0ca-3"
})([
    "position:relative;max-width:100%;width:auto;display:none;margin:12px auto 0;max-height:90vh;@media (max-width:",
    "px) and (orientation:",
    "){display:block;}"
], _isDeviceMobile.maxWidth, _isDeviceMobile.orientation);
exports.VideoTagRelativeMobile = VideoTagRelativeMobile;
var AudioButton = _styledComponents.default.button.withConfig({
    displayName: "VideoTagstyled__AudioButton",
    componentId: "sc-ffy0ca-4"
})([
    "-webkit-appearance:none;position:absolute;top:",
    ";right:",
    ";;background:transparent;border-width:initial;border-style:none;border-color:initial;border-image:initial;padding:0px;cursor:pointer;z-index:2;"
], function(props) {
    return props.audioIconPosition !== undefined ? props.audioIconPosition : !props.relative ? "5px" : "35px";
}, function(props) {
    return props.audioIconPositionRight !== undefined && props.relative ? "calc(50% - " + props.audioIconPositionRight + ")" : "5px";
});
exports.AudioButton = AudioButton;
var PlayButton = _styledComponents.default.button.withConfig({
    displayName: "VideoTagstyled__PlayButton",
    componentId: "sc-ffy0ca-5"
})([
    "top:",
    ";left:calc(50% - 50px);position:absolute;background:transparent;border-width:initial;border-style:none;border-color:initial;border-image:initial;-webkit-appearance:none;z-index:2;"
], function(props) {
    return props.playIconPosition !== undefined ? props.playIconPosition + "px" : "calc(50% - 50px)";
});
exports.PlayButton = PlayButton;

},{"../../../lib/isDeviceMobile":"8wcmx"}],"i9UkJ":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var s = _interopRequireWildcard(require("./VideoTag.styled.js"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function VideoAudio(props) {
    var audioIconPosition = props.audioIconPosition, audioIconPositionRight = props.audioIconPositionRight, iconColor = props.iconColor, relative = props.relative, soundOn = props.soundOn, setSound = props.setSound;
    function audioButtonClick() {
        var newSoundOn = !soundOn;
        setSound(newSoundOn);
        var videoChildren = _toConsumableArray2.default(document.querySelectorAll('article video'));
        videoChildren.map(function(video) {
            video.muted = !video.muted;
        });
    }
    return(/*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(s.AudioButton, {
        onClick: function onClick() {
            return audioButtonClick(setSound);
        },
        style: {
            display: soundOn ? "none" : "block"
        },
        audioIconPosition: audioIconPosition,
        audioIconPositionRight: Math.round(audioIconPositionRight) - 5 + "px",
        relative: relative
    }, /*#__PURE__*/ _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: iconColor !== undefined ? iconColor : "white",
        width: "35",
        height: "35"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
    }))), /*#__PURE__*/ _react.default.createElement(s.AudioButton, {
        onClick: function onClick() {
            return audioButtonClick(setSound);
        },
        style: {
            display: soundOn ? "block" : "none"
        },
        audioIconPosition: audioIconPosition,
        audioIconPositionRight: Math.round(audioIconPositionRight) - 5 + "px",
        relative: relative
    }, /*#__PURE__*/ _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: iconColor !== undefined ? iconColor : "white",
        width: "35",
        height: "35"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
    })))));
}
var _default = VideoAudio;
exports.default = _default;

},{"./VideoTag.styled.js":"c7T6i"}],"fSNnN":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var s = _interopRequireWildcard(require("./VideoTag.styled.js"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function VideoPlay(props) {
    var videoContainer = props.videoContainer, iconColor = props.iconColor, playIconPosition = props.playIconPosition;
    var play = _react.useRef(null);
    function flipPlay() {
        if (videoContainer.current !== null) {
            //videos under ref
            var videoChildren = _toConsumableArray2.default(videoContainer.current.querySelectorAll('video'));
            videoChildren.map(function(video) {
                var videoStyle = window.getComputedStyle(video);
                if (videoStyle.display == "block" && video.paused) {
                    video.readyState == 0 && video.load();
                    video.play();
                    play.current.style.opacity = 0;
                } else if (videoStyle.display == "block" && !video.paused) {
                    play.current.style.opacity = 1;
                    video.pause();
                }
            });
        }
    }
    return(/*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(s.PlayButton, {
        ref: play,
        onClick: function onClick() {
            return flipPlay();
        },
        style: {
            display: "block"
        },
        className: "plusVideoPlayButton",
        playIconPosition: playIconPosition !== undefined ? playIconPosition / 2 - 20 : undefined
    }, /*#__PURE__*/ _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        fill: iconColor !== undefined ? iconColor : "white",
        width: "100",
        height: "100"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M99.6,48.4c-0.3-0.7-0.9-1.3-1.6-1.6L5.2,0.4C3.4-0.5,1.3,0.2,0.4,2C0.1,2.5,0,3,0,3.6v92.9c0,2,1.6,3.6,3.6,3.6c0.6,0,1.1-0.1,1.6-0.4L98,53.2C99.8,52.3,100.5,50.2,99.6,48.4z"
    })))));
}
var _default = VideoPlay;
exports.default = _default;

},{"./VideoTag.styled.js":"c7T6i"}],"lCM2t":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.playPauseVideo = playPauseVideo;
exports.stopRelativeAutoplayVideosWhileInScrolly = stopRelativeAutoplayVideosWhileInScrolly;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = require("react");
var _viewportFunctions = require("../../../lib/viewportFunctions");
function playPauseVideo(ref, controls, scrollyTextFullyInScreen, positionAbsolute, headerVideo) {
    _react.useEffect(function() {
        var closeToViewport = /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee() {
                var containerStyle, videoChildren, _videoChildren;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while(true)switch(_context.prev = _context.next){
                        case 0:
                            if (!(ref.current !== null && !controls)) {
                                _context.next = 18;
                                break;
                            }
                            containerStyle = window.getComputedStyle(ref.current); //videos under ref
                            videoChildren = _toConsumableArray2.default(ref.current.querySelectorAll('video')); ////////////////
                            //CASE SCROLLY//
                            ////////////////
                            if (!(positionAbsolute && _viewportFunctions.isElementCloseToViewport(ref.current, 1) && !headerVideo)) {
                                _context.next = 8;
                                break;
                            }
                            _context.next = 6;
                            return Promise.all(videoChildren.map(function(video) {
                                var videoStyle = window.getComputedStyle(video); //play paused videos that are visible - only play desktop video on desktop
                                //play paused videos that are visible - only play desktop video on desktop
                                if (video.paused && videoStyle.display !== "none" && containerStyle.display !== "none") {
                                    //load video close enough to viewport
                                    video.readyState == 0 && video.load(); //play video when in viewport
                                    //play video when in viewport
                                    scrollyTextFullyInScreen && video.play(); //pause video if scrollyText is not fully in screen
                                } else if (!video.paused && !scrollyTextFullyInScreen) video.pause();
                            }));
                        case 6:
                            _context.next = 16;
                            break;
                        case 8:
                            if (!(!positionAbsolute && _viewportFunctions.videoRelativeCloseToViewport(ref.current, 0.85) || headerVideo && _viewportFunctions.videoRelativeCloseToViewport(ref.current, 0.85))) {
                                _context.next = 13;
                                break;
                            }
                            _context.next = 11;
                            return Promise.all(videoChildren.map(function(video) {
                                var videoStyle = window.getComputedStyle(video); //play paused videos that are visible - only play desktop video on desktop
                                //play paused videos that are visible - only play desktop video on desktop
                                if (video.paused && videoStyle.display !== "none" && containerStyle.display !== "none") {
                                    //load video close enough to viewport
                                    video.readyState == 0 && video.load(); //play video when in viewport
                                    //play video when in viewport
                                    video.play();
                                }
                            }));
                        case 11:
                            _context.next = 16;
                            break;
                        case 13:
                            if (!(!positionAbsolute && !_viewportFunctions.videoRelativeCloseToViewport(ref.current, 0.85) || headerVideo && !_viewportFunctions.videoRelativeCloseToViewport(ref.current, 0.85))) {
                                _context.next = 16;
                                break;
                            }
                            _context.next = 16;
                            return Promise.all(videoChildren.map(function(video) {
                                video.pause();
                            }));
                        case 16:
                            _context.next = 23;
                            break;
                        case 18:
                            if (!(ref.current !== null && controls)) {
                                _context.next = 23;
                                break;
                            }
                            if (!(!_viewportFunctions.videoRelativeCloseToViewport(ref.current, 0.85) || !scrollyTextFullyInScreen && positionAbsolute)) {
                                _context.next = 23;
                                break;
                            }
                            //console.log(scrollyTextFullyInScreen, ref.current)
                            //videos under ref
                            _videoChildren = _toConsumableArray2.default(ref.current.querySelectorAll('video')); //console.log(ref.current, new Date())
                            _context.next = 23;
                            return Promise.all(_videoChildren.map(function(video) {
                                //video pause is promise
                                !video.paused && video.pause();
                                var button = ref.current.querySelector(".plusVideoPlayButton");
                                button.style.opacity = 1;
                            }));
                        case 23:
                            //Enter animation
                            if (!positionAbsolute && _viewportFunctions.isElementVisibleInViewport(ref.current) && !ref.current.classList.contains("animatePlusFeatureVisual")) ref.current.classList.add("animatePlusFeatureVisual");
                        case 24:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            return function closeToViewport1() {
                return _ref.apply(this, arguments);
            };
        }();
        window.addEventListener("scroll", closeToViewport, {
            passive: true
        }); //document.getElementById("app").addEventListener("scroll", closeToViewport, { passive: true });
        return function() {
            return window.removeEventListener("scroll", closeToViewport);
        }; //return () => document.getElementById("app").removeEventListener("scroll", closeToViewport);
    }, [
        scrollyTextFullyInScreen
    ]);
}
function stopRelativeAutoplayVideosWhileInScrolly(className) {
    var videoChildren = _toConsumableArray2.default(document.querySelectorAll(className + ' video'));
    videoChildren.map(function(video) {
        !video.paused && video.pause();
    });
}

},{"../../../lib/viewportFunctions":"3INVk"}],"ggIfN":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var s = _interopRequireWildcard(require("./SwipingFinger.styled.js"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function scrollFunction() {
    var _useState = _react.useState(false), _useState2 = _slicedToArray2.default(_useState, 2), scrolled = _useState2[0], setScrolled = _useState2[1];
    _react.useEffect(function() {
        document.getElementById("app").addEventListener("scroll", function() {
            return setScrolled(true);
        }, {
            passive: true
        });
        return function() {
            return window.removeEventListener("scroll", setScrolled);
        };
    }, []);
    return scrolled;
}
function SwipingFinger(props) {
    var color = props.color;
    var scrolled = scrollFunction();
    return(/*#__PURE__*/ _react.default.createElement(s.IconAndText, {
        showGuide: !scrolled
    }, /*#__PURE__*/ _react.default.createElement(s.SVGel, {
        width: "50px",
        height: "50px"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        fill: color,
        d: "M20,4c-0.9375,0-1.8945312,0.320313-2.671875,0.976563C16.5546875,5.6289058,16,6.6679692,16,7.898438V29.3125 l-3.34375-3.8671875c-0.0078115-0.0078125-0.015625-0.015625-0.0234365-0.0234375 C10.953125,23.6132812,8.0820312,23.625,6.3125,25.3789062c-1.8007808,1.6875-1.7851558,4.5625-0.0195308,6.328125 l-0.0820312-0.09375L17.8007812,46.5c1.6875,2.25,4.3046875,3.5,7.1015625,3.5H33c4.9453125,0,9-4.0546875,9-9V23 c0-0.7460938-0.0234375-1.8789062-0.546875-2.9609375C40.9257812,18.9570312,39.7109375,18,38,18 c-0.9414062,0-1.6914062,0.3164062-2.296875,0.7578125c-0.1523438-0.5234375-0.3476562-1.0117188-0.65625-1.4179688 C34.3398438,16.4257812,33.203125,16,32,16c-1.1132812,0-1.9804688,0.4101562-2.640625,0.9726562 C28.6953125,15.8671885,27.5664062,15,26,15c-0.7773438,0-1.421875,0.2539062-2,0.5976562V8 c0-1.265625-0.5429688-2.328125-1.3164062-3.0039058S20.9414062,4,20,4z M20,6c0.4648438,0,0.9960938,0.179688,1.3710938,0.5039058 C21.7460938,6.828125,22,7.265625,22,8v10.9335938C22,18.953125,22,18.9765625,22,19v4 c-0.0039062,0.359375,0.1835938,0.6953125,0.4960938,0.8789062c0.3125,0.1796875,0.6953125,0.1796875,1.0078125,0 C23.8164062,23.6953125,24.0039062,23.359375,24,23v-3.9609375c0-0.0078125,0-0.015625,0-0.0234375 C24.0039062,19.0078125,24.0039062,19.0039062,24,19c0-0.875,0.6640625-2,2-2c1.3320312,0,1.9921875,1.109375,2,1.984375 C28,18.9882812,28,18.9960938,28,19v3c0.0078125,0.546875,0.453125,0.984375,1,0.984375S29.9921875,22.546875,30,22v-1.9609375 C30,20.0273438,30,20.0117188,30,20c0-0.5351562,0.1445312-1.0585938,0.4179688-1.3984375S31.0820312,18,32,18 c0.8007812,0,1.1640625,0.1757812,1.4570312,0.5625C33.7539062,18.9453125,34,19.71875,34,21v2 c0.0039062,0.0664062,0.0117188,0.1328125,0.0273438,0.1992188c0.0195312,0.0976562,0.0546875,0.1914062,0.1015625,0.28125 c0.0195312,0.0273438,0.0351562,0.0546875,0.0585938,0.0820312c0.0351562,0.0546875,0.0820312,0.1054688,0.1289062,0.1523438 c0.046875,0.0429688,0.1015625,0.0859375,0.15625,0.1210938C34.5,23.8515625,34.53125,23.8671875,34.5625,23.8828125 c0.0585938,0.03125,0.1210938,0.0546875,0.1875,0.0703125c0.1289062,0.0351562,0.2617188,0.0429688,0.3945312,0.0234375 c0.0976562-0.015625,0.1953125-0.0429688,0.2890625-0.0859375c0.0273438-0.015625,0.0585938-0.03125,0.0859375-0.046875 c0.0585938-0.0351562,0.109375-0.0742188,0.1601562-0.1210938c0.0234375-0.0234375,0.046875-0.046875,0.0703125-0.0703125 c0.109375-0.1289062,0.1875-0.2773438,0.2265625-0.4414062c0.0078125-0.03125,0.0117188-0.0664062,0.0195312-0.0976562 C36,23.0820312,36,23.046875,36,23.015625C36.0039062,23.0078125,36.0039062,23.0039062,36,23 c0-0.6523438,0.0742188-1.5195312,0.3515625-2.0898438C36.6289062,20.34375,36.9101562,20,38,20 c1.09375,0,1.375,0.34375,1.6523438,0.9101562C39.9296875,21.4804688,40,22.3476562,40,23v18c0,3.8554688-3.1445312,7-7,7 h-8.0976562c-2.2070312,0-4.1914062-0.9492188-5.5-2.6992188c-0.0039062-0.0039062-0.0078125-0.0117188-0.0117188-0.015625 L7.789063,30.3867188c-0.0273438-0.0351562-0.054688-0.0664062-0.0820322-0.09375 c-1.03125-1.03125-1.015625-2.5429688-0.0273428-3.4609375c0.007812-0.0078125,0.0195312-0.015625,0.0273428-0.0234375 c1.0273442-1.03125,2.5429692-1.015625,3.460938-0.0273438l5.078125,5.875c0.2695312,0.3125,0.7109375,0.4257812,1.1015625,0.28125 C17.7382812,32.7890625,18,32.4179688,18,32V7.898438C18,7.2304692,18.2460938,6.820313,18.625,6.5C19,6.179688,19.5390625,6,20,6z "
    })), /*#__PURE__*/ _react.default.createElement(s.InfoText, {
        color: color
    }, "Selaa eteenp\xE4in")));
}
var _default = SwipingFinger;
exports.default = _default;

},{"./SwipingFinger.styled.js":"cpVSH"}],"cpVSH":[function(require,module,exports) {
"use strict";
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InfoText = exports.IconAndText = exports.SVGel = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
var showAnimation = _styledComponents.keyframes([
    "0%{transform:translateY(0px)}50%{transform:translateY(10px)}100%{transform:translateY(0px)}"
]);
var hideAnimation = _styledComponents.keyframes([
    "0%{opacity:1;}100%{opacity:0;}"
]);
var SVGel = _styledComponents.default.svg.withConfig({
    displayName: "SwipingFingerstyled__SVGel",
    componentId: "sc-1be3zis-0"
})([
    "display:block;margin:auto;transform:rotate(-45deg);"
]);
exports.SVGel = SVGel;
var IconAndText = _styledComponents.default.div.withConfig({
    displayName: "SwipingFingerstyled__IconAndText",
    componentId: "sc-1be3zis-1"
})([
    "position:absolute;z-index:2;top:45vh;transition:opacity 500ms ease;width:100%;animation-name:",
    ";animation-iteration-count:",
    ";animation-fill-mode:forwards;animation-duration:1000ms;animation-timing-function:cubic-bezier(0.550,0.085,0.680,0.530);opacity:1;"
], function(props) {
    return props.showGuide ? showAnimation : hideAnimation;
}, function(props) {
    return props.showGuide ? "infinite" : "1";
});
exports.IconAndText = IconAndText;
var InfoText = _styledComponents.default.p.withConfig({
    displayName: "SwipingFingerstyled__InfoText",
    componentId: "sc-1be3zis-2"
})([
    "color:",
    ";text-align:center;"
], function(props) {
    return props.color;
});
exports.InfoText = InfoText;

},{}],"gr6hY":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ShareButtons;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var s = _interopRequireWildcard(require("./ShareButtons.styled"));
var _isUsingApp = require("../../../lib/isUsingApp");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function changeSomeButtonUrl(someHref) {
    var ref = _react.useRef(null);
    var setRef = _react.useCallback(function(node) {
        ref.current;
        if (node) // Check if a node is actually passed. Otherwise node would be null.
        // You can now do what you need to, addEventListeners, measure, etc.
        node.href = someHref; //change icon visibility - no icons in yle.fi app
         // Save a reference to the node
        ref.current = node;
    }, []);
    return [
        setRef
    ];
}
function closeMenu(setShowMenu, ref) {
    _react.useEffect(function() {
        //flips image opacity based on if text is in viewport
        var clickedOutsideMenu = function clickedOutsideMenu1(event) {
            if (ref.current !== null) {
                if (event.target !== ref.current && event.target.parentNode !== ref.current) setShowMenu(false);
            }
        };
        window.addEventListener("mouseup", clickedOutsideMenu, {
            passive: true
        });
        return function() {
            return window.removeEventListener("mouseup", clickedOutsideMenu);
        };
    }, []);
}
function ShareIcon(props) {
    var fill = props.fill;
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        height: "24",
        role: "img",
        viewBox: "0 0 24 24",
        width: "24"
    }, /*#__PURE__*/ _react.default.createElement(s.Path, {
        fill: fill,
        d: "M12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L6.29289 7.29289C5.90237 7.68342 5.90237 8.31658 6.29289 8.70711C6.68342 9.09763 7.31658 9.09763 7.70711 8.70711L11 5.41421V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V5.41421L16.2929 8.70711C16.6834 9.09763 17.3166 9.09763 17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L12.7071 2.29289ZM4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15V19C2 19.7956 2.31608 20.5587 2.87866 21.1213C3.44128 21.684 4.20437 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15V19C20 19.2652 19.8947 19.5195 19.7071 19.7071C19.5195 19.8947 19.2652 20 19 20H5C4.73477 20 4.48043 19.8946 4.29292 19.7071C4.10534 19.5195 4 19.2652 4 19V15Z"
    })));
}
var Twitter = function Twitter1() {
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        "aria-label": "",
        fill: "#000000",
        height: "24",
        role: "img",
        viewBox: "0 0 24 24",
        width: "24"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M23.1539 5.13092C22.3301 5.49231 21.4523 5.73185 20.537 5.84815C21.4786 5.286 22.1972 4.40262 22.535 3.33785C21.6572 3.86123 20.6879 4.23092 19.655 4.43723C18.8215 3.54969 17.6335 3 16.3375 3C13.823 3 11.7987 5.04092 11.7987 7.54292C11.7987 7.90292 11.8292 8.24908 11.9039 8.57862C8.1281 8.39446 4.78702 6.58477 2.54256 3.828C2.15072 4.50785 1.92087 5.286 1.92087 6.12369C1.92087 7.69662 2.73087 9.09092 3.93825 9.89815C3.20856 9.88431 2.49272 9.67246 1.88625 9.33877C1.88625 9.35262 1.88625 9.37062 1.88625 9.38862C1.88625 11.5957 3.46056 13.4289 5.52502 13.8512C5.15533 13.9523 4.75241 14.0008 4.33425 14.0008C4.04348 14.0008 3.74995 13.9842 3.47441 13.9232C4.06287 15.7218 5.73272 17.0442 7.71825 17.0871C6.17302 18.2958 4.21102 19.0242 2.08702 19.0242C1.82417 19.0242 1.70746 19.3895 1.93968 19.5126C3.73883 20.4667 5.78588 21 7.96748 21C16.325 21 20.8943 14.0769 20.8943 8.076C20.8943 7.87523 20.8873 7.68139 20.8776 7.48892C21.779 6.84923 22.5364 6.05031 23.1539 5.13092Z"
    })));
};
var Facebook = function Facebook1() {
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        "aria-label": "",
        fill: "#000000",
        height: "24",
        role: "img",
        viewBox: "0 0 24 24",
        width: "24"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M15.286 3H14.07c-2.18 0-3.65 1.31-3.64 3.643V9.07H8v2.43h2.42l.009 8.5h2.428v-8.5h2.064l.365-2.429h-2.429V6.984c0-1.555.694-1.555 1.85-1.555h.579V3z"
    })));
};
var Whatsapp = function Whatsapp1() {
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        "aria-label": "",
        fill: "#000000",
        height: "24",
        role: "img",
        viewBox: "0 0 24 24",
        width: "24"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M19.1939 4.80609C17.3844 2.99652 14.9785 2 12.4194 2C9.86035 2 7.45441 2.99652 5.64484 4.80609C3.83527 6.61566 2.83879 9.02152 2.83879 11.5806C2.83879 13.2016 3.24914 14.7946 4.02805 16.2057L2 22L7.79426 19.972C9.20535 20.7508 10.7983 21.1612 12.4194 21.1612C14.9784 21.1612 17.3844 20.1646 19.1939 18.3551C21.0034 16.5456 22 14.1397 22 11.5806C22 9.02148 21.0034 6.61562 19.1939 4.80609ZM17.1557 15.1396L16.0496 16.2457C15.1334 17.162 12.5336 16.0478 10.2429 13.7571C7.95219 11.4664 6.83801 8.86668 7.7543 7.95039L8.86031 6.84438C9.08938 6.61531 9.46078 6.61531 9.68984 6.84438L11.0724 8.22691C11.3014 8.45598 11.3014 8.82738 11.0724 9.05645L10.2429 9.88598C11.0475 11.5847 12.4153 12.9525 14.114 13.7571L14.9436 12.9276C15.1726 12.6985 15.544 12.6985 15.7731 12.9276L17.1556 14.3101C17.3847 14.5392 17.3847 14.9106 17.1557 15.1396Z"
    })));
};
var LinkedIn = function LinkedIn1() {
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        "aria-label": "",
        fill: "#000000",
        height: "24",
        role: "img",
        viewBox: "0 0 24 24",
        width: "24"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M2.3999 4.7039C2.3999 3.4319 3.4319 2.3999 4.7039 2.3999C5.9759 2.3999 7.0079 3.4319 7.0079 4.7039C7.0079 5.9759 5.9759 7.0319 4.7039 7.0319C3.4319 7.0319 2.3999 5.9759 2.3999 4.7039ZM16.8239 8.47192C20.8559 8.47192 21.5999 11.0867 21.5999 14.5679L21.7447 20.5517C21.7583 21.1133 21.3068 21.5759 20.745 21.5759H18.6159C18.0636 21.5759 17.6159 21.1282 17.6159 20.5759V15.3359C17.6159 13.8479 17.5919 11.9519 15.5519 11.9519C13.4879 11.9519 13.1759 13.5599 13.1759 15.2399V20.5999C13.1759 21.1522 12.7282 21.5999 12.1759 21.5999H10.1919C9.63962 21.5999 9.19189 21.1522 9.19189 20.5999V9.78392C9.19189 9.23164 9.63962 8.78392 10.1919 8.78392H12.0079C12.5602 8.78392 13.0079 9.23164 13.0079 9.78392V10.5359H13.0559C13.5839 9.52793 14.8799 8.47192 16.8239 8.47192ZM2.71191 9.78394C2.71191 9.23165 3.15963 8.78394 3.71191 8.78394H5.69591C6.2482 8.78394 6.69591 9.23165 6.69591 9.78394V20.5999C6.69591 21.1522 6.2482 21.5999 5.69591 21.5999H3.71191C3.15963 21.5999 2.71191 21.1522 2.71191 20.5999V9.78394Z"
    })));
};
var Email = function Email1() {
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        "aria-label": "",
        fill: "#000000",
        height: "24",
        role: "img",
        viewBox: "0 0 24 24",
        width: "24"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M1 5.99732L1 18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.01662L23.0001 6.00217C23.0002 5.99397 23.0001 5.98577 22.9999 5.97757C22.9878 4.33554 21.6448 3 20 3H4C2.34861 3 1.00146 4.34626 1 5.99732ZM3.10657 5.55396C3.27195 5.22693 3.61203 5 4 5H20C20.388 5 20.7281 5.22696 20.8935 5.55404L12.0001 11.7794L3.10657 5.55396ZM21 7.92077V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92069L11.4266 13.8193C11.7709 14.0603 12.2292 14.0603 12.5735 13.8193L21 7.92077Z"
    })));
};
var Copy = function Copy1() {
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        "aria-label": "",
        fill: "#000000",
        height: "24",
        role: "img",
        viewBox: "0 0 24 24",
        width: "24"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M3.17157 9.17157C3.92172 8.42143 4.93913 8 6 8H9C9.55229 8 10 7.55228 10 7C10 6.44772 9.55229 6 9 6H6C4.4087 6 2.88258 6.63214 1.75736 7.75736C0.632141 8.88258 0 10.4087 0 12C0 13.5913 0.632141 15.1174 1.75736 16.2426C2.31451 16.7998 2.97595 17.2417 3.7039 17.5433C4.43185 17.8448 5.21207 18 6 18H9C9.55229 18 10 17.5523 10 17C10 16.4477 9.55229 16 9 16H6C5.47471 16 4.95457 15.8965 4.46927 15.6955C3.98396 15.4945 3.54301 15.1999 3.17157 14.8284C2.42143 14.0783 2 13.0609 2 12C2 10.9391 2.42143 9.92172 3.17157 9.17157ZM15 6C14.4477 6 14 6.44772 14 7C14 7.55228 14.4477 8 15 8H18C18.5253 8 19.0454 8.10346 19.5307 8.30448C20.016 8.5055 20.457 8.80014 20.8284 9.17157C21.1999 9.54301 21.4945 9.98396 21.6955 10.4693C21.8965 10.9546 22 11.4747 22 12C22 12.5253 21.8965 13.0454 21.6955 13.5307C21.4945 14.016 21.1999 14.457 20.8284 14.8284C20.457 15.1999 20.016 15.4945 19.5307 15.6955C19.0454 15.8965 18.5253 16 18 16H15C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18H18C18.7879 18 19.5681 17.8448 20.2961 17.5433C21.0241 17.2417 21.6855 16.7998 22.2426 16.2426C22.7998 15.6855 23.2417 15.0241 23.5433 14.2961C23.8448 13.5681 24 12.7879 24 12C24 11.2121 23.8448 10.4319 23.5433 9.7039C23.2417 8.97595 22.7998 8.31451 22.2426 7.75736C21.6855 7.20021 21.0241 6.75825 20.2961 6.45672C19.5681 6.15519 18.7879 6 18 6H15ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
    })));
};
var copyToClipboard = function copyToClipboard1(str) {
    var el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
function ShareButtons(props) {
    var eskoHeadline = props.eskoHeadline, eskoLead = props.eskoLead, uutisetOrUrheilu = props.uutisetOrUrheilu;
    var _useState = _react.useState(false), _useState2 = _slicedToArray2.default(_useState, 2), showMenu = _useState2[0], setShowMenu = _useState2[1];
    var currentUrl = window.location.href;
    var shareWhatsapp = currentUrl + "?utm_source=whatsapp-share&utm_medium=social";
    var whatsappCopy = eskoHeadline;
    var whatsappHref = "whatsapp://send?text=" + encodeURIComponent(whatsappCopy) + encodeURIComponent(' ') + shareWhatsapp + "&display=popup&ref=plugin&src=like&kid_directed_site=0";
    var _changeSomeButtonUrl = changeSomeButtonUrl(whatsappHref), _changeSomeButtonUrl2 = _slicedToArray2.default(_changeSomeButtonUrl, 1), whatsappEl = _changeSomeButtonUrl2[0];
    var shareTwitter = currentUrl + "?utm_source=twitter-share&utm_medium=social";
    var twitterCopy = uutisetOrUrheilu == "uutiset" ? eskoHeadline + " #yleuutiset" : eskoHeadline + " #yleurheilu";
    var twitterHref = "https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent(shareTwitter) + "&ref_src=twsrc%5Etfw&text=" + encodeURIComponent(twitterCopy) + "&tw_p=tweetbutton&url=" + encodeURIComponent(shareTwitter);
    var _changeSomeButtonUrl3 = changeSomeButtonUrl(twitterHref), _changeSomeButtonUrl4 = _slicedToArray2.default(_changeSomeButtonUrl3, 1), twitterEl = _changeSomeButtonUrl4[0];
    var facebookHref = "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(currentUrl), "&display=popup&ref=plugin&src=like&kid_directed_site=0");
    var _changeSomeButtonUrl5 = changeSomeButtonUrl(facebookHref), _changeSomeButtonUrl6 = _slicedToArray2.default(_changeSomeButtonUrl5, 1), facebookEl = _changeSomeButtonUrl6[0];
    var linkedInHref = "https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURIComponent(currentUrl));
    var _changeSomeButtonUrl7 = changeSomeButtonUrl(linkedInHref), _changeSomeButtonUrl8 = _slicedToArray2.default(_changeSomeButtonUrl7, 1), linkedInEl = _changeSomeButtonUrl8[0];
    var emailHref = "mailto:?subject=".concat(encodeURIComponent(eskoHeadline), "&body=").concat(encodeURIComponent(eskoLead), "%0D%0A%0D%0A").concat(encodeURIComponent(currentUrl));
    var _changeSomeButtonUrl9 = changeSomeButtonUrl(emailHref), _changeSomeButtonUrl10 = _slicedToArray2.default(_changeSomeButtonUrl9, 1), emailEl = _changeSomeButtonUrl10[0];
    var shareMenu = _react.useRef(null);
    closeMenu(setShowMenu, shareMenu);
    return(/*#__PURE__*/ _react.default.createElement(s.ShareButtonsContainer, {
        isUsingApp: _isUsingApp.isUsingApp()
    }, /*#__PURE__*/ _react.default.createElement(s.ShareButton, {
        onClick: function onClick() {
            return setShowMenu(!showMenu);
        }
    }, /*#__PURE__*/ _react.default.createElement(ShareIcon, {
        fill: window.matchMedia('(prefers-color-scheme: dark)').matches ? window.plusFeature.dark.color : window.plusFeature.light.color
    })), /*#__PURE__*/ _react.default.createElement(s.ShareNavi, {
        showMenu: showMenu,
        ref: shareMenu
    }, /*#__PURE__*/ _react.default.createElement(s.Ul, {
        role: "menubar",
        "aria-label": "Jaa artikkeli"
    }, /*#__PURE__*/ _react.default.createElement(s.Li, {
        role: "none"
    }, /*#__PURE__*/ _react.default.createElement(s.Link, {
        ref: twitterEl,
        target: "_blank",
        href: "",
        role: "menuitem",
        "aria-label": "Jaa artikkeli Twitteriss\xE4"
    }, /*#__PURE__*/ _react.default.createElement(s.SVGandText, null, /*#__PURE__*/ _react.default.createElement(Twitter, null), /*#__PURE__*/ _react.default.createElement(s.SomeText, null, "Twitter")))), /*#__PURE__*/ _react.default.createElement(s.Li, {
        role: "none"
    }, /*#__PURE__*/ _react.default.createElement(s.Link, {
        ref: facebookEl,
        target: "_blank",
        role: "menuitem",
        "aria-label": "Jaa artikkeli Facebookissa"
    }, /*#__PURE__*/ _react.default.createElement(s.SVGandText, null, /*#__PURE__*/ _react.default.createElement(Facebook, null), /*#__PURE__*/ _react.default.createElement(s.SomeText, null, "Facebook")))), /*#__PURE__*/ _react.default.createElement(s.Li, {
        role: "none"
    }, /*#__PURE__*/ _react.default.createElement(s.Link, {
        ref: whatsappEl,
        role: "menuitem",
        "aria-label": "Jaa artikkeli Whatsappissa"
    }, /*#__PURE__*/ _react.default.createElement(s.SVGandText, null, /*#__PURE__*/ _react.default.createElement(Whatsapp, null), /*#__PURE__*/ _react.default.createElement(s.SomeText, null, "Whatsapp")))), /*#__PURE__*/ _react.default.createElement(s.Li, {
        role: "none"
    }, /*#__PURE__*/ _react.default.createElement(s.Link, {
        ref: linkedInEl,
        target: "_blank",
        role: "menuitem",
        "aria-label": "Jaa artikkeli Linkediniss\xE4"
    }, /*#__PURE__*/ _react.default.createElement(s.SVGandText, null, /*#__PURE__*/ _react.default.createElement(LinkedIn, null), /*#__PURE__*/ _react.default.createElement(s.SomeText, null, "Linkedin")))), /*#__PURE__*/ _react.default.createElement(s.Li, {
        role: "none"
    }, /*#__PURE__*/ _react.default.createElement(s.Link, {
        ref: emailEl,
        role: "menuitem",
        "aria-label": "Jaa artikkeli s\xE4hk\xF6postilla"
    }, /*#__PURE__*/ _react.default.createElement(s.SVGandText, null, /*#__PURE__*/ _react.default.createElement(Email, null), /*#__PURE__*/ _react.default.createElement(s.SomeText, null, "S\xE4hk\xF6posti")))), /*#__PURE__*/ _react.default.createElement(s.Li, {
        role: "none"
    }, /*#__PURE__*/ _react.default.createElement(s.Link, {
        onClick: function onClick() {
            return copyToClipboard(currentUrl);
        },
        role: "menuitem",
        "aria-label": "Kopioi linkki"
    }, /*#__PURE__*/ _react.default.createElement(s.SVGandText, null, /*#__PURE__*/ _react.default.createElement(Copy, null), /*#__PURE__*/ _react.default.createElement(s.SomeText, null, "Kopioi linkki"))))))));
}

},{"./ShareButtons.styled":"ggNx4","../../../lib/isUsingApp":"ezM1b"}],"ggNx4":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Path = exports.SomeText = exports.SVGandText = exports.Link = exports.Li = exports.Ul = exports.ShareNavi = exports.OnlyMobileLink = exports.ShareButton = exports.ShareButtonsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ShareButtonsContainer = _styledComponents.default.div.withConfig({
    displayName: "ShareButtonsstyled__ShareButtonsContainer",
    componentId: "sc-1v26wqy-0"
})([
    "padding-right:10px;text-align:center;margin-bottom:13px;position:relative;display:",
    ";"
], function(props) {
    return props.isUsingApp ? "none" : "flex";
});
exports.ShareButtonsContainer = ShareButtonsContainer;
var ShareButton = _styledComponents.default.button.withConfig({
    displayName: "ShareButtonsstyled__ShareButton",
    componentId: "sc-1v26wqy-1"
})([
    "width:48px;height:48px;margin:auto;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border:none;background-color:transparent;cursor:pointer;"
]);
exports.ShareButton = ShareButton;
var OnlyMobileLink = _styledComponents.default.a.withConfig({
    displayName: "ShareButtonsstyled__OnlyMobileLink",
    componentId: "sc-1v26wqy-2"
})([
    "display:none;@media only screen and (max-width:700px){display:block;}"
]);
exports.OnlyMobileLink = OnlyMobileLink;
var ShareNavi = _styledComponents.default.nav.withConfig({
    displayName: "ShareButtonsstyled__ShareNavi",
    componentId: "sc-1v26wqy-3"
})([
    "background:rgb(255,255,255);border-radius:8px;box-shadow:rgb(0 0 0 / 30%) 0px 1px 8px;position:absolute;top:48px;left:50%;transition:opacity 0.4s ease 0s,transform 0.4s ease 0s,visibility 0.4s ease 0s;z-index:75;opacity:1;visibility:",
    ";transform:translateY(0px);"
], function(props) {
    return props.showMenu ? "visible" : "hidden";
});
exports.ShareNavi = ShareNavi;
var Ul = _styledComponents.default.ul.withConfig({
    displayName: "ShareButtonsstyled__Ul",
    componentId: "sc-1v26wqy-4"
})([
    "list-style-type:none;"
]);
exports.Ul = Ul;
var Li = _styledComponents.default.li.withConfig({
    displayName: "ShareButtonsstyled__Li",
    componentId: "sc-1v26wqy-5"
})([
    "display:list-item;text-align:-webkit-match-parent;&:first-child{border-top-left-radius:8px;border-top-right-radius:8px;}&:hover{background:rgba(235,235,238,.6);}"
]);
exports.Li = Li;
var Link = _styledComponents.default.a.withConfig({
    displayName: "ShareButtonsstyled__Link",
    componentId: "sc-1v26wqy-6"
})([
    "cursor:pointer;text-decoration:none;user-select:none;color:inherit;"
]);
exports.Link = Link;
var SVGandText = _styledComponents.default.div.withConfig({
    displayName: "ShareButtonsstyled__SVGandText",
    componentId: "sc-1v26wqy-7"
})([
    "-webkit-box-align:center;align-items:center;border-bottom:1px solid rgb(232,233,235);display:flex;padding:16px 0px;margin:0px 16px;width:140px;"
]);
exports.SVGandText = SVGandText;
var SomeText = _styledComponents.default.span.withConfig({
    displayName: "ShareButtonsstyled__SomeText",
    componentId: "sc-1v26wqy-8"
})([
    "color:rgb(0,0,0);font-size:12px;padding-left:16px;font-family:\"Open Sans\",sans-serif;font-weight:400;"
]);
exports.SomeText = SomeText;
var Path = _styledComponents.default.path.withConfig({
    displayName: "ShareButtonsstyled__Path",
    componentId: "sc-1v26wqy-9"
})([
    ""
]);
exports.Path = Path;

},{}],"hqATt":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var s = _interopRequireWildcard(require("./ProgressBar.styled.js"));
var _isUsingApp = require("../../../lib/isUsingApp");
var _viewportFunctions = require("../../../lib/viewportFunctions");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function scrollFunction(querySelector) {
    var _useState = _react.useState(false), _useState2 = _slicedToArray2.default(_useState, 2), scrollProgress = _useState2[0], setScrollProgress = _useState2[1];
    _react.useEffect(function() {
        var progressInQuery = function progressInQuery1(querySelector1) {
            var el = document.querySelector(querySelector1);
            if (el !== null) {
                var commentsEl = document.querySelector("#yle-comments-plugin");
                var commentsHeight = commentsEl !== null ? commentsEl.getBoundingClientRect().height : 0;
                var progress = window.scrollY / (el["scrollHeight"] - _viewportFunctions.viewportSize("height") - commentsHeight);
                progress = progress * 100;
                progress = progress < 100 ? progress + "%" : "100%";
                setScrollProgress(progress);
            }
        }; //document.getElementById("app").addEventListener("scroll", () => progressInQuery(querySelector), { passive: true });
        window.addEventListener("scroll", function() {
            return progressInQuery(querySelector);
        }, {
            passive: true
        }); //return () => document.getElementById("app").removeEventListener("scroll", progressInQuery);
        return function() {
            return window.removeEventListener("scroll", progressInQuery);
        };
    }, [
        scrollProgress
    ]);
    return scrollProgress;
}
function ProgressBar(props) {
    var color = props.color, querySelector = props.querySelector;
    var scrollProgress = scrollFunction(querySelector);
    var mainElement = document.querySelector(querySelector);
    var progressInMain = document.querySelector(querySelector + " > .featureProgressBar");
    var progressElement = document.querySelector(".featureProgressBar");
    progressElement !== null && progressInMain == null && mainElement.appendChild(progressElement); //no margin in Yle.fi app
    var marginTop = _isUsingApp.isUsingApp() ? "0px" : "50px";
    return(/*#__PURE__*/ _react.default.createElement(s.Bar, {
        className: "featureProgressBar",
        style: {
            width: scrollProgress,
            top: marginTop
        },
        color: color
    }));
}
var _default = ProgressBar;
exports.default = _default;

},{"./ProgressBar.styled.js":"lMELr","../../../lib/isUsingApp":"ezM1b","../../../lib/viewportFunctions":"3INVk"}],"lMELr":[function(require,module,exports) {
"use strict";
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bar = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
var Bar = _styledComponents.default.div.withConfig({
    displayName: "ProgressBarstyled__Bar",
    componentId: "sc-1tottba-0"
})([
    "width:",
    ";background-color:",
    ";height:3px;position:fixed;z-index:100;backface-visibility:hidden;-webkit-backface-visibility:hidden;width:500ms ease-in-out;"
], function(props) {
    return props.currentProgress;
}, function(props) {
    return props.color;
});
exports.Bar = Bar;

},{}],"lgSAr":[function() {},{}],"6xvMG":[function() {},{}],"iWQvO":[function() {},{}],"69fjZ":[function() {},{}],"8Wz8L":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var s = _interopRequireWildcard(require("./darkSoulHeroText.styled.js"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function DarkSoulHeroText(props) {
    return(/*#__PURE__*/ _react.default.createElement(s.FullWidthContainer, null, /*#__PURE__*/ _react.default.createElement(s.Container, {
        isMobile: props.isMobile
    }, /*#__PURE__*/ _react.default.createElement(s.Symbol, {
        isMobile: props.isMobile
    }, /*#__PURE__*/ _react.default.createElement("img", {
        src: "https://lusi-dataviz.ylestatic.fi/2020-11-featurepohja/fynd/kc-logo.png"
    })), /*#__PURE__*/ _react.default.createElement("h1", {
        dangerouslySetInnerHTML: {
            __html: props.text
        }
    }))));
}
var _default = DarkSoulHeroText;
exports.default = _default;

},{"./darkSoulHeroText.styled.js":"1h8MB"}],"1h8MB":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Symbol = exports.FullWidthContainer = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var Container = _styledComponents.default.div.withConfig({
    displayName: "darkSoulHeroTextstyled__Container",
    componentId: "sc-114vyj9-0"
})([
    "display:flex;z-index:2;flex-direction:column;font-weight:bold;max-width:600px;height:100%;& h1{line-height:1.1;font-size:40px;font-weight:bold;font-family:'EB Garamond';position:absolute;top:50%;left:0;transform:translateY(-50%);text-align:center;width:100%;text-align:center;& span{display:block;}",
    "}"
], function(props) {
    return !props.isMobile && "\n    font-size: 5em;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    ";
});
exports.Container = Container;
var FullWidthContainer = _styledComponents.default.div.withConfig({
    displayName: "darkSoulHeroTextstyled__FullWidthContainer",
    componentId: "sc-114vyj9-1"
})([
    "display:flex;justify-content:center;align-items:center;width:100%;height:100%;position:absolute;"
]);
exports.FullWidthContainer = FullWidthContainer;
var _Symbol = _styledComponents.default.div.withConfig({
    displayName: "darkSoulHeroTextstyled___Symbol",
    componentId: "sc-114vyj9-2"
})([
    "z-index:2;margin-bottom:50px;display:block;& img{height:5vh;",
    "}"
], function(props) {
    return props.isMobile ? "padding-top: 12vh" : "padding-top: 14px";
});
exports.Symbol = _Symbol;

},{}],"giCOI":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _isDeviceMobile = require("../../lib/isDeviceMobile");
var s = _interopRequireWildcard(require("./scollingVideo.styled"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
ScrollingVideo.propTypes = {
    url: _propTypes.default.string.isRequired
};
var disableScroll = true;
function ScrollingVideo(props) {
    var videoRef = _react.useRef();
    var heightSetterRef = _react.useRef();
    var _useState = _react.useState(null), _useState2 = _slicedToArray2.default(_useState, 2), height = _useState2[0], setHeight = _useState2[1];
    var _useState3 = _react.useState(false), _useState4 = _slicedToArray2.default(_useState3, 2), showTitle = _useState4[0], setShowTitle = _useState4[1];
    var playbackConst = 500; // lower the number, faster the playback.
    var limitedScrolling = ScrollingSpeedLimiter();
    _react.useEffect(function() {
        var vid = videoRef.current;
        if (!vid) return;
        vid.loop = props.delay === null || !props.delay;
        var isMounted = true;
        if (props.delay) {
            vid.addEventListener('ended', endHandler, false);
            function endHandler(e) {
                setTimeout(function() {
                    vid.play();
                }, parseInt(props.delay) * 1000);
            }
        }
        var e;
        vid.addEventListener('loadedmetadata', function() {
            // play & pause needed to make video visible in mobile devices
            if (disableScroll) {
                if (props.isHeader) {
                    if (document.readyState === 'complete') vid.play();
                    else window.addEventListener('load', function() {
                        return vid.play();
                    });
                }
                setHeight(window.innerHeight);
                return;
            }
            if (isMounted) setHeight(Math.floor(vid.duration) * playbackConst + window.innerHeight);
            vid.play();
            vid.pause();
            scrollPlay({
                videoRef: videoRef,
                heightSetterRef: heightSetterRef,
                playbackConst: playbackConst,
                limitedScrolling: limitedScrolling
            });
        });
        return function() {
            isMounted = false;
        };
    }, [
        videoRef.current
    ]);
    return(/*#__PURE__*/ _react.default.createElement(s.HeightSetter, {
        ref: heightSetterRef,
        height: height || "100vh"
    }, /*#__PURE__*/ _react.default.createElement(s.StickyHolder, null, props.children, /*#__PURE__*/ _react.default.createElement(s.VideoElement, {
        ref: videoRef,
        preload: "auto",
        muted: true,
        autoPlay: !props.isHeader,
        disableRemotePlayback: true,
        type: "video/mp4",
        src: props.url,
        playsInline: true,
        style: {
            height: '99vh'
        }
    }))));
}
function scrollPlay(params) {
    var videoRef = params.videoRef, heightSetterRef = params.heightSetterRef, playbackConst = params.playbackConst, limitedScrolling = params.limitedScrolling;
    var vid = videoRef.current;
    if (!vid || !heightSetterRef.current) return;
    var frameNumber = checkHeight(heightSetterRef.current.offsetTop, frameNumber || 0, playbackConst);
    var jumpInVideo = function jumpInVideo1(time) {
        vid.currentTime = time;
    };
    var videoAboveViewport = frameNumber > vid.duration + 1;
    var videoBelowViewport = frameNumber < 0;
    if (videoAboveViewport || videoBelowViewport) {
        if (videoBelowViewport) {
            limitedScrolling.reset(0);
            jumpInVideo(0);
        }
        if (videoAboveViewport) {
            limitedScrolling.reset(vid.duration);
            jumpInVideo(vid.duration);
        }
        window.setTimeout(function() {
            window.requestAnimationFrame(function() {
                return scrollPlay(params);
            });
        }, 100);
        return;
    }
    var capped = limitedScrolling.set(frameNumber, vid.duration);
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    var throttledFirefox = throttle(40); // This is used to throttle jumps in video in FF
    var throttledMobile = throttle(50); // This is used to throttle jumps in video in Mobile
    var throttledWindowCheck = throttle(500); // For testing purposes, e.g. console.logging
    if (isFirefox || _isDeviceMobile.isDeviceMobile()) isFirefox ? throttledFirefox(function() {
        return jumpInVideo(capped);
    }) : throttledMobile(function() {
        return jumpInVideo(capped);
    });
    else jumpInVideo(capped);
    window.requestAnimationFrame(function() {
        return scrollPlay(params);
    });
}
function throttle(delay) {
    var timeoutHandler = null;
    return function(callback) {
        if (timeoutHandler == null) timeoutHandler = setTimeout(function() {
            callback();
            timeoutHandler = null;
        }, delay);
    };
}
function checkHeight(elementYOffset, frameNumber, playbackConst) {
    var scrollLine = window.pageYOffset;
    var howMuchScrolled = scrollLine - elementYOffset === 0 ? 1 : scrollLine - elementYOffset;
    var frame = howMuchScrolled / playbackConst;
    return frame;
}
function ScrollingSpeedLimiter() {
    var previousFrameNumber;
    var differenceTwoNumbers = function differenceTwoNumbers1(a, b) {
        return Math.abs(a - b);
    };
    return {
        set: function set(frameNumber, vidDuration) {
            previousFrameNumber = previousFrameNumber > 0 ? previousFrameNumber : 0;
            var diff = differenceTwoNumbers(frameNumber, previousFrameNumber);
            var acceptedDiff = 0.04;
            if (diff > acceptedDiff) {
                if (frameNumber > previousFrameNumber) frameNumber = previousFrameNumber + acceptedDiff;
                else frameNumber = previousFrameNumber - acceptedDiff;
            }
            if (frameNumber > vidDuration - 0.1) frameNumber = vidDuration - 0.1;
            if (frameNumber < 0) frameNumber = 0;
            previousFrameNumber = frameNumber;
            return frameNumber;
        },
        reset: function reset(time) {
            previousFrameNumber = time;
        }
    };
}
var _default = ScrollingVideo;
exports.default = _default;

},{"../../lib/isDeviceMobile":"8wcmx","./scollingVideo.styled":"dY5RF"}],"dY5RF":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StickyHolder = exports.VideoElement = exports.HeightSetter = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var HeightSetter = _styledComponents.default.div.withConfig({
    displayName: "scollingVideostyled__HeightSetter",
    componentId: "sc-1mx814v-0"
})([
    "height:",
    "px;z-index:99999;"
], function(props) {
    return props.height;
});
exports.HeightSetter = HeightSetter;
var VideoElement = _styledComponents.default.video.withConfig({
    displayName: "scollingVideostyled__VideoElement",
    componentId: "sc-1mx814v-1"
})([
    "width:100%;"
]);
exports.VideoElement = VideoElement;
var StickyHolder = _styledComponents.default.div.withConfig({
    displayName: "scollingVideostyled__StickyHolder",
    componentId: "sc-1mx814v-2"
})([
    "position:sticky;top:0;left:0;"
]);
exports.StickyHolder = StickyHolder;

},{}],"alsUl":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DarkSoulShareButtons = void 0;
var _react = _interopRequireDefault(require("react"));
require("./darksoulShareButtons.css");
function Twitter(props) {
    var fill = props.fill;
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M33.75 17.1611C33.75 26.1357 26.4745 33.4111 17.5 33.4111C8.52545 33.4111 1.25 26.1357 1.25 17.1611C1.25 8.18659 8.52545 0.911133 17.5 0.911133C26.4745 0.911133 33.75 8.18659 33.75 17.1611Z",
        stroke: fill,
        strokeWidth: "1.5"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M24.2959 12.2168C25.0861 11.7428 25.6206 11.073 25.8987 10.2074C25.1765 10.6364 24.4047 10.9295 23.5847 11.088C22.8625 10.3202 21.9744 9.93604 20.9204 9.93604C19.912 9.93604 19.0525 10.2917 18.3412 11.003C17.6299 11.7142 17.2743 12.5744 17.2743 13.5829C17.2743 13.8535 17.3042 14.1323 17.3647 14.4179C15.8741 14.3431 14.476 13.9684 13.1704 13.2946C11.8648 12.6214 10.7564 11.7238 9.84593 10.6024C9.51477 11.1668 9.34953 11.7802 9.34953 12.4425C9.34953 13.0674 9.49573 13.6468 9.78949 14.1813C10.0832 14.7158 10.4783 15.1482 10.9747 15.4794C10.3879 15.457 9.83845 15.3026 9.32641 15.0163V15.0619C9.32641 15.9425 9.60317 16.7156 10.1567 17.3814C10.7095 18.0478 11.4072 18.4673 12.2504 18.64C11.9342 18.723 11.6146 18.7645 11.2909 18.7645C11.0801 18.7645 10.851 18.7454 10.6021 18.708C10.8353 19.4384 11.2644 20.0381 11.8893 20.5087C12.5136 20.9792 13.2214 21.222 14.0116 21.237C12.687 22.2753 11.178 22.7948 9.48485 22.7948C9.16117 22.7948 8.86741 22.7799 8.60425 22.7493C10.2974 23.8407 12.164 24.386 14.2034 24.386C15.4981 24.386 16.7132 24.1814 17.8502 23.7713C18.9865 23.3613 19.9569 22.8118 20.7626 22.123C21.5678 21.4342 22.2621 20.642 22.8455 19.7464C23.4283 18.8508 23.8628 17.9158 24.149 16.9414C24.4353 15.967 24.5781 14.9905 24.5781 14.012C24.5781 13.8012 24.574 13.6434 24.5666 13.5373C25.2819 13.0185 25.8912 12.3902 26.3958 11.6524C25.6961 11.9536 24.9957 12.1413 24.2959 12.2168Z",
        fill: fill
    })));
}
function Facebook(props) {
    var fill = props.fill;
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M33.75 17.1611C33.75 26.1309 26.4698 33.4111 17.5 33.4111C8.53021 33.4111 1.25 26.1309 1.25 17.1611C1.25 8.19135 8.53021 0.911133 17.5 0.911133C26.4698 0.911133 33.75 8.19135 33.75 17.1611Z",
        stroke: fill,
        strokeWidth: "1.5"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M19.8119 7.77734C18.5199 7.77734 17.4999 8.18534 16.6839 8.93334C15.8679 9.68134 15.5279 10.7693 15.5279 12.1973V14.6453H12.6719V17.9773H15.5279V26.5453H18.9959V17.9773H21.8519L22.2599 14.6453H18.9279V12.5373C18.9279 11.9933 19.0639 11.5853 19.2679 11.3133C19.4719 11.0413 19.9479 10.9053 20.5599 10.9053H22.3279V7.91334C21.7839 7.84534 20.8999 7.77734 19.8119 7.77734Z",
        fill: fill
    })));
}
function Whatsapp(props) {
    var fill = props.fill;
    return(/*#__PURE__*/ _react.default.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.default.createElement("path", {
        d: "M12.6124 26.2815L12.3572 26.1441L12.076 26.2139L7.26424 27.4087L8.55242 22.8109L8.63654 22.5107L8.48302 22.2393C7.61042 20.6967 7.15063 18.9416 7.15063 17.161C7.15063 11.4572 11.7963 6.81152 17.5001 6.81152C23.2039 6.81152 27.8495 11.4572 27.8495 17.161C27.8495 22.8648 23.2039 27.5104 17.5001 27.5104C15.7941 27.5104 14.1095 27.0879 12.6124 26.2815Z",
        stroke: fill,
        strokeWidth: "1.5"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M23.0854 21.0769C22.8456 21.734 21.7091 22.3334 21.1585 22.4133C20.6702 22.4888 20.0486 22.5199 19.3649 22.3023C18.952 22.1736 18.4192 22.0004 17.7399 21.7118C14.8807 20.4909 13.016 17.6494 12.8739 17.463C12.7318 17.2765 11.7107 15.9357 11.7107 14.5505C11.7107 13.1697 12.4432 12.486 12.7052 12.2063C12.9671 11.9221 13.2779 11.8511 13.4688 11.8511C13.6553 11.8511 13.8462 11.8555 14.0149 11.8644C14.1881 11.8733 14.4234 11.7978 14.6543 12.3439C14.894 12.9077 15.4623 14.293 15.5333 14.435C15.6044 14.5771 15.6488 14.7414 15.5555 14.9278C15.4623 15.1143 15.4135 15.2342 15.2714 15.3985C15.1293 15.5627 14.9739 15.767 14.8452 15.8913C14.7031 16.0334 14.5521 16.1843 14.7208 16.464C14.8851 16.7482 15.4579 17.6672 16.3059 18.4131C17.3936 19.3721 18.3126 19.6695 18.5968 19.8116C18.8809 19.9537 19.0452 19.927 19.2139 19.7406C19.3782 19.5541 19.9243 18.9192 20.1152 18.6395C20.3061 18.3554 20.4926 18.4042 20.7545 18.4974C21.0164 18.5907 22.4194 19.27 22.7036 19.412C22.9877 19.5541 23.1786 19.6251 23.2497 19.7406C23.3207 19.856 23.3207 20.4199 23.0854 21.0769Z",
        fill: fill
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M33.75 17.1611C33.75 26.1309 26.4698 33.4111 17.5 33.4111C8.53021 33.4111 1.25 26.1309 1.25 17.1611C1.25 8.19135 8.53021 0.911133 17.5 0.911133C26.4698 0.911133 33.75 8.19135 33.75 17.1611Z",
        stroke: fill,
        strokeWidth: "1.5"
    })));
}
var DarkSoulShareButtons = function DarkSoulShareButtons1(props) {
    var iconColor = props.iconColor; //make dynamic!
    var url = typeof window !== "undefined" ? "https://yle.fi" : "https://yle.fi";
    return(/*#__PURE__*/ _react.default.createElement("div", {
        className: "social-container ".concat(props.centered ? "centered" : "")
    }, /*#__PURE__*/ _react.default.createElement("a", {
        href: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
        target: "_blank"
    }, /*#__PURE__*/ _react.default.createElement(Facebook, {
        fill: iconColor
    })), /*#__PURE__*/ _react.default.createElement("a", {
        href: "https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent(url) + "&ref_src=twsrc%5Etfw&text=" + encodeURIComponent("") + "&tw_p=tweetbutton&url=" + encodeURIComponent(url),
        target: "_blank"
    }, /*#__PURE__*/ _react.default.createElement(Twitter, {
        fill: iconColor
    })), /*#__PURE__*/ _react.default.createElement("a", {
        href: "whatsapp://send?text=" + encodeURIComponent("") + encodeURIComponent(url) + "&display=popup&ref=plugin&src=like&kid_directed_site=0",
        target: "_blank"
    }, /*#__PURE__*/ _react.default.createElement(Whatsapp, {
        fill: iconColor
    }))));
};
exports.DarkSoulShareButtons = DarkSoulShareButtons;

},{"./darksoulShareButtons.css":"fPl6T"}],"fPl6T":[function() {},{}],"7tPSL":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AuthorBox;
var _react = _interopRequireDefault(require("react"));
var s = _interopRequireWildcard(require("./AuthorBox.styled"));
var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function AuthorBox(props) {
    var title = props.title, authorText = props.authorText;
    var cleanAuthorText = authorText;
    var colors = {
    };
    if (typeof window === "undefined") colors.plusFeature = {
        dark: {
            bg: "black",
            color: "white",
            color2: "white"
        },
        light: {
            bg: "black",
            color: "white",
            color2: "white"
        }
    };
    else colors.plusFeature = window.plusFeature;
    return(/*#__PURE__*/ _react.default.createElement(s.AuthorBoxContainer, {
        color: colors.plusFeature.light.color,
        colorDark: colors.plusFeature.dark.color
    }, /*#__PURE__*/ _react.default.createElement(s.Title, null, title), /*#__PURE__*/ _react.default.createElement(s.AuthorText, null, /*#__PURE__*/ _react.default.createElement(_markdownToJsx.default, null, cleanAuthorText))));
}

},{"./AuthorBox.styled":"bW8hz"}],"bW8hz":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthorText = exports.Title = exports.AuthorBoxContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var AuthorBoxContainer = _styledComponents.default.div.withConfig({
    displayName: "AuthorBoxstyled__AuthorBoxContainer",
    componentId: "sc-ezp9et-0"
})([
    "max-width:650px;padding:24px 15px;margin:auto;color:",
    ";@media (prefers-color-scheme:dark){color:",
    ";}"
], function(props) {
    return props.color;
}, function(props) {
    return props.colorDark;
});
exports.AuthorBoxContainer = AuthorBoxContainer;
var Title = _styledComponents.default.h4.withConfig({
    displayName: "AuthorBoxstyled__Title",
    componentId: "sc-ezp9et-1"
})([
    "font-family:\"Yle Black\",\"Open Sans\",sans-serif;font-weight:700;font-size:20px;line-height:28px;margin:0px 0px 16px;"
]);
exports.Title = Title;
var AuthorText = _styledComponents.default.p.withConfig({
    displayName: "AuthorBoxstyled__AuthorText",
    componentId: "sc-ezp9et-2"
})([
    "font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:21px;"
]);
exports.AuthorText = AuthorText;

},{}],"cVMnU":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var s = _interopRequireWildcard(require("./darkSoulSubheader.styled"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function DarkSoulSubheader(props) {
    var number = props.number, header = props.header;
    return(/*#__PURE__*/ _react.default.createElement(s.Container, null, /*#__PURE__*/ _react.default.createElement(s.Number, null, number), /*#__PURE__*/ _react.default.createElement(s.Header, null, header), /*#__PURE__*/ _react.default.createElement(s.Symbol, null, /*#__PURE__*/ _react.default.createElement("img", {
        src: "https://lusi-dataviz.ylestatic.fi/2020-11-featurepohja/fynd/dcvaliotsikkosymboli.png"
    }))));
}
var _default = DarkSoulSubheader;
exports.default = _default;

},{"./darkSoulSubheader.styled":"doq67"}],"doq67":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Symbol = exports.Header = exports.Number = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var Container = _styledComponents.default.div.withConfig({
    displayName: "darkSoulSubheaderstyled__Container",
    componentId: "sc-ari5hf-0"
})([
    "font-size:30px;text-align:center;text-transform:uppercase;position:relative;top:0;"
]);
exports.Container = Container;
var Number1 = _styledComponents.default.p.withConfig({
    displayName: "darkSoulSubheaderstyled__Number",
    componentId: "sc-ari5hf-1"
})([
    "margin-top:250px;letter-spacing:2;"
]);
exports.Number = Number1;
var Header = _styledComponents.default.p.withConfig({
    displayName: "darkSoulSubheaderstyled__Header",
    componentId: "sc-ari5hf-2"
})([
    "letter-spacing:9;font-weight:bold;margin-top:-10px;"
]);
exports.Header = Header;
var _Symbol = _styledComponents.default.div.withConfig({
    displayName: "darkSoulSubheaderstyled___Symbol",
    componentId: "sc-ari5hf-3"
})([
    "margin-top:-10px;margin-bottom:20px;display:inline-block;margin-left:-5px;& img{width:100px;height:auto;}"
]);
exports.Symbol = _Symbol;

},{}],"gKZyW":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatFetchedData = formatFetchedData;
exports.filterData = filterData;
exports.styleObject = styleObject;
exports.imageOrVideo = imageOrVideo;
exports.desktopAndMobileUrl = desktopAndMobileUrl;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetchIMSimage = _interopRequireDefault(require("./fetchIMSimage"));
function formatFetchedData(_x) {
    return _formatFetchedData.apply(this, arguments);
}
function _formatFetchedData() {
    _formatFetchedData = _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee(d) {
        var type, value, id, mediaFormat, style, imsData, aspectRatio, altText, urls, dataObj;
        return _regenerator.default.wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    type = d.type.replace(" ", "");
                    value = d.value;
                    id = d.id.replace(" ", ""); //mediaFormat: "image" / mediaFormat: "video" / mediaFormat: "imsImage" / ignore if type includes kone
                    mediaFormat = imageOrVideo(d.id, d.type.includes("kone") || d.type.includes("palautelomake")); //reformat style string (for example kuvasuhde:16:9&2:3;) to object 
                    style = {
                    };
                    Object.keys(d).includes("style") && (style = styleObject(d.style)); //fetch imsdata if it's imsImage
                    if (!(mediaFormat == "imsImage")) {
                        _context.next = 12;
                        break;
                    }
                    _context.next = 9;
                    return _fetchIMSimage.default(id);
                case 9:
                    _context.t0 = _context.sent;
                    _context.next = 13;
                    break;
                case 12:
                    _context.t0 = null;
                case 13:
                    imsData = _context.t0;
                    aspectRatio = Object.keys(style).includes("kuvasuhde") ? style.kuvasuhde : null;
                    altText = Object.keys(style).includes("alt") ? style.alt[0] : imsData == null ? null : imsData.alt; //save desktop and mobile images as array [urlDesktop, urlMobile]
                    urls = desktopAndMobileUrl(mediaFormat, aspectRatio, id, imsData);
                    dataObj = {
                        type: type,
                        value: value,
                        id: id,
                        mediaFormat: mediaFormat,
                        style: style,
                        imsData: imsData,
                        urls: urls,
                        altText: altText
                    };
                    return _context.abrupt("return", dataObj);
                case 19:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return _formatFetchedData.apply(this, arguments);
}
function filterData(data, key, searchTerms, nestData) {
    var filteredData = []; //map throught data
    data.map(function(d) {
        //if searchTerms are array, map through given possible values
        if (_typeof2.default(searchTerms) == "object") searchTerms.map(function(searchTerm) {
            //push if value in list
            d[key].includes(searchTerm) && filteredData.push(d);
        }); //if searchTerms is text
        else d[key].includes(searchTerms) && filteredData.push(d);
    }); //nest array into smaller arrays 
    //[[scrolly1data], [scrolly2data]] 
    if (nestData) {
        var nestedData = [];
        filteredData.map(function(d) {
            //scrolly1 f. ex.
            var elementNumber = d.type.match(/\d+/)[0]; //scrolly1 = array[0] in nestedData
            var arrNumber = elementNumber - 1; //if array not yet in data then make empty array
            nestedData[arrNumber] = nestedData[arrNumber] == undefined ? [] : nestedData[arrNumber]; //push karuselli data to nested array
            nestedData[arrNumber].push(d);
        });
        filteredData = nestedData;
    }
    return filteredData;
}
function styleObject(styleString) {
    //styles are separeted with ;
    var styleArray = styleString.split(";");
    var styleObject1 = {
    }; //console.log(styleArray)
    styleArray.map(function(styleString1) {
        //style name is separated with :
        //for example "Kuvasuhde:16:9&2:3"
        var styleKey = styleString1.split(":")[0];
        var styleValue = styleString1.split(":").slice(1).join(":");
        styleValue = styleValue.split("&");
        styleKey.length > 0 && (styleObject1[styleKey] = styleValue);
    });
    return styleObject1;
}
function imageOrVideo(id, ignore) {
    if (id.length == 0) //if no id then return null
    return null;
    else if (ignore) return null;
    var type = id.startsWith("http") ? "web" : "ims";
    if (type == "ims") return "imsImage";
    else {
        var mediaFormat = id.endsWith("mp4") ? "webVideo" : "webImage";
        return mediaFormat;
    }
}
function desktopAndMobileUrl(mediaFormat, aspectRatio, id, imsData) {
    //console.log(mediaFormat, aspectRatio, imsData)
    if (mediaFormat == "imsImage") {
        //console.log(imsData["16:9"])
        var urlsArray = aspectRatio !== null && imsData !== undefined ? [
            imsData[aspectRatio[0]],
            imsData[aspectRatio[1]]
        ] : aspectRatio == null && imsData !== undefined ? [
            imsData["16:9"],
            imsData["16:9"]
        ] : [
            id,
            id
        ];
        return urlsArray;
    } else if (mediaFormat == "webImage") {
        var _urlsArray = aspectRatio !== null ? [
            aspectRatio[0],
            aspectRatio[1]
        ] : [
            id,
            id
        ];
        return _urlsArray;
    } else if (mediaFormat == "webVideo") {
        var _urlsArray2 = aspectRatio !== null ? [
            aspectRatio[0] + "#t=0.1",
            aspectRatio[1] + "#t=0.1"
        ] : [
            id + "#t=0.1",
            id + "#t=0.1"
        ];
        return _urlsArray2;
    }
}

},{"./fetchIMSimage":"cfd3Y"}],"cfd3Y":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _errorFunctions = require("./errorFunctions");
/////////////////
//MAIN FUNCTION//
/////////////////
function fetchIMSimage(_x, _x2) {
    return _fetchIMSimage.apply(this, arguments);
} //Contains crop and other information for image
function _fetchIMSimage() {
    _fetchIMSimage = _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee(IMSid, bgColor) {
        var app_id, app_key, imageInformation, formattedData;
        return _regenerator.default.wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    app_id = process.env.app_id_prod;
                    app_key = process.env.app_key_prod;
                    _context.next = 4;
                    return getImageInformation(IMSid, app_id, app_key);
                case 4:
                    imageInformation = _context.sent;
                    if (!Object.keys(imageInformation).includes("data")) {
                        _context.next = 12;
                        break;
                    }
                    _context.next = 8;
                    return formatImageInformation(imageInformation, bgColor);
                case 8:
                    formattedData = _context.sent;
                    return _context.abrupt("return", formattedData);
                case 12:
                    _errorFunctions.pushErrorTextToDOM("#ERR - Ei kelvollinen IMS-id:" + IMSid);
                case 13:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return _fetchIMSimage.apply(this, arguments);
}
function getImageInformation(_x3, _x4, _x5) {
    return _getImageInformation.apply(this, arguments);
} //return crop and alt text from data
function _getImageInformation() {
    _getImageInformation = _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee2(IMSid, app_id, app_key) {
        var url, response, data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
            while(true)switch(_context2.prev = _context2.next){
                case 0:
                    //Example url https://json-storage.api.yle.fi/v1/collection/ims-images-v1/document/36-39-6740315eba7a57d2e87?app_id=HIEKKALAATIKKO&app_key=HIEKKALAATIKKO
                    //console.log(app_id)
                    url = "https://json-storage.api.yle.fi/v1/collection/ims-images-v1/document/36-".concat(IMSid, "?app_id=").concat(app_id, "&app_key=").concat(app_key); //console.log(url)
                    _context2.prev = 1;
                    _context2.next = 4;
                    return fetch(url);
                case 4:
                    response = _context2.sent;
                    _context2.next = 7;
                    return response.json();
                case 7:
                    data = _context2.sent;
                    return _context2.abrupt("return", data);
                case 11:
                    _context2.prev = 11;
                    _context2.t0 = _context2["catch"](1);
                    console.log("dataError", _context2.t0);
                    return _context2.abrupt("return");
                case 15:
                case "end":
                    return _context2.stop();
            }
        }, _callee2, null, [
            [
                1,
                11
            ]
        ]);
    }));
    return _getImageInformation.apply(this, arguments);
}
function formatImageInformation(_x6, _x7) {
    return _formatImageInformation.apply(this, arguments);
} //Get ims url for image
function _formatImageInformation() {
    _formatImageInformation = _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee4(data, bgColor) {
        var altTag, imageInformation, aspectRatios;
        return _regenerator.default.wrap(function _callee4$(_context4) {
            while(true)switch(_context4.prev = _context4.next){
                case 0:
                    //console.log(data.data)
                    altTag = Object.keys(data.data).includes("alt") && data.data.alt.filter(function(d) {
                        return d.language == "fin";
                    });
                    imageInformation = {
                        type: "img",
                        bgColor: bgColor,
                        alt: altTag.length > 0 ? altTag[0].value : null
                    };
                    aspectRatios = [
                        "16:9",
                        "2:3",
                        "1:1",
                        "5:2"
                    ];
                    aspectRatios.map(/*#__PURE__*/ function() {
                        var _ref = _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee3(ratio) {
                            return _regenerator.default.wrap(function _callee3$(_context3) {
                                while(true)switch(_context3.prev = _context3.next){
                                    case 0:
                                        _context3.next = 2;
                                        return imsUrl(data, ratio);
                                    case 2:
                                        return _context3.abrupt("return", imageInformation[ratio] = _context3.sent);
                                    case 3:
                                    case "end":
                                        return _context3.stop();
                                }
                            }, _callee3);
                        }));
                        return function(_x10) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    imageInformation["o"] = "https://images.cdn.yle.fi/image/upload/f_auto,q_auto,h_1080/v1614062693/".concat(data.data.publicId, ".jpg");
                    return _context4.abrupt("return", imageInformation);
                case 6:
                case "end":
                    return _context4.stop();
            }
        }, _callee4);
    }));
    return _formatImageInformation.apply(this, arguments);
}
function imsUrl(_x8, _x9) {
    return _imsUrl.apply(this, arguments);
}
function _imsUrl() {
    _imsUrl = _asyncToGenerator2.default(/*#__PURE__*/ _regenerator.default.mark(function _callee5(data, ratio) {
        var cropInfo, xPos, yPos, width, height, scaleWidth, scaleHeight, scale, outputWidth, outputHeight, imageID, url;
        return _regenerator.default.wrap(function _callee5$(_context5) {
            while(true)switch(_context5.prev = _context5.next){
                case 0:
                    //console.log(data.data)
                    //Cropping
                    cropInfo = data.data.crops.filter(function(d) {
                        return d.name == ratio;
                    });
                    if (!(cropInfo.length > 0)) {
                        _context5.next = 14;
                        break;
                    }
                    xPos = cropInfo[0].coordinates.x;
                    yPos = cropInfo[0].coordinates.y;
                    width = cropInfo[0].coordinates.width;
                    height = cropInfo[0].coordinates.height; //Scale image to fullHD
                    scaleWidth = 1920 / width;
                    scaleHeight = 1080 / height;
                    scale = scaleHeight < scaleWidth ? scaleHeight : scaleWidth;
                    outputWidth = Math.round(width * scale);
                    outputHeight = Math.round(height * scale); //ID
                    imageID = data.data.publicId;
                    url = "https://images.cdn.yle.fi/image/upload/w_".concat(width, ",h_").concat(height, ",x_").concat(xPos, ",y_").concat(yPos, ",f_auto,fl_lossy,q_auto:best,c_crop/w_").concat(outputWidth, ",h_").concat(outputHeight, ",dpr_1/").concat(imageID, ".jpg");
                    return _context5.abrupt("return", url);
                case 14:
                case "end":
                    return _context5.stop();
            }
        }, _callee5);
    }));
    return _imsUrl.apply(this, arguments);
}
var _default = fetchIMSimage;
exports.default = _default;

},{"./errorFunctions":"5684i"}],"2nNza":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var Context = /*#__PURE__*/ _react.default.createContext({
});
var _default = Context;
exports.default = _default;

},{}],"9GYPM":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PictureTag = _interopRequireDefault(require("../VisualComponents/Picture/PictureTag"));
var _VideoTag = _interopRequireDefault(require("../VisualComponents/Video/VideoTag"));
var _viewportFunctions = require("../../lib/viewportFunctions");
var _styleHandler = require("../../lib/styleHandler");
var _isUsingApp = require("../../lib/isUsingApp");
var _appHeightHack = require("../../lib/appHeightHack");
var _videoScrollFunctions = require("../VisualComponents/Video/videoScrollFunctions");
var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));
var s = _interopRequireWildcard(require("./Scrolly.styled"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty2.default(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function iOSSafari(userAgent) {
    return /iP(ad|od|hone)/i.test(userAgent) && /WebKit/i.test(userAgent) && !/(CriOS|FxiOS|OPiOS|mercury)/i.test(userAgent);
}
var useIsClient = function useIsClient1() {
    var _useState = _react.useState(false), _useState2 = _slicedToArray2.default(_useState, 2), isClient = _useState2[0], setClient = _useState2[1];
    _react.useEffect(function() {
        setClient(true);
    }, []);
    return isClient;
};
function changeScrollyHeight() {
    var ref = _react.useRef(null);
    var setRef = _react.useCallback(function(node) {
        ref.current;
        if (node) {
            // Check if a node is actually passed. Otherwise node would be null.
            // You can now do what you need to, addEventListeners, measure, etc.
            //change scrolly height based on text container height
            if (typeof window !== "undefined" && window.navigator.userAgent.indexOf("Edg") > -1) node.parentNode.style.height = "calc(257vh + " + node.offsetHeight + "px)"; //Firefox on ios -- not necessary
            else node.parentNode.style.height = "calc(206vh + " + node.offsetHeight + "px)";
        } // Save a reference to the node
        ref.current = node;
    }, []);
    return [
        setRef
    ];
}
function isTextboxInViewport(refArray) {
    //contains all individual text boxes on scrolly
    var _useState3 = _react.useState({
        mediaOpacity: [],
        canPlay: []
    }), _useState4 = _slicedToArray2.default(_useState3, 2), elementInViewport = _useState4[0], setVisibility = _useState4[1];
    var arrayLength = refArray.current.length;
    _react.useEffect(function() {
        //flips image opacity based on if text is in viewport
        var inViewport = function inViewport1() {
            //let minDistance = Infinity;
            var data = {
                mediaOpacity: new Array(arrayLength),
                canPlay: new Array(arrayLength)
            };
            refArray.current.map(function(singleContainer, index) {
                var lastEl = index == arrayLength - 1;
                data.mediaOpacity[index] = _viewportFunctions.isElementInOrAboveViewport(singleContainer); //multiple text box scrolls
                if (arrayLength > 1) data.canPlay[index] = index == 0 ? _viewportFunctions.firstTextBoxViewportFunction(singleContainer) : lastEl ? _viewportFunctions.lastTextBoxViewportFunction(singleContainer) : _viewportFunctions.isTextBoxAlmostInViewport(singleContainer); //if only one text box - apply special rules
                else data.canPlay[index] = _viewportFunctions.onlyOneTextBoxViewportFunction(singleContainer);
            }); //only update if new data is different from current state
            JSON.stringify(elementInViewport) !== JSON.stringify(data) && setVisibility(_objectSpread({
            }, data));
        };
        inViewport(); //back up if delete body and #app stylings in basics.css
        typeof window !== "undefined" && window.addEventListener("scroll", inViewport, {
            passive: true
        });
        return function() {
            return typeof window !== "undefined" && window.removeEventListener("scroll", inViewport);
        };
    }, [
        elementInViewport
    ]);
    return elementInViewport;
}
function allowVideoPlay(scrollyData, index, scrollyEl, elementInViewport) {
    //list of textboxes 
    var playVideoOnTheseTextBoxes = [
        index
    ]; //While loop goes through scrolly medias and returns list of indexes with empty id's
    //Purpose: video won't stop even though original scrollyText is not on screen
    var i = index;
    do {
        if (scrollyEl.mediaFormat == "webVideo" && scrollyData[i] !== undefined && scrollyData[i].id == "") playVideoOnTheseTextBoxes.push(i);
        i++;
    }while (scrollyData[i] !== undefined && scrollyData[i].id == "") //Allow play if showing original text box linked to video or any following text boxes with no linked video
    var allowPlay = playVideoOnTheseTextBoxes.map(function(textBoxIndex) {
        return elementInViewport.canPlay[textBoxIndex];
    }).includes(true);
    return allowPlay;
}
function resizeWindow() {
    //contains all individual text boxes on scrolly
    var _useState5 = _react.useState(_viewportFunctions.viewportSize("height") + 2), _useState6 = _slicedToArray2.default(_useState5, 2), height = _useState6[0], setHeight = _useState6[1];
    _react.useEffect(function() {
        //flips image opacity based on if text is in viewport
        var resized = function resized1() {
            //+2 makes sure that there are no white borders
            var newHeight = _viewportFunctions.viewportSize("height") + 2;
            newHeight !== height && setHeight(newHeight); //newHeight !== height && appHeightHack();
        };
        resized();
        typeof window !== "undefined" && window.addEventListener("resize", resized, {
            passive: true
        });
        return function() {
            return typeof window !== "undefined" && window.removeEventListener("resize", resized);
        };
    }, [
        height
    ]);
    return height;
}
function Scrolly(props) {
    var scrollyData = props.scrollyData, scrollyIndex = props.scrollyIndex, soundOn = props.soundOn, setSound = props.setSound;
    var _changeScrollyHeight = changeScrollyHeight(), _changeScrollyHeight2 = _slicedToArray2.default(_changeScrollyHeight, 1), textsContainer = _changeScrollyHeight2[0];
    var height = resizeWindow(); //includes all SingleTextContainers
    var singleTextContainerArray = _react.useRef([]); //boolean array [true, false, false]
    var elementInViewport = isTextboxInViewport(singleTextContainerArray); //If in scrolly then stop relative videos
    elementInViewport.canPlay.includes(true) && _videoScrollFunctions.stopRelativeAutoplayVideosWhileInScrolly(".plusVideoRelative"); //audio icon placement - app has not fixed menu top
    var usingApp = _isUsingApp.isUsingApp();
    var isClient = useIsClient();
    return(/*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(s.ScrollyContainer, {
        widthProperty: Object.keys(scrollyData[0].style).includes("leveys") ? scrollyData[0].style.leveys : "100%"
    }, /*#__PURE__*/ _react.default.createElement(s.StickyImageContainer, {
        usingApp: usingApp //only safari on ios uses this value
        ,
        safariOnIOS: isClient && iOSSafari(window.navigator.userAgent),
        height: isClient || height == undefined ? height : "0"
    }, scrollyData.map(function(scrollyEl, index) {
        //Allow play if showing original text box linked to video or any following text boxes with no linked video
        var allowPlay = allowVideoPlay(scrollyData, index, scrollyEl, elementInViewport);
        return scrollyEl.mediaFormat == "webVideo" ? /*#__PURE__*/ _react.default.createElement(_VideoTag.default, {
            mobileMediaData: scrollyEl.urls[1],
            desktopMediaData: scrollyEl.urls[0],
            positionAbsolute: true,
            id: scrollyEl.id,
            mediaStyling: scrollyEl.style //audio icon position lower in scrolly - reason yle.fi fixed menu top
            ,
            audioIconPosition: !usingApp ? "15px" : "0px" //always show first image of scrolly
            ,
            showScrollyMedia: index == 0 ? true : elementInViewport.mediaOpacity[index],
            scrollyTextFullyInScreen: allowPlay,
            headerVideo: false,
            key: "scrollyVideoTag-" + scrollyIndex + "-" + index,
            soundOn: soundOn,
            setSound: setSound
        }) : scrollyEl.mediaFormat == "imsImage" || scrollyEl.mediaFormat == "webImage" ? /*#__PURE__*/ _react.default.createElement(_PictureTag.default, {
            mobileMediaData: scrollyEl.urls[1],
            desktopMediaData: scrollyEl.urls[0],
            positionAbsolute: true,
            id: scrollyEl.id,
            mediaStyling: scrollyEl.style,
            altText: scrollyEl.altText //always show first image of scrolly
            ,
            showScrollyMedia: index == 0 ? true : elementInViewport.mediaOpacity[index] //renderMedia={elementInViewport.showElement[index]}
            ,
            key: "scrollyPictureTag-" + scrollyIndex + "-" + index,
            index: "scrollyVideoTag-" + scrollyIndex
        }) : null;
    })), /*#__PURE__*/ _react.default.createElement(s.TextsContainer, {
        ref: textsContainer
    }, scrollyData.map(function(scrollyEl, index) {
        var styleThisEl = _styleHandler.styleHandlerWithDefaults("skrolli", scrollyEl.style); //console.log(styleThisEl)
        return(/*#__PURE__*/ _react.default.createElement(s.SingleTextContainer, {
            marginTop: index == 0 ? 0 : typeof window !== "undefined" && window.navigator.userAgent.includes("FxiOS") ? _viewportFunctions.viewportSize("height") + "px" : "100vh",
            opacity: scrollyEl.value.length > 0 ? 1 : 0,
            visibility: scrollyEl.value.length > 0 ? "visible" : "hidden",
            background: styleThisEl.textContainerBackground,
            color: styleThisEl.textColor //ref is array, only push if ref is not in array
            ,
            ref: function ref(_ref) {
                return singleTextContainerArray.current.length < scrollyData.length && singleTextContainerArray.current.push(_ref);
            },
            key: "scrollyTextContainer-" + scrollyIndex + "-" + index
        }, /*#__PURE__*/ _react.default.createElement(_markdownToJsx.default, null, scrollyEl.value)));
    })))));
}
var _default = Scrolly;
exports.default = _default;

},{"../VisualComponents/Picture/PictureTag":"6X7Hf","../VisualComponents/Video/VideoTag":"lghy5","../../lib/viewportFunctions":"3INVk","../../lib/styleHandler":"jiU5V","../../lib/isUsingApp":"ezM1b","../../lib/appHeightHack":"iKLok","../VisualComponents/Video/videoScrollFunctions":"lCM2t","./Scrolly.styled":"geaDh"}],"iKLok":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.appHeightHack = appHeightHack;
var _isUsingApp = require("./isUsingApp");
var _viewportFunctions = require("./viewportFunctions");
function appHeightHack() {
    function iOSSafariOrChrome(userAgent) {
        return /iP(ad|od|hone)/i.test(userAgent) && /WebKit/i.test(userAgent) && !/(FxiOS|OPiOS|mercury)/i.test(userAgent);
    } //adjust scrollable #app container height
    var usingApp = _isUsingApp.isUsingApp();
    var usingIosSafariOrChrome = iOSSafariOrChrome(window.navigator.userAgent);
    document.querySelector("#app").style.height = usingApp ? "100vh" : usingIosSafariOrChrome ? "calc(" + _viewportFunctions.viewportSize("height") + "px - 50px)" : "calc(100vh - 50px)";
}

},{"./isUsingApp":"ezM1b","./viewportFunctions":"3INVk"}],"geaDh":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SingleTextContainer = exports.TextsContainer = exports.StickyImageContainer = exports.ScrollyContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ScrollyContainer = _styledComponents.default.div.withConfig({
    displayName: "Scrollystyled__ScrollyContainer",
    componentId: "sc-jerw66-0"
})([
    "width:",
    ";position:relative;margin-top:24px;margin-bottom:24px;transform:translateX(-50%);left:50%;will-change:height;display:inline-block;"
], function(props) {
    return props.widthProperty;
});
exports.ScrollyContainer = ScrollyContainer;
var StickyImageContainer = _styledComponents.default.div.withConfig({
    displayName: "Scrollystyled__StickyImageContainer",
    componentId: "sc-jerw66-1"
})([
    "position:sticky;height:",
    ";top:",
    ";display:block;overflow:hidden;"
], function(props) {
    return props.usingApp ? props.height + "px" : props.safariOnIOS && !props.usingApp ? "calc(" + props.height + "px - 50px)" : "calc(" + props.height + "px - 50px)";
}, function(props) {
    return props.usingApp ? "0px" : "50px";
});
/*
export const ScrollyContainer = styled.div`
    width: ${props => props.widthProperty};
    position: relative;
    margin-top: 24px;
    margin-bottom: 24px;
    left: 0;
    will-change: scroll-position;
    transition: height 1000000s ease;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
`;
*/ /*
export const StickyImageContainer = styled.div`
    
    position: sticky;
    left: 0;
    min-height: calc(103vh);
    top: ${props => props.top}px;
    display: block;
    backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;

`;
*/ exports.StickyImageContainer = StickyImageContainer;
var TextsContainer = _styledComponents.default.div.withConfig({
    displayName: "Scrollystyled__TextsContainer",
    componentId: "sc-jerw66-2"
})([
    ""
]);
exports.TextsContainer = TextsContainer;
var SingleTextContainer = _styledComponents.default.div.withConfig({
    displayName: "Scrollystyled__SingleTextContainer",
    componentId: "sc-jerw66-3"
})([
    "position:relative;text-align:center;background-color:",
    ";color:",
    ";width:30%;margin:",
    " auto auto;padding:15px;width:80vw;max-width:500px;line-height:1.5em;font-size:17px;box-shadow:1px 2px 4px rgba(0,0,0,.3);z-index:2;-webkit-transform:translateZ(0);opacity:",
    ";visiblity:",
    ";& h4{margin-bottom:10px;}"
], function(props) {
    return props.background;
}, function(props) {
    return props.color;
}, function(props) {
    return props.marginTop;
}, function(props) {
    return props.opacity;
}, function(props) {
    return props.visiblity;
});
exports.SingleTextContainer = SingleTextContainer;

},{}],"45X8b":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DarkSoulNewChapter = void 0;
var _react = _interopRequireDefault(require("react"));
require("./darkSoulNewChapter.css");
var DarkSoulNewChapter = function DarkSoulNewChapter1(_ref) {
    var children = _ref.children;
    return(/*#__PURE__*/ _react.default.createElement("p", {
        "data-paragraph-id": "aloitus",
        className: "yle__article__paragraph fynd"
    }, children));
};
exports.DarkSoulNewChapter = DarkSoulNewChapter;

},{"./darkSoulNewChapter.css":"LbhAG"}],"LbhAG":[function() {},{}],"hdp3E":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DarksoulSourceList = void 0;
var _react = _interopRequireDefault(require("react"));
var DarksoulSourceList = function DarksoulSourceList1(_ref) {
    var children = _ref.children;
    return(/*#__PURE__*/ _react.default.createElement("div", {
        id: "sources"
    }, children.map(function(e, i) {
        return e.props && e.props.mdxType && e.props.mdxType === "p" ? /*#__PURE__*/ _react.default.cloneElement(e, {
            className: "yle__article__paragraph fynd",
            key: i
        }) : null;
    })));
};
exports.DarksoulSourceList = DarksoulSourceList;

},{}],"i3VQM":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MDXContent;
exports.frontMatter = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@mdx-js/react");
require("./darksoul.css");
require("./authorsAndShareButtons.css");
var _excluded = [
    "components"
];
var frontMatter = {
    otsikko: 'Dark Souls is one of the most challenging video games in the world. Our reporter played the game for years, and the experience can almost be described as religious.',
    ingressi: 'Everything disappears only to repeat itself in exactly the same way. This is what the video game Dark Souls teaches us. The essayist Jantso Jokelin spent five years playing one of the world’s most complex video games. He became cynical and learned how to pray. To celebrate the tenth anniversary of Dark Souls, he has now compiled ten attempts to understand this most operatic of mythological worlds.',
    artikkelitausta: 'black',
    otsikonSisalto: '[data-type="scrolling-video1"]'
};
exports.frontMatter = frontMatter;
var makeShortcode = function makeShortcode1(name) {
    return function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return _react2.mdx("div", props);
    };
};
var Header = makeShortcode("Header");
var ScrollingVideo = makeShortcode("ScrollingVideo");
var DarkSoulHeroText = makeShortcode("DarkSoulHeroText");
var DarkSoulShareButtons = makeShortcode("DarkSoulShareButtons");
var AuthorBox = makeShortcode("AuthorBox");
var DarkSoulSubheader = makeShortcode("DarkSoulSubheader");
var AloitusKappale = makeShortcode("AloitusKappale");
var Kuva = makeShortcode("Kuva");
var Skrolli = makeShortcode("Skrolli");
var LahdeLuettelo = makeShortcode("LahdeLuettelo");
var layoutProps = {
    frontMatter: frontMatter
};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
    var components = _ref.components, props = _objectWithoutProperties2.default(_ref, _excluded);
    return _react2.mdx(MDXLayout, _extends2.default({
    }, layoutProps, props, {
        components: components,
        mdxType: "MDXLayout"
    }), _react2.mdx(Header, {
        ingressi: frontMatter.ingressi,
        otsikko: frontMatter.otsikko,
        artikkelitausta: frontMatter.artikkelitausta,
        mdxType: "Header"
    }, _react2.mdx(ScrollingVideo, {
        isHeader: true,
        url: "https://lusi-dataviz.ylestatic.fi/2020-11-featurepohja/fynd/ds_alkuluuppi0709_ffmpeg.mp4",
        mdxType: "ScrollingVideo"
    }, _react2.mdx(DarkSoulHeroText, {
        text: "ON THIS PATH,<span>YOU SHALL DIE</span>",
        isMobile: false,
        mdxType: "DarkSoulHeroText"
    }))), _react2.mdx(DarkSoulShareButtons, {
        centered: true,
        iconColor: "white",
        mdxType: "DarkSoulShareButtons"
    }), _react2.mdx(AuthorBox, {
        centered: true,
        title: "Tekij\xE4t",
        authorText: "<span>Julkaistu: **18.5.2021**. Teksti: **Jantso Jokelin**. Editointi: **Teemu Laaksonen**. Ulkoasu: **Hannes Nissinen**, **Antti Ollikainen**. Koodi: **Antti Saarenp\xE4\xE4**, **Annika Veteli**</span>",
        mdxType: "AuthorBox"
    }), _react2.mdx(DarkSoulSubheader, {
        disableScroll: true,
        header: "Fire",
        number: "I",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, "In the beginning the world was without form, a valley veiled in mists and full of enormous, primeval trees, bare rocks and dragons from the dawn of time. Then fire arrived, and fire created opposites: warmth and cold, life and death, light and darkness."), _react2.mdx("p", null, "And behold: strange gods began to crawl out of the darkness, gods who found souls at the edge of the flames. With these souls, they destroyed the primordial dragons and burned the archtrees to the ground. And thus began the Age of Fire, a time when the gods flourished. But before long, the First Flame began to dwindle. The world turned towards the darkness, and living beings were hollowed out from the inside."), _react2.mdx("p", null, "But before long, the First Flame began to dwindle. The world turned towards the darkness, and living beings were hollowed out from the inside."), _react2.mdx("p", null, "The protagonist awakes in a dungeon where he has been locked away to await the world being snuffed out. He flees, fights with his fellow prisoners, who have lost their minds and become mere shells of human beings, and flies in the claws of an enormous raven all the way to the Firelink Shrine."), _react2.mdx("p", null, "A warrior sitting at the edge of the bonfire says that there is no path to salvation. We are all doomed to assume hollow form. It would have been better to rot away in the dungeon. "), _react2.mdx("p", null, "But: if someone were to succeed in ringing two Bells of Awakening on different sides of the kingdom, something might happen. What kind of bells they are and where they are to be found, nobody knows. "), _react2.mdx("p", null, "And thus begins a journey into the darkness at the depths of the world. Clues are few and far between, progress is slow, and obstacles are depressingly overpowering. As he empties from within, the wanderer tries to stay alive until the next bonfire and understand what he is in fact trying to achieve. New nightmarish creatures lurk round every corner, fiends that will tear him to shreds in an instant. "), _react2.mdx("p", null, "As death comes, the player loses the precious souls he has gathered along the way and is reborn at the previous bonfire. And so, one must try again \u2013 ten, twenty, thirty times. There are no shortcuts. "), _react2.mdx("p", null, "The reason for this progress is revealed only after thousands of moments of suffering. The player must find the First Flame and rekindle it. In a world made of fire, this rebirth can only happen through a burnt offering."), _react2.mdx(ScrollingVideo, {
        type: "scrolling-video3",
        value: "(FromSoftware)",
        url: "https://lusi-dataviz.ylestatic.fi/2020-11-featurepohja/fynd/ds_palava0709_ffmpeg.mp4",
        mdxType: "ScrollingVideo"
    }), _react2.mdx(DarkSoulSubheader, {
        disableScroll: true,
        header: "Cycle",
        number: "II",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, " Dark Souls allows the player to live through an entire myth. Released by the Japanese company FromSoftware in 2011, the game rewrites pagan creation myths, incorporating elements of Eastern belief systems, Christian mysticism, philosophy and alchemy. In fact, nothing in the game\u2019s world stems from an earthly perspective. At stake are our souls, humanity itself, the rocking of the very foundations of existence."), _react2.mdx("p", null, "Alongside other commercial video games, Dark Souls feels like an almost impossible curiosity. It does not follow the Western traditions of storytelling with regard to narrative, history, spiritual growth and human capabilities. The player is not taught anything. We do not have the mental faculties to comprehend what is good and what is bad. History repeats itself, the human part is that of the jester."), _react2.mdx("p", null, "According to the famous theory developed by myth researcher Joseph Campbell, all stories in the world follow the same basic pattern. They start in a familiar setting and move into a strange world where the hero is invited to set off on an adventure. Through a variety of challenges, the hero faces an extreme ordeal, experiences a rebirth of sorts, and returns home wiser and as a more respected member of the community. The hero\u2019s journey can be seen to play out in ancient creation myths just as much as in Hollywood movies."), _react2.mdx("p", null, "Many attempts have been made to make Dark Souls fit Campbell\u2019s template, though it might in fact be more fruitful to think of the story more as challenging the myth than perpetuating it. The hero is not a hero, rather a pawn cheated by a fake prediction. Everything is strange from beginning to end. Ithaca is never discovered, let alone Nirvana. And rebirth is not a dramatic event but simply a chain made all the less eventful by a series of constant repeats."), _react2.mdx(Kuva, {
        id: "39-796839607fd6213f9f9",
        kuvateksti: "The hero\u2019s fate is continual rebirth. (Dark Souls Remastered / FromSoftware)",
        style: "kuvasuhde:16:9&2:3;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "In video games, death is rarely permanent. In standard solutions, the character awakes at the last save point and the player is given the opportunity to try again. "), _react2.mdx("p", null, "Dark Souls is the only game I know that gives a mythological explanation for such constant rebirth. The wanderer\u2019s immortality is not a blessing but a form of cosmic punishment. The player has been condemned to a cycle of eternal rebirth."), _react2.mdx("p", null, "This is not about reincarnation in a purely Hindu sense, about karma and being reborn in a new body. The character\u2019s fate is to be reborn into the world in exactly the same form every time. At the First Flame, he tries to free himself of the curse through self-immolation."), _react2.mdx("p", null, "As well as Campbell\u2019s theories, there has been much discussion about the relationship between Dark Souls and the notion of eternal return first posited by German philosopher Friedrich Nietzsche. In his book The Gay Science (1882), Nietzsche encourages the reader to imagine a demon that creeps into our loneliest loneliness and explains that our lives will forever repeat the same way, right down to the smallest details. How should we accept this knowledge? According to the philosopher himself, we should live in such a way that we can embrace this repetition and learn to love our own destiny."), _react2.mdx("p", null, "We must learn to love infinite repetition if we are to understand the world of Dark Souls too. We lose often, and we must overcome the same obstacles time and time again. Experience is most beneficial to those who can successfully channel the kind of positive nihilism that Nietzsche espoused: if we can laugh, cry, and eventually say yes when the hopeless cycle starts again from the beginning."), _react2.mdx(DarkSoulSubheader, {
        disableScroll: true,
        header: "Rage",
        number: "III",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, "I played through the Dark Souls trilogy (2011\u20132016) and its sister game Bloodborne (2015) over a period of around five years. There\u2019s no reason it should take this long. The greatest obstacle soon became the continual crushing of my nerves and total collapse in the face of the game\u2019s ashen grey world."), _react2.mdx("p", null, "I\u2019m not cut out for a challenge like this, I told myself time and again. I repeatedly gave up halfway through, on one occasion for over six months. "), _react2.mdx("p", null, "The sense of humiliation and despair caused by Dark Souls shuns comparison with any other experience. It strips us of all our pride and self-assuredness. The player is thrown into the middle of an absurd and uncaring world and left there without clear instructions as to what to do. Making progress is slow and the obstacles players face are depressingly overpowering. Each death feels like a profound loss. Development built up over a long period of time can slip away in seconds. "), _react2.mdx("p", null, "Imagine you are reading an exceptionally beautiful novel but after every sentence you have to play chess with an angry lion while locked in a burning cellar. This is what playing Dark Souls feels like at first. "), _react2.mdx(Kuva, {
        id: "39-796831607fd43847c1d",
        kuvateksti: "The battles are merciless, and the losses can be great. (Dark Souls Remastered / FromSoftware)",
        style: "kuvasuhde:16:9&2:3;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "Almost non-existent background information makes us seek understanding in architecture, the brief descriptions of weapons and equipment, the scarce comments of passers-by, and other fragments enigmatically scattered across the landscape. If we want more information, we must make our way further into the labyrinth of death, we must nurture our inner flame, become wiser and stronger. "), _react2.mdx("p", null, "Understanding Dark Souls becomes something of an occult process. It initiates its players into a Faustian suffering mysticism, an endless cycle of pain and thirst for knowledge."), _react2.mdx(ScrollingVideo, {
        disableScroll: true,
        type: "scrolling-video",
        value: "(FromSoftware)",
        url: "https://lusi-dataviz.ylestatic.fi/2020-11-featurepohja/fynd/ds_lyonti0709_ffmpeg.mp4",
        mdxType: "ScrollingVideo"
    }), _react2.mdx("p", null, "On this repeated journey, I constantly encounter other people searching for the First Flame. They lean dejectedly against walls or sit on tussocks, having finally lost all hope. In each part of the game, a crestfallen warrior is sitting beside the Firelink Shrine, having left his task unfinished. He has decided instead to be a passive observer, to watch other wanderers\u2019 futile flailing and wait for his humanity to disappear. The love of fate has turned to bitterness. "), _react2.mdx("p", null, "\u201CWhat we call the curse is traceable to the soul. Do you see what that means? To be alive \u2026 to walk this earth \u2026 That's the real curse right there,\u201D says the crestfallen Saulden in Part Two of the game in profound existentialist spirit."), _react2.mdx("p", null, "In the world of Dark Souls, everything is perishable, repeating and cosmically immaterial. Those looking for gods will find only hollow shells wandering through the wilderness. If the wanderer executes them, then steps on the throne, nobody will be there to mete out punishment. "), _react2.mdx(Kuva, {
        id: "39-796865607fdab1159ff",
        kuvateksti: "The pervading melancholy in Dark Souls runs not only through the plot but in the design of the surroundings. (Dark Souls 3 / FromSoftware)",
        style: "kuvasuhde:16:9&2:3;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "The pessimism sown in the world is infectious and strengthens through the unreasonable obstacles the player must overcome. At times, there is nothing but rage left inside me. When even forty attempts isn\u2019t enough to vanquish a single opponent, rage starts to turn to bitterness. There has never been any hope. I have been condemned to failure. "), _react2.mdx("p", null, "The difficulty of this game isn\u2019t just a curiosity with which the developers can cash in on the most obsessive, masochistic players. Failure is a theme that Dark Souls explores both through the language of myth and mechanics. The game\u2019s creator Hidetaka Miyazaki has spoken of death as a teacher. When you die a hundred times, you eventually become dead to rage too."), _react2.mdx("p", null, "Only once you become numb to the poison coursing through your body does the possibility of progress present itself."), _react2.mdx(DarkSoulSubheader, {
        disableScroll: true,
        header: "Long Defeat",
        number: "IV",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, "From the descriptions of ancient myths, one might easily get the impression that these events happened once, long ago, at the dawn of time. In reality, myths were relived according to the cycle of days, seasons or the ages. Horus and Set were continually battling each other along the horizon, creating the shift between day and night. At the zagmuk festival in ancient Mesopotamia, Marduk killed the monster Tiamat every year."), _react2.mdx("p", null, "According to religious historian Mircea Eliade, primitive people did not imagine they ever did anything new, even in their day-to-day lives, but simply repeated eternal actions. \u201CWhat (man) does, has been done before. His life is the ceaseless repetition of gestures initiated by others,\u201D Eliade wrote in his The Myth of the Eternal Return (1949). "), _react2.mdx("p", null, "In literature, the theme of cyclically renewing myths has been widely explored, notably in Michael Ende\u2019s fantasy novel Die unendliche Geschichte (\u2018The Neverending Story\u2019, 1979). Just like Dark Souls, it describes a world that is crumbling to nothing as the result of a strange curse. Marked with chaotic architecture, the \u2018Old Emperor City\u2019 is full of figures who have gone mad and lost their memories, people who once ruled or at least tried to control the fantasy world. In this realm, events repeat over and over again."), _react2.mdx("p", null, "No one could climb the Mountain of Destiny until the last successful mountaineer had been utterly forgotten. Thus anyone who had managed to climb it would always be the first."), _react2.mdx("p", null, "Whereas for Nietzsche, eternal return signified the endless renewal of life, for Eliade these words represented the continual return to an ancient mythical time. We can see the mythology of Dark Souls as being rooted in both these notions. The wanderer is born into the world over and over again in order to perform the very same tasks. At the same time, the wanderer is searching for a channel through which to renew time and the world."), _react2.mdx("p", null, "By reviving the First Flame, the Age of Fire can continue for a moment, but even this continuation is only in the sense of \u201Ctolerating history\u201D, as Eliade has put it. Even at the peak of a Golden Age, the era of decline is merely biding its time, waiting to reappear."), _react2.mdx(Kuva, {
        id: "39-796866607fdb2108caa",
        kuvateksti: "Cursed, hollow figures who have lost their minds languish in the ruins of New Londo. (Dark Souls Remastered / FromSoftware)",
        style: "kuvasuhde:16:9&2:3;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "The first part of the game tells the story of Lordran, a land where culture once flourished but where years of decay have already burrowed their way deep into the inhabitants\u2019 souls. The following parts of the story take place in later historical periods in the kingdoms of Drangleic and Lothric, where the same myth of the dwindling flame repeats once again. Mountain climbers embark on their bid to conquer the mountain, fall into ravines and start again from the beginning. Culture flourishes, decays and is destroyed until, amid the darkness, a new flame flickers into life. "), _react2.mdx("p", null, "The world order surrounding the myth of the First Flame resembles the notion of fire as the original impetus behind the world, as espoused by the Greek philosopher Heraclitus. In one of his fragments, he writes:\nThis world, which is the same for all, no one of gods or men has made. But it always was, is, and will be: an ever-living Fire, with measures of it kindling, and measures going out."), _react2.mdx("p", null, "The Stoics who lived after Heraclitus developed the notion of a fire to cleanse everything on the earth (ekpyrosis), an event in which the world would be completely destroyed then rebuilt in exactly the same way. The cycle of all-engulfing fire is deemed to continue in perpetuity."), _react2.mdx("p", null, "The notion of cultures cyclically growing and falling is ancient and universal. In Greek philosophy, a mythical Golden Age is followed by a series of eras marked by gradually depreciating metals at the mercy of which civilisation wandered from divinity, virtue and hard work towards ever greater dishonesty, violence and chaos. "), _react2.mdx("p", null, "Hindu cosmological thought is also founded on the idea of four gradually depreciating eras. Naturally, we are currently living in the last of these eras, an age of darkness known as kali yuga and that is marked by sin, greed, deceit and plague."), _react2.mdx(Skrolli, {
        tyylit: "kuvasuhde:16:9&2:3;",
        mdxType: "Skrolli"
    }, [
        {
            id: "39-796828607fd0bd2cdf4",
            type: "kuva",
            kuvateksti: "The player wanders from one reviving bonfire to the next, searching for a channel with which to renew the world. (Dark Souls Remastered / FromSoftware)"
        }
    ]), _react2.mdx("p", null, "Not all theories of decline are positioned within such cosmic proportions. The cultural historian and philosopher Oswald Spengler believed that every culture goes through a series of developmental phases resembling the seasons. Culture is manifested like the spring bursting into bloom, it flourishes throughout the summer months, uses up its inner resources as autumn draws in, and as winter sets in it withers, shrivelling to nothing but bureaucratic civilisation. "), _react2.mdx("p", null, "For Spengler, decline manifested itself in different cultures as essentially the same array of symptoms: utilitarianism, belligerence, a lack of history, childlessness, a \u201CSecond Religiousness\u201D, as Spengler would put it, and Caesarism, an apathy towards the rise of abusive dictators. Culture achieved its objectives and wore itself out. According to Spengler, Western culture entered the winter phase during the 19th century."), _react2.mdx("p", null, "A pessimistic view of the development of human culture was also at the root of the works of J. R. R. Tolkien, the father of modern fantasy literature. For him, technological advances did not represent a better future, and history was not on a trajectory towards ever greater successes. Rather, 20th-century man lived in a state of constantly increasing barbarism. In one of his letters, Tolkien sums up his understanding of history thus:"), _react2.mdx("p", null, "I am a Christian, and indeed a Roman Catholic, so that I do not expect \u2018history\u2019 to be anything but a \u2018long defeat\u2019\u2014though it contains (and in a legend may contain more clearly and movingly) some samples or glimpses of final victory."), _react2.mdx("p", null, "Tolkien\u2019s literary output can also be positioned within the continuum of the four ages. In the beginning, the world was created from an eternal flame which flickers behind everything else. In the first chapter of The Silmarillion, Earth is described as \u201Cyet young and full of flame\u201D. After this, the world necessarily alternates between war and peace, chaos and order. The fourth age is the age of humankind, an age about which we know only very little. "), _react2.mdx(Kuva, {
        id: "39-796875607fdd4f27885",
        kuvateksti: "Cursed, hollow figures who have lost their minds languish in the ruins of New Londo. (Dark Souls Remastered / FromSoftware)",
        style: "kuvasuhde:2:3;",
        mdxType: "Kuva"
    }), _react2.mdx(Kuva, {
        id: "39-796881607fdef0bab77",
        kuvateksti: "The hero on his way to the Kiln of the First Flame to battle against the Soul of Cinder. (FromSoftware)",
        style: "kuvasuhde:2:3;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "Indeed, a Golden Age and kali yuga necessarily alternate in the world order of Dark Souls too. The kingdom lives through periods of \u2018long defeat\u2019 during which the flame which has fed culture dwindles in concrete fashion. The First Flame can be nurtured with human sacrifices, thereby buying extra burning time, which the limited beings infatuated with the period of cultural prosperity eagerly try to bring about. For them, the Golden Age should continue forever."), _react2.mdx("p", null, "This notion brings to mind a seemingly popular interpretation among factions of the alt-right, who greatly admire Spengler, which asserts that something should or at least ought to be done about Western decline. As if there were some way we could turn back the sunset."), _react2.mdx("p", null, "Both Spengler and Dark Souls simply tell us what inevitably awaits us. We must learn to love our own fate."), _react2.mdx(DarkSoulSubheader, {
        header: "The journey",
        number: "V",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, "I follow the path of the wanderer through the ruins. I clamber out of the dark recesses of the dungeon to a cliff edge shrouded in mist and continue my journey through the graveyards towards the accursed cities. "), _react2.mdx("p", null, "In a quiet, distant woodland a giant wolf keeps watch over the grave of his master, who died centuries earlier, with a sword clenched between its teeth. Hidden away in his chamber, King Drangleic is spinning in an eternal circle having lost his mind, as though caught in a nightmarish Shakespearean vision. A veiled Dancer of the Boreal Valley performs violent pirouettes in an empty hall to music rivalling the choral works of Arvo P\xE4rt. "), _react2.mdx("p", null, "There are wanderers who collapse under a heavy burden as they search for the ultimate perdition. There is a dumb and crippled prince crawling towards the final battle, carrying his weak brother on his back. There is the son of the sun god, raised as a girl because of his affection for the moon. "), _react2.mdx("p", null, "In observing the landscape in Dark Souls, it is hard not to think of Caspar David Friedrich\u2019s paintings of ruins, of Gustave Dor\xE9\u2019s etchings of hell, William Blake\u2019s primordial monsters and Goya\u2019s ghosts. Dark Souls owes everything to the dreamlike mysteriousness of Romantic art, to its darkness, its celebration of decline."), _react2.mdx(Kuva, {
        id: "39-796837607fd55a0fb52",
        kuvateksti: "Caspar David Friedrich\u2019s Romantic visions of ruins have inspired many gaming worlds. Their impact on Dark Souls is self-evident. The Abbey in the Oakwood (1809\u20131810). (Wikimedia Commons)",
        style: "kuvasuhde:16:9;",
        mdxType: "Kuva"
    }), _react2.mdx(Kuva, {
        id: "39-796838607fd5d00be24",
        kuvateksti: "The Firelink Shrine from Dark Souls. (Dark Souls Remastered / FromSoftware)",
        style: "kuvasuhde:16:9;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "Perhaps the most important figure in German Romanticism is that of the Wanderer, whose internal melancholy was often described alongside the magic elements of the surrounding nature. In Winterreise, Franz Schubert\u2019s setting of texts by Wilhelm M\xFCller, the wanderer walks through a series of barren landscapes, his wounded limbs burning, is led away by a will-o\u2019-the-wisp and becomes lost in \u201Cdeepest clefts of rock\u201D and finds his way to the charcoal-burner\u2019s hut. Not even in the graveyard can he find rest. "), _react2.mdx("p", {
        id: "center",
        "data-paragraph-foo": "spacetop"
    }, "What senseless craving"), _react2.mdx("p", {
        id: "center"
    }, "drives me into the wilderness?"), _react2.mdx("p", {
        id: "center"
    }, "Signposts stand on the roads,"), _react2.mdx("p", {
        id: "center"
    }, "point towards towns."), _react2.mdx("p", {
        id: "center"
    }, "Yet I wander on and on,"), _react2.mdx("p", {
        id: "center",
        "data-paragraph-foo": "spacebottom"
    }, "unresting, in search of rest."), _react2.mdx("p", null, "Eventually, the wanderer sees an old beggar playing a hurdy-gurdy and asks him to accompany his song, creating a curious perpetual motion, as the tenor Ian Bostridge has put it \u201Ca musical-poetical serpent biting its own tail\u201D, a lament that time and again guides the wanderer back to the beginning."), _react2.mdx("p", null, "The wanderer can also be found in the character classes in Part One of Dark Souls. I select the wanderer and begin this primitive perpetual motion from the beginning once again, with the ebb and flow of Winterreise in my mind."), _react2.mdx(Skrolli, {
        tyylit: "kuvasuhde:16:9&2:3;",
        mdxType: "Skrolli"
    }, [
        {
            id: "39-796833607fd4a689b3b",
            type: "kuva",
            kuvateksti: "Dark Souls continues the great journey of the Romantic era. (FromSoftware)"
        }
    ]), _react2.mdx(DarkSoulSubheader, {
        header: "Collapse",
        number: "VI",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, "The Romanticism of Dark Souls, its fallen gods, its demons, the dialogues written in archaic English and the general atmosphere of impending decline awaken many associations with the literary canon of bygone centuries. Indeed, there is something profoundly literary about the game, something that sets it apart from the numerous big-budget games that try to imitate cinematic storylines."), _react2.mdx("p", null, "I think of Lord Byron\u2019s apocalyptic poem \u2018Darkness\u2019 (1816), its description of people languishing under an extinguished sun, burning everything in their cities, thrones and all, simply to spend another moment in the light. The last remaining survivors make their way to \u201Cthe dying embers of an altar-piece\u201D, gather together some kindling and blow into life \u201Ca flame / Which was a mockery\u201D, which flickers for a moment before all is engulfed in darkness."), _react2.mdx("p", null, "I think of An Inhabitant of Carcosa (1886) by the American horror writer Ambrose Bierce, in which a man plagued by delirious visions wanders from his hospital bed out into the wastelands and eventually finds himself among a cluster of gravestones. Past him walks an archer dressed only in oilskins and carrying a flaming torch. The man does not notice the protagonist at all, but simply walks past him performing a barbarous chant in an unknown language. Eventually the narrator finds his own name among the gravestones and realises that he has arrived at the ruins of his hometown, and that he is dead."), _react2.mdx(Kuva, {
        id: "39-796840607fd68614b48",
        kuvateksti: "Samuel Colman\u2019s The Edge of Doom (1836\u20131838) depicts a world and time collapsing into emptiness. (Bequest of Laura L. Barnes, by exchange, Brooklyn Museum photograph)",
        style: "kuvasuhde:16:9&2:3;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "Through its artistry, the Dark Souls series creates before the player \u201Ca perfect Goyaesque world in which the meaning and values of a life that has collapsed amid the ruins attempts to stay upright,\u201D as the film director Rax Rinnekangas notes in his work Nocturama. This quotation, however, is a description of the German writer W. G. Sebald, in whose works the reader wanders through a crumbling Europe like the living dead and tries to understand the continent\u2019s past. On the surface, these novels have nothing more in common with the demonic fantasy world of Dark Souls than the figure of the mysterious wanderer, the lack of a deeper meaning and the general sense of fading."), _react2.mdx("p", null, "But this in itself is not a small commonality. The most touching aspect of Sebald\u2019s books is his stubborn desire to continue the great wandering of the Romantics, though even the narrator himself understands the impossibility of such an endeavour. It is too late. Europe has become old, the world is in smithereens and the flame is dwindling. All that is left of Romanticism is a charred melancholy, of our winter journey all we have left is our exhaustion and a history steamrollered by the banality of the modern age. Even the snows of the Alps will soon have melted for good."), _react2.mdx("p", null, "In the third part of Dark Souls I find myself in a place where all the cities of the past have been crushed together over time to create a nightmarish vision to challenge the laws of physics. This is the Dreg Heap, where past civilisations slowly collapse and sink towards a single point. The horror of history rushes over me. I understand it less and less."), _react2.mdx(Skrolli, {
        tyylit: "kuvasuhde:16:9&2:3;",
        mdxType: "Skrolli"
    }, [
        {
            id: "39-796868607fdb91744a0",
            type: "kuva",
            kuvateksti: "The Dreg Heap, the wasteland of history, is one of the most enigmatic locations in the concluding part of Dark Souls. (FromSoftware)"
        }
    ]), _react2.mdx(DarkSoulSubheader, {
        header: "Prayer",
        number: "VII",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, "On the few occasions I took a couple of months\u2019 break from Dark Souls, I moped around and sought comfort elsewhere. I played other games, the biggest, most acclaimed and successful games in the world. With most of them, I lost interest fairly quickly. Everything felt like cheap entertainment, mediocre running around, optimistic hogwash. Dark Souls had left its mark on me. And so I always came back to the game and continued running this traumatic gauntlet. "), _react2.mdx("p", null, "When I was struggling with the most challenging parts of the game, without my noticing I would kneel down in front of the television. At first this was just an intuitive way of focusing my attention and bringing myself closer to the screen. But as a result of this kneeling, in a curious way I found myself feeling humbler. Let me overcome this, I chanted in my mind over and over as I clasped my hands together across the controls.\nWho was I actually talking to?"), _react2.mdx("p", null, "I later discovered that Hidetaka Miyazaki, who designed Dark Souls, had intended the game to be an experience similar to prayer. He did not think of swords, fireballs and spells as symbols of power. Rather, they represent the last hope, something with which we can just barely succeed. In addition to weapons we need intelligence, skill\u2014and faith. "), _react2.mdx("p", null, "\u201CI myself am not religious, but when I\u2019m faced with something I cannot control, my last resort is to pray. It\u2019s that element that I want to express in the game,\u201D Miyazaki has said in The Dark Souls Companion. "), _react2.mdx("p", null, "Dark Souls encourages the player to practice devotion, both in the most solitary recesses of the mind and in the sense of community facilitated online. \u201CPraise the sun\u201D is a phrase repeated by many of the game\u2019s most fervent followers. It is a phrase regularly encountered in the messages players leave on earth. Associated with this, the sun salute is one of the most common gestures of the Dark Souls characters."), _react2.mdx(Kuva, {
        id: "39-796829607fd107b5721",
        kuvateksti: "Praise the sun! In the realm of Drangleic, the sun offers the wanderer scant comfort. (Dark Souls 2 / FromSoftware)",
        style: "kuvasuhde:16:9&2:3;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "In this bleak world, so rarely does the sun appear in its full glory that players are only too eager to beatify it. In this way, thousands of people in rooms across the world can come together in an archaic sun-worshipping ritual in a world of virtual spirits."), _react2.mdx("p", null, "Or is someone really going to suggest that this isn\u2019t a real ritual? "), _react2.mdx(DarkSoulSubheader, {
        header: "Depression",
        number: "VIII",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, "Compared with other gamers, Dark Souls disciples talk surprisingly often about crying, tears and despair. Having said that, a common notion among the community of players is that these games make people tougher. The internet is full of stories of people who have overcome depression and suicidal ideation with the help of Dark Souls."), _react2.mdx("p", null, "I don\u2019t doubt this for a minute. The game can be seen as an epic journey into the nature of depression. Whereas depth psychology talks about demons in a metaphorical sense, Dark Souls makes them visible and allows the player to conquer them. The real demon is revealed in how each player relates to the game. Is long defeat the same as ultimate loss? Can fatalism be turned into victory? "), _react2.mdx(Kuva, {
        id: "39-796836607fd50a96052",
        kuvateksti: "In the landscape of loss. (Dark Souls 3 / FromSoftware)",
        style: "kuvasuhde:16:9&2:3;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "Dark Souls often feels like an eternal limbo between light and perdition. The curse turning the world hollow resembles a feeling of depression that can also feel as though it will last an eternity. Depression erases our previous achievements and opportunities for the future. All that is left is a horizon of suffering, an almost religious belief that our distress is endless."), _react2.mdx("p", null, "There is a path leading out of stagnation. We must crawl through poisonous bogs, fumble our way through dark catafalques and slay beasts. We must learn to save our strength and give our all. Defeat is inevitable, there is no doubt about that. At the same time, it encourages us to climb to our feet and try again. When we finally achieve our goals, the experience is almost ecstatic."), _react2.mdx(DarkSoulSubheader, {
        header: "Opera",
        number: "IX",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, "No text, image or video clip can do justice to an experience like playing Dark Souls. All the elements that make games an artform in their own right are missing: the experience of interaction, controlling the character, the geometry of the world, the expansive sense of space."), _react2.mdx("p", null, "At their best, games are stories that cannot be told in any other format. The drama is woven into the unspoken details of the surroundings, their physical impulses: the expectation of a battle, the relief of a fiery flask brought to the lips, two players\u2019 unpredictable dance of death on a misty bridge. Or, quite simply, what walking and jumping feel like."), _react2.mdx("p", null, "In the world of Dark Souls, it is possible to see the ghostlike contours of other players. They sit at the bonfires, swishing their swords at invisible opponents, they die or dissolve from view. These ghosts open up a panorama on the thousands of ways it is possible to live and die in this game. The player realises he is simply one mute spirit amid innumerable others. On the other hand, in a dejected world, this provides a glimmer of optimism: I am not alone."), _react2.mdx("p", null, "Despite their creativity and financial success, video games are still easily classed as somehow beneath canonical \u2018high\u2019 culture. When an opera singer sings of dragons or a philosopher writes about demons, the audience nods in approval. But to many people, the monsters of the gaming world still feel childish."), _react2.mdx("p", null, "This is partly due to the puerile and in many ways childish disservice the industry has done to itself. At their best, video games approach total art (Gesamtkunstwerk)\u2014in fact, often more successfully than many other artforms. The term, made famous by the opera composer Richard Wagner, denotes a work in which the traditional arts of poetry, theatre and music are seamlessly fused together."), _react2.mdx(Kuva, {
        id: "39-796844607fd7b6c0416",
        kuvateksti: "The gaming world\u2019s most operatic product? (Dark Souls 3 / FromSoftware)",
        style: "kuvasuhde:2:3;",
        mdxType: "Kuva"
    }), _react2.mdx(Kuva, {
        id: "39-797224608029d02baaf",
        kuvateksti: "Arthur Rackham\u2019s illustration from Wagner\u2019s Ring Cycle. (Wikimedia Commons)",
        style: "kuvasuhde:2:3;",
        mdxType: "Kuva"
    }), _react2.mdx("p", null, "I have taken to calling Dark Souls the most operatic of video games. Its language, costumes, backdrops and plotlines are full of operatic drama. The story explores the same themes as Wagner\u2019s Ring Cycle, in which gods, mortals, giants and dragons engage in battle, where greed and power hunger thrive and where mythical ages repeat cyclically. In the end, even the gods are sacrificed by fire. In Dark Souls, the characters that the wanderer encounters whose names begin with \u2018Sieg-\u2019 refer quite explicitly to Wagner\u2019s Siegfried, Siegmund and Sieglinde."), _react2.mdx("p", null, "But more than anything, like the Ring tetralogy, the Dark Souls series is the most challenging endurance test in its field, and faced with its slowly manifesting mythical-poetical world, the beginner can quickly become disheartened. In order to achieve the greatest reward, one must surrender to both these epics completely."), _react2.mdx(DarkSoulSubheader, {
        header: "Ash",
        number: "X",
        mdxType: "DarkSoulSubheader"
    }), _react2.mdx(AloitusKappale, {
        mdxType: "AloitusKappale"
    }, "In each part of Dark Souls the player wades through thousands of desolate landscapes, finds his way to the furnaces of the universe and defeats a being who has slumped into desperate madness and who in one way or another attempts to impact the dwindling of the First Flame. At this point comes a fateful moment unlike any other in the history of video games. The player can choose whether to sacrifice himself to the First Flame, thus allowing the age of the gods to continue, or walk away and let the world sink into darkness."), _react2.mdx("p", null, "This is not a question of choosing between good and evil. The continuation of the Age of Fire will restore some of the beauty of creation. Yet it is simultaneously a state that defies the cosmic cycle, and its artificial upkeep only serves to draw out mortal suffering. Before long, a time of darkness will descend. The age of darkness is an age of mortals\u2014after all, since the dawn of time humans have carried within them a dark soul."), _react2.mdx("p", null, "No matter which option I chose, after the final credits, the whole pointless Sisyphean endeavour would start again, only this time it will be more difficult. What was I supposed to learn from this?"), _react2.mdx("p", null, "At the start of the final part, the cycle of stoking the flame and letting it dwindle has continued through the ages. Civilisations have flourished and declined, antiheroes have died and been born again many times over. After constant revivification, even the First Flame is exhausted, and the mythology of fire has become a mythology of ash. "), _react2.mdx("p", null, "Stoking the First Flame has become nothing but a \u201Cre-enactment of the first linking of the fire\u201D, as the legless pygmy king Ludleth tells the wanderer."), _react2.mdx("p", null, "As we know, such things have no meaning to humans. A re-enactment or not, a ritual can return us to the fabled beginnings of time again and again."), _react2.mdx("p", null, "I find my way into a crater covered in thick ash and encounter the final obstacle on my journey. It is not a giant demon or a dragon of lore, but a shadowy human figure glowing like an ember, the Soul of Cinder. This is the incarnation of every successful and unsuccessful wanderer fighting desperately to remain within the faint glimmer of the flame. At the same time, the wanderer is fighting against his own shadow, the gaming community and the entirety of history."), _react2.mdx("p", null, "The hundreds of hours I have spent playing Dark Souls have not made me a particularly good player. It takes countless attempts to finally defeat one\u2019s shadow. I exhaust myself. I give up for weeks at a time. When I finally return to the struggle, I have forgotten my sense of despair and defeat, my rage and pride. My shadow is felled after only a few attempts, almost easily. After years of masochism, the final foe has been vanquished."), _react2.mdx("p", null, "I stand up from my painful kneeling prayer and with trembling hands wipe away the tears that have pushed their way to the surface. No other video game has ever caused me to react in this way. It is as though an entire trauma has been sucked away all at once."), _react2.mdx("p", null, "The great struggle towards the emptiness has ended."), _react2.mdx("p", null, "*", "*", "*"), _react2.mdx(DarkSoulShareButtons, {
        centered: true,
        iconColor: "white",
        mdxType: "DarkSoulShareButtons"
    }), _react2.mdx(AuthorBox, {
        centered: true,
        title: "Tekij\xE4t",
        authorText: "<span>Julkaistu: **18.5.2021**. Teksti: **Jantso Jokelin**. Editointi: **Teemu Laaksonen**. Ulkoasu: **Hannes Nissinen**, **Antti Ollikainen**. Koodi: **Antti Saarenp\xE4\xE4**, **Annika Veteli**</span>",
        mdxType: "AuthorBox"
    }), _react2.mdx(LahdeLuettelo, {
        mdxType: "LahdeLuettelo"
    }, "L\xE4hteet:", _react2.mdx("p", null, "Ambrose Bierce: \u201DCarcosan asukas\u201D. Suom. Maikki Soro. Teoksessa Klassikkokirjailijoiden parhaat kummitustarinat (toim. Lisa Morton & Leslie S. Klinger). Minerva 2019."), _react2.mdx("p", null, "Ian Bostridge: Schubertin Talvinen matka. Winterreise. Suom. Sampsa Laurinen. Basam Books 2015."), _react2.mdx("p", null, "Mircea Eliade: Ikuisen paluun myytti. Kosmos ja historia. Suom. Teuvo Laitila. Loki-kirjat 1993."), _react2.mdx("p", null, "Michael Ende: Tarina vailla loppua. Suom. Marja Kyr\xF6. Otava 2007."), _react2.mdx("p", null, "Herakleitos: Fragmentit tulesta. Suom. Jari M\xF6ller. niin & n\xE4in 4/2013. ", _react2.mdx("a", {
        parentName: "p",
        "href": "https://netn.fi/sites/www.netn.fi/files/netn134-07.pdf%5D"
    }, "https://netn.fi/sites/www.netn.fi/files/netn134-07.pdf]")), _react2.mdx("p", null, "Hesiodos: Ty\xF6t ja p\xE4iv\xE4t. Suom. Paavo Castr\xE9n. Tammi 2004."), _react2.mdx("p", null, "Keza Macdonald & Jason Killingsworth: You Died: The Dark Souls Companion. BackPage Press 2016."), _react2.mdx("p", null, "Aleksandr Manzos: Pelit el\xE4m\xE4n peilin\xE4. Avain 2018."), _react2.mdx("p", null, "Friedrich Nietzsche: Iloinen tiede. Suom. J. A. Hollo. Otava 2004."), _react2.mdx("p", null, "Rax Rinnekangas: Nocturama. Sebaldia lukiessa. Lurra Editions 2013."), _react2.mdx("p", null, "John M. Rist: The Stoics. University of California Press 1978."), _react2.mdx("p", null, "Oswald Spengler: L\xE4nsimaiden perikato. Maailmanhistorian morfologian \xE4\xE4riviivoja. Suom. Yrj\xF6 Massa. Tammi 2002."), _react2.mdx("p", null, "J. R. R. Tolkien: Silmarillion. Suom. Kersti Juva. WSOY 2018."), _react2.mdx("p", null, "J. R. R. Tolkien: Kirjeet. Suom. Tero Valkonen. WSOY 2009.")));
}
MDXContent.isMDXComponent = true;

},{"./darksoul.css":"eQFYD","./authorsAndShareButtons.css":"jlO7D"}],"eQFYD":[function() {},{}],"jlO7D":[function() {},{}]},["jwXKR","hXW5D"], "hXW5D", "parcelRequire0b73")

//# sourceMappingURL=createHTML-build.js.map
