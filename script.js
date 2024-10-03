// Get the theme switcher button and theme buttons
const themeSwitcher = document.getElementById('themeSwitcher');
const themeButtons = document.querySelectorAll('.theme-buttons button');

// Function to switch between themes
function toggleTheme() {
  // Get the current theme from the body element's class
  const currentTheme = document.body.classList.contains('light') ? 'light' :
                       document.body.classList.contains('dark') ? 'dark' :
                       document.body.classList.contains('blue') ? 'blue' : 'green';

  // Switch theme
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  // Update button text
  themeSwitcher.textContent = `Switch to ${currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)} Theme`;

  // Save the new theme in localStorage
  localStorage.setItem('theme', newTheme);
}

// Function to set a specific theme
function setTheme(theme) {
  const currentTheme = document.body.className;
  document.body.classList.remove(currentTheme);
  document.body.classList.add(theme);

  // Update button text
  themeSwitcher.textContent = `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`;

  // Save the new theme in localStorage
  localStorage.setItem('theme', theme);
}

// Load the theme from localStorage if available
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme
  document.body.classList.add(savedTheme);

  // Update the button text based on the saved theme
  themeSwitcher.textContent = `Switch to ${savedTheme === 'light' ? 'Dark' : 'Light'} Theme`;
}

// Event listener for the theme switcher button
themeSwitcher.addEventListener('click', toggleTheme);

// Event listeners for the theme buttons
themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    setTheme(button.getAttribute('data-theme'));
  });
});

// Load the saved theme on page load
window.addEventListener('DOMContentLoaded', loadTheme);