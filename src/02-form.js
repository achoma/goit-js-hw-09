const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailField = document.querySelector('[name="email"]');
const messageField = document.querySelector('[name="message"]');

const saveFormState = () => {
  const formData = {
    email: emailField.value.trim(),
    message: messageField.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
};
const loadFormState = () => {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailField.value = email || '';
    messageField.value = message || '';
  }
};

const clearFormState = () => {
  localStorage.removeItem(storageKey);
  form.reset();
};

const handleFormSubmit = event => {
  event.preventDefault();

  if (emailField.value.trim() && messageField.value.trim()) {
    const formData = {
      email: emailField.value.trim(),
      message: messageField.value.trim(),
    };

    console.log(formData);

    clearFormState();
  } else {
    alert('Please fill out both fields.');
  }
};

form.addEventListener('input', saveFormState);

form.addEventListener('submit', handleFormSubmit);

document.addEventListener('DOMContentLoaded', loadFormState);
