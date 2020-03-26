var shell = require('shelljs');
var config = require('../../configs');
var fetch = require('node-fetch');

async function getSubModule(){
   // fetch("https://api.github.com/repos/Batey96/infusion-docs/tags")
   
   const response =  await fetch('https://api.github.com/repos/Batey96/infusion-docs/tags')
  .then(response => response.json())
  .then(data => {
    return data
  })
   // shell.exec("git submodule add https://github.com/Batey96/infusionDocsContents.git "+config.content_path+"docs");
   response.forEach(element => {
    shell.exec("echo Versioin "+element.name);
});
  }

module.exports = {
  onInit: () => {
    console.log('hello maradona manyanmansynsxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    
  },
}