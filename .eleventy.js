module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("admin");
    return{
        passthroughFileCopy: true
    }
}