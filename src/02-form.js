const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const saveFormState = () => {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
};
const loadFormState = () => {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    email.value = email || '';
    message.value = message || '';
  }
};

const clearFormState = () => {
  localStorage.removeItem(storageKey);
  form.reset();
};

const handleFormSubmit = event => {
  event.preventDefault();

  if (email.value.trim() && message.value.trim()) {
    const formData = {
      email: email.value.trim(),
      message: message.value.trim(),
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
