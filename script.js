// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Optionally, show a confirmation message within the page instead of alert
  const confirmationMessage = document.createElement('div');
  confirmationMessage.textContent = 'Your message has been sent successfully!';
  confirmationMessage.style.color = 'green';
  confirmationMessage.style.marginTop = '20px';
  
  // Append confirmation message after the form
  this.appendChild(confirmationMessage);
});

// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check if the user has a preferred theme saved in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');  // Add dark-mode class to the body
  themeToggleButton.innerHTML = '🌕'; // Change the icon to sun (for dark mode)
} else {
  document.body.classList.remove('dark-mode');  // Remove dark-mode class (light mode by default)
  themeToggleButton.innerHTML = '🌙'; // Change the icon to moon (for light mode)
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
  
  // Change the icon depending on the current theme
  if (document.body.classList.contains('dark-mode')) {
    themeToggleButton.innerHTML = '🌕'; // Sun icon for dark mode
    localStorage.setItem('theme', 'dark'); // Save dark mode preference in localStorage
  } else {
    themeToggleButton.innerHTML = '🌙'; // Moon icon for light mode
    localStorage.setItem('theme', 'light'); // Save light mode preference in localStorage
  }
});
