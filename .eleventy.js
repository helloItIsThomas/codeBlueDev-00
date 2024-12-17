module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/shaders");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/three": "js/three",
  });

  eleventyConfig.setServerOptions({
    // Opt-out of the live reload snippet
    enabled: true,
    // Opt-out of DOM diffing updates and use page reloads
    domdiff: false,
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
    // watch: false,
    watch: true,
  };
};
