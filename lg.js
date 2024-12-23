// 1. Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validateForm(formId, event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const email = document.querySelector(`#${formId} input[type="text"]`).value;
    const password = document.querySelector(`#${formId} input[type="password"]`).value;
  
    // Email validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return false;
    }
  
    // Password validation
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
  
    alert(`${formId === 'loginForm' ? 'Login' : 'Signup'} Successful!`);
    return true;
  }
  
  // Apply validation on both forms
  document.querySelector('#loginForm .button').addEventListener('click', function(event) {
    validateForm('loginForm', event);
  });
  
  document.querySelector('#signupForm .button').addEventListener('click', function(event) {
    validateForm('signupForm', event);
  });
  
  // 2. Password Strength Indicator for Login and Signup Forms
  function addPasswordStrengthListener(passwordFieldId, indicatorId) {
    const passwordField = document.getElementById(passwordFieldId);
    const strengthIndicator = document.getElementById(indicatorId);
  
    passwordField.addEventListener('input', function() {
      const password = passwordField.value;
      if (password.length < 6) {
        strengthIndicator.textContent = "Weak";
        strengthIndicator.style.color = "red";
      } else if (password.length < 10) {
        strengthIndicator.textContent = "Medium";
        strengthIndicator.style.color = "orange";
      } else {
        strengthIndicator.textContent = "Strong";
        strengthIndicator.style.color = "green";
      }
    });
  }
  
  // Add password strength indicator for both login and signup forms
  addPasswordStrengthListener('loginPassword', 'loginStrength');
  addPasswordStrengthListener('signupPassword', 'signupStrength');
  