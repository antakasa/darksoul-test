const Namer = require('@parcel/plugin').Namer;
const relativePath = require('path').relative;
const parsePath = require('path').parse;

const createJSFileName = ({ name, hash, isEsModule}) =>
  `${name}.${hash}.${isEsModule ? 'es6.' : ''}js`;

const getFileName = (bundle, projectRoot) => {
  const { filePath: bundlePath } = bundle.getMainEntry();
  const filePath = relativePath(projectRoot, bundlePath);
  const parsed = parsePath(filePath);
  return parsed.name;
};

const isEsModule = (bundle) =>
  // https://v2.parceljs.org/plugin-system/api/#SourceType
  // https://v2.parceljs.org/plugin-system/api/#OutputFormat
  bundle.env.outputFormat === 'esmodule' &&
  bundle.env.sourceType === 'module';

module.exports = new Namer({
  async name({ bundle, bundleGraph, logger, options }) {
    if(typeof bundle.getMainEntry() === "undefined") return null 
    if (getFileName(bundle, options.projectRoot) === "createHTML") {
      return "createHTML-build.js"
    }
    
    return bundle.type === 'js' 
      ? createJSFileName({
          name: getFileName(bundle, options.projectRoot),
          hash: bundle.hashReference,
          isEsModule: isEsModule(bundle)
        })
      : null;
  },
});
