module.exports = function(eleventyConfig) {

    // eleventyConfig.addCollection("doc", (collection) =>
    //     collection.getFilteredByGlob("documentation/*.md").sort((a, b) => {
    //         return b.position - a.position;
    //     })
    // );

    eleventyConfig.addCollection("doc", function(collection) {
        return collection.documentation.sort(function(a, b) {
          return b.date - a.date;
        });
      });


    eleventyConfig.addPassthroughCopy('Images');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('admin');
}