let handlebars = require("handlebars");

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setLibrary("hbs", handlebars);
    return{
        passthroughFileCopy: true
    }
}