module.exports = {
  modules: false,
  plugins: {
    'postcss-prefix-selector': {
      prefix: `[data-yle-vis-id="${process.env.APP_NAME}"]`,
    },
    autoprefixer: {
      flexbox: 'no-2009',
    },
  },
};
