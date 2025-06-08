const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission

  checkInputs();
});

function checkInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  // Validate Name
  if (nameValue === '') {
    setError(nameInput, 'Name cannot be blank');
  } else {
    setSuccess(nameInput);
  }

  // Validate Email
  if (emailValue === '') {
    setError(emailInput, 'Email cannot be blank');
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, 'Not a valid email');
  } else {
    setSuccess(emailInput);
  }

  // Validate Password
  if (passwordValue.length < 6) {
    setError(passwordInput, 'Password must be at least 6 characters');
  } else {
    setSuccess(passwordInput);
  }

  // Validate Confirm Password
  if (confirmPasswordValue !== passwordValue) {
    setError(confirmPasswordInput, 'Passwords do not match');
  } else {
    setSuccess(confirmPasswordInput);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
