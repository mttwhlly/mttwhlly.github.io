export default function(eleventyConfig) {
    // Copy the CSS file to the output directory
    eleventyConfig.addPassthroughCopy("_site/style.css");
    
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  }