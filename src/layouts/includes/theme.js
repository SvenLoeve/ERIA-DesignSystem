let loaded;
function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
	if (loaded) {
		setToggleActive(theme);
	}
}

function setToggleActive(theme) {
	const lightToggle = document.getElementById('light-theme-toggle');
	const darkToggle = document.getElementById('dark-theme-toggle');

	if (theme === 'light') {
		lightToggle.classList.add('tab-active');
		darkToggle.classList.remove('tab-active');
	} else {
		lightToggle.classList.remove('tab-active');
		darkToggle.classList.add('tab-active');
	}
}

document.addEventListener('DOMContentLoaded', function() {
	setToggleActive(savedTheme || defaultTheme);
	loaded = true;
})

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