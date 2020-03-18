module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("doc", (collection) =>
        collection.getFilteredByGlob("_documentation/*.md").sort((a, b) => {
            return b.position - a.position;
        })
    );


    eleventyConfig.addPassthroughCopy('Images');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('admin');
}