module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("assets");

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "dist",
      include: "includes",
    },
  };
};
