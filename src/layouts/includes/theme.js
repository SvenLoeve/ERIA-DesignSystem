function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
let defaultTheme = 'light';
if (savedTheme) {
	setTheme(savedTheme);
} else {
	// Check for user's system preference for dark mode
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (prefersDarkScheme) { defaultTheme = 'dark'; }
	setTheme(defaultTheme);
}