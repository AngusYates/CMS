module.exports = function(eleventyConfig) {

    // eleventyConfig.addCollection("doc", (collection) =>
    //     collection.getFilteredByGlob("documentation/*.md").sort((a, b) => {
    //         return b.position - a.position;
    //     })
    // );

    eleventyConfig.addCollection("doc", function(collection) {
        var temp = collection.getAll();
        var temp2 = [];
        for(page in temp){
            if(page.data.tags == "documentation"){
                temp2.push(page);
            }
        }
        return temp2.sort((a,b) => {
            return b.position - a.position;
        })
    });


    eleventyConfig.addPassthroughCopy('Images');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('admin');
}