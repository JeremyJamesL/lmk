export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./dist/");
  eleventyConfig.addPassthroughCopy("./assets/");
}
