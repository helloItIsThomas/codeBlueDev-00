module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/shaders");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/three": "js/three",
    "./node_modules/p5/lib/p5.min.js": "js/p5",
    "./node_modules/pixi.js/dist": "js/pixi",
    "./node_modules/shader-park-core/dist": "js/shaderpark",
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
