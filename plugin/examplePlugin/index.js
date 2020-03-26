function netlifyPlugin(conf) {
    return {
      // Plugin Name
      name: 'my-first-plugin',
      // Hook into lifecycle
      onEnd: () => {
        console.log("Chop ya netlify ar cut you cafexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 🚀")
      }
    }
  }
  
  module.exports = netlifyPlugin