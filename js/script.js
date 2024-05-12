const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const moonIcon = document.querySelector('.moon');
const sunIcon = document.querySelector('.sun');
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
  moonIcon.style.display = 'inline-block';
  sunIcon.style.display = 'none';
} else {
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'inline-block';
}
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    moonIcon.style.display = 'inline-block';
    sunIcon.style.display = 'none';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline-block';
    localStorage.setItem('darkMode', 'disabled');
  }
});
