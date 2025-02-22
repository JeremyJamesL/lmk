import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./dist/");
  eleventyConfig.addPassthroughCopy("./assets/");
}
