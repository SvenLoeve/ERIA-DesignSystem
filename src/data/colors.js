const tailwindConfig = require("../../tailwind.config.js");

module.exports = function () {
	// Extracting colors from the Tailwind config
	return tailwindConfig.theme.extend.colors;
};