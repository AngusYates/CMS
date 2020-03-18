module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("doc", function(collection) {
        return collection.getAll().sort(function(a, b) {
          return b.position - a.position;
        });
      });

    eleventyConfig.addPassthroughCopy('Images');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('admin');
}