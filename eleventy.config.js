import pluginSEO from "eleventy-plugin-seo";

export default function (eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy("./dist/");
  eleventyConfig.addPassthroughCopy("./assets/");

  // Plugins
  eleventyConfig.addPlugin(pluginSEO, {
    description: "Lisa is a London based prop and interior stylist",
    url: "https://lisa-mckinney.co.uk",
  });
}
