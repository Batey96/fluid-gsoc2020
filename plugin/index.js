  function netlifyPlugin(conf) {
  return {
    name: 'plugin',
    async onPostBuild() {
      console.log('Runing from above xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    }
  };
}

module.exports = netlifyPlugin;