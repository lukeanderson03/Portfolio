
// The export statement makes these settings available to other files in 11ty
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("timeline", function (bulletColor, description) {
    return `<section>
      <div id="bullet-points" class="${bulletColor}"></div>
      <p>${description}</p>
    </section>`
  });
};