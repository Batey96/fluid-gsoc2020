var shell = require('shelljs');  

var shell = require('shelljs');
var fetch = require('node-fetch');

function prepareReleases(){
  
}
 async function getSubModuleVersions(){
 // exec("git submodule add https://github.com/Batey96/testCLoner.git docs");
   const response =  await fetch('https://api.github.com/repos/Batey96/testCLoner/tags')
  .then(response => response.json())
  .then(data => {
    shell.exec("git submodule add https://github.com/Batey96/testCLoner.git docs")
    data.forEach(element => {
        shell.exec("git submodule foreach --recursive 'git archive --verbose --prefix="+element.name+"/ --format=tar "+element.name+" | (cd docs/ && tar xf -)'",{async:true})
       console.log(element.name);
    });
    
  })
   // shell.exec("git submodule add https://github.com/Batey96/infusionDocsContents.git "+config.content_path+"docs");
}

  function netlifyPlugin(conf) {
  return {
    name: 'plugin',
    async onInit() {
      await getSubModuleVersions()
    }
  };
}

module.exports = netlifyPlugin;