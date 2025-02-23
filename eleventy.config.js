import pluginSEO from "eleventy-plugin-seo";
import htmlmin from "html-minifier-terser";

export default function (eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy("./dist/");
  eleventyConfig.addPassthroughCopy("./assets/");

  // Plugins
  eleventyConfig.addPlugin(pluginSEO, {
    title: "Lisa McKinney",
    description: "Lisa is a London based prop and interior stylist",
    url: "https://lisa-mckinney.co.uk",
  });

  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });
}
