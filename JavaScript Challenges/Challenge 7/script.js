// script.js

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-btn');
    const confirmPasswordInput = document.querySelector('input[type="cPassword"]');
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.textContent = "Passwords don't match";
  
    confirmPasswordInput.insertAdjacentElement('afterend', errorMessage);
    errorMessage.style.display = 'none';
  
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const passwordInput = document.querySelector('input[type="password"]').value;
      const cPasswordInput = confirmPasswordInput.value;
  
      if (passwordInput !== cPasswordInput) {
        errorMessage.style.display = 'block';
      } else {
        window.location.href = 'quote.html'; // Redirect to the quotes page
      }
    });
  });
  