// Google Apps Script Web App URL — replace with your deployed Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySxa9j1WYnMRZDhAp079C2nafLvePao71AaYquufwjmBu9s2hiUzPxOUQWCzR6FOl6DA/exec';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');
  const submitBtn = document.getElementById('btn-submit');
  const formNote = document.getElementById('formNote');
  const successPanel = document.getElementById('successPanel');
  const ticketName = document.getElementById('ticket-name');
  const ticketId = document.getElementById('ticket-id');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    // Retrieve input values
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const tele = document.getElementById('tele').value.trim();
    const jobTitle = document.getElementById('job_title').value.trim();
    const agree = document.getElementById('agree').checked;

    let isValid = true;

    if (!firstname) {
      showError('err-firstname', 'First name is required.');
      isValid = false;
    }
    if (!lastname) {
      showError('err-lastname', 'Last name is required.');
      isValid = false;
    }
    if (!email || !validateEmail(email)) {
      showError('err-email', 'Please enter a valid email address.');
      isValid = false;
    }
    if (!tele) {
      showError('err-tele', 'Telegram number or username is required.');
      isValid = false;
    }
    if (!jobTitle) {
      showError('err-job_title', 'Job title is required.');
      isValid = false;
    }
    if (!agree) {
      showError('err-agree', 'You must agree to the terms and conditions.');
      isValid = false;
    }

    if (!isValid) return;

    // Generate unique Registration ID
    const regId = 'ATC-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    // Prepare Form Data
    const formData = new FormData(form);
    formData.append('registration_id', regId);
    formData.append('submitted_at', new Date().toLocaleString());

    // Submit state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    formNote.textContent = '';

    try {
      if (GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        });
      } else {
        // Fallback delay for demo testing before URL is replaced
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      // Show Success View
      const card = document.querySelector('.card');
      const cardHead = document.querySelector('.card-head');
      if (card) card.classList.add('card-success');
      if (cardHead) cardHead.hidden = true;
      form.hidden = true;
      if (ticketName) ticketName.textContent = `${firstname} ${lastname}`;
      if (ticketId) ticketId.textContent = `ID: ${regId}`;
      if (successPanel) successPanel.hidden = false;
    } catch (err) {
      console.error('Error submitting form:', err);
      formNote.textContent = 'Submission failed. Please try again.';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit registration';
    }
  });

  function showError(id, msg) {
    const errEl = document.getElementById(id);
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.add('visible');
    }
  }

  function clearErrors() {
    document.querySelectorAll('.field-error').forEach((el) => {
      el.textContent = '';
      el.classList.remove('visible');
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
