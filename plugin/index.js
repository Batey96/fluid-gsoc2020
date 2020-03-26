var shell = require('shelljs');  

  function netlifyPlugin(conf) {
  return {
    name: 'plugin',
    async onPostBuild() {
      shell.exec("git submodule add https://github.com/Batey96/infusionDocsContents.git docs");
    }
  };
}

module.exports = netlifyPlugin;