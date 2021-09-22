import init from './src/index';

const appName = process.env.APP_NAME;
const ROOT_SELECTOR = `[data-yle-vis-id="${appName}"]`;

const eventHandlers = {
  onMount: (name, element, services = {}) => {
    if (name !== appName) {
      return;
    }
    const root = element.querySelector(ROOT_SELECTOR);
    if (!root) {
      return;
    }

    const parameters = services.getParameters() || {};
    init(root, parameters);
  },
  //Todo: Login handlers
};

const plusAppMethods = {
  embedYlePlayer: function (elem, id, options) {
    window.ylePlayer.render({
      element: elem,
      props: {
        id: id,
        playFullScreen: !!options.playFullScreen,
      },
    });
  },
  login: function () {
    window.console && console.log('login not supported');
  },
  getParameters: function () {
    return {};
  },
};

if (process.env.NODE_ENV === 'production' && window.yleVisualisation) {
  // SYND OR FYND
  window.yleVisualisationEmbeds = window.yleVisualisationEmbeds || {};
  window.yleVisualisationEmbeds[appName] = eventHandlers;
} else if (process.env.NODE_ENV === 'production' && !window.yleVisualisation) {
  // ARTICLE RENDERER OR STATIC HOSTING
  eventHandlers.onMount(appName, document.body, plusAppMethods);
  window.plusApp = window.plusApp || {};
} else if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector(ROOT_SELECTOR);
  const parameters = {};
  const searchParameters = new URLSearchParams(window.location.search);
  for (const [key, value] of searchParameters) {
    parameters[key] = value;
  }

  init(root, parameters);
} else {
  console.log('no env');
}
