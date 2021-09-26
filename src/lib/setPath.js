function setPath(projectName) {
  if (window.location.href.match('localhost')) {
    // Standalone
    return '//localhost:3000/';
  }

  if (window.location.href.match('dev.yle.fi')) {
    // Uutiset and urheilu
    return `//dev.yle.fi/${projectName.split('-')[0]}/${projectName}/public/`;
  }

  if (window.location.href.match('svenska.yle.fi')) {
    // Svenska
    return `//svenska.yle.fi/dataviz/2019/${projectName}/`;
  }

  if (window.location.href.match('yle.fi/aihe')) {
    // Lume
    return `//lusi-dataviz.ylestatic.fi/${projectName}/`;
  }

  // Production
  return `//plus.yle.fi/${projectName}/`;
}

export default setPath;
