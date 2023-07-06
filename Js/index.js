
// Get the elements
const searchInputs = document.querySelectorAll('.search-textbox');

// Add focus event listeners to the input fields
searchInputs.forEach(input => {
  input.addEventListener('focus', handleInputFocus);
  input.addEventListener('blur', handleInputBlur);
});

// Input focus event handler
function handleInputFocus(event) {
  event.target.parentElement.classList.add('focused');
}

// Input blur event handler
function handleInputBlur(event) {
  event.target.parentElement.classList.remove('focused');
}
