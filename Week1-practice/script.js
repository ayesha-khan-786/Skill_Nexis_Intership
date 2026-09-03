const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  if (nameInput.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  if (messageInput.value.trim().length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
    valid = false;
  } else {
    document.getElementById('messageError').textContent = '';
  }

  const successMsg = document.getElementById('successMsg');
  if (valid) {
    successMsg.textContent = 'Message sent successfully!';
    form.reset();
  } else {
    successMsg.textContent = '';
  }
});