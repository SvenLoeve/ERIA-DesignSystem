const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {

	if (process.env.ELEVENTY_PRODUCTION) {
		eleventyConfig.addTransform("htmlmin", htmlminTransform);
	}

	var pathPrefix = "";
	if (process.env.GITHUB_REPOSITORY) {
		pathPrefix = process.env.GITHUB_REPOSITORY.split('/')[1];
	}

	// Passthrough
	eleventyConfig.addPassthroughCopy({ "src/assets": "." });

	// Watch targets
	eleventyConfig.addWatchTarget("./src/styles/");

	// Mermaid
	const highlighter = eleventyConfig.markdownHighlighter;
	eleventyConfig.addMarkdownHighlighter((str, language) => {
		if (language === "mermaid") {
			return `<pre class="mermaid not-prose">${str}</pre>`;
		}
		return highlighter(str, language);
	});

	return {
		markdownTemplateEngine: "njk",
		dir: {
			input: "src/pages",
			output: "public",
			includes: "../layouts",
			layouts: "../layouts",
			data: "../data",
		},
		pathPrefix: pathPrefix,
	};
}

function htmlminTransform(content, outputPath) {
	if( outputPath.endsWith(".html") ) {
		let minified = htmlmin.minify(content, {
			useShortDoctype: true,
			minifyJS: true,
			minifyCSS: true,
		});
		return minified;
	}
	return content;
}