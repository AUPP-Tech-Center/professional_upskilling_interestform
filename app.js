/**
 * AUPP Technology Center (ATC) — Professional Upskilling Registration
 * Front-end Interaction & Google Apps Script Integration
 */

// Google Apps Script Web App URL — routing to your connected Google Sheet
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySxa9j1WYnMRZDhAp079C2nafLvePao71AaYquufwjmBu9s2hiUzPxOUQWCzR6FOl6DA/exec';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');
  const cardHead = document.querySelector('.card-head');
  const submitBtn = document.getElementById('btn-submit');
  const formNote = document.getElementById('formNote');
  const successPanel = document.getElementById('successPanel');
  const ticketName = document.getElementById('ticket-name');
  const ticketId = document.getElementById('ticket-id');
  const btnReset = document.getElementById('btn-reset');
  const platformRadios = document.querySelectorAll('input[name="platform"]');

  if (!form) return;

  // 1. Radio Option Pill Toggle (Telegram / Email)
  platformRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.radio-option').forEach((opt) => {
        opt.classList.remove('selected');
      });
      const parentLabel = radio.closest('.radio-option');
      if (parentLabel) {
        parentLabel.classList.add('selected');
      }
    });
  });

  // 2. Real-time Clear on Input / Validation on Blur
  const requiredInputs = form.querySelectorAll('input[required]');
  requiredInputs.forEach((input) => {
    input.addEventListener('input', () => {
      const errEl = document.getElementById(`err-${input.id}`);
      if (errEl) {
        errEl.classList.remove('visible');
      }
      input.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
      if (formNote) {
        formNote.textContent = '';
      }
    });

    input.addEventListener('blur', () => {
      validateSingleField(input);
    });
  });

  // 3. Form Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearAllErrors();

    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const teleInput = document.getElementById('tele');
    const jobTitleInput = document.getElementById('job_title');
    const agreeInput = document.getElementById('agree');

    const firstname = firstnameInput?.value.trim() || '';
    const lastname = lastnameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const tele = teleInput?.value.trim() || '';
    const jobTitle = jobTitleInput?.value.trim() || '';
    const agree = agreeInput?.checked || false;

    let isValid = true;
    let firstInvalidInput = null;

    if (!firstname) {
      showError('err-firstname', firstnameInput, 'First name is required.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = firstnameInput;
    }

    if (!lastname) {
      showError('err-lastname', lastnameInput, 'Last name is required.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = lastnameInput;
    }

    if (!email || !isValidEmail(email)) {
      showError('err-email', emailInput, 'Please enter a valid email address.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    }

    if (!tele) {
      showError('err-tele', teleInput, 'Telegram number or username is required.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = teleInput;
    }

    if (!jobTitle) {
      showError('err-job_title', jobTitleInput, 'Job title is required.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = jobTitleInput;
    }

    if (!agree) {
      showError('err-agree', agreeInput, 'You must agree to the terms and conditions.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = agreeInput;
    }

    // Optional: Cloudflare Turnstile Verification
    const turnstileToken = document.querySelector('[name="cf-turnstile-response"]')?.value;
    const turnstileContainer = document.querySelector('.cf-turnstile');
    if (turnstileContainer && !turnstileToken) {
      if (formNote) formNote.textContent = 'Please complete the security check.';
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = turnstileContainer;
    }

    if (!isValid) {
      if (firstInvalidInput && typeof firstInvalidInput.focus === 'function') {
        firstInvalidInput.focus();
      }
      return;
    }

    // Generate Unique Registration ID
    const regId = 'ATC-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    // Prepare FormData payload (matches Google Sheet columns)
    const formData = new FormData(form);
    formData.append('registration_id', regId);
    formData.append('submitted_at', new Date().toLocaleString());

    // Submit button state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-width="3" stroke-dasharray="32" stroke-linecap="round"/>
      </svg>
      <span>Submitting...</span>
    `;
    if (formNote) formNote.textContent = '';

    try {
      if (GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE')) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      // Show Success View
      if (cardHead) cardHead.hidden = true;
      form.hidden = true;
      if (ticketName) ticketName.textContent = `${firstname} ${lastname}`;
      if (ticketId) ticketId.textContent = regId;
      if (successPanel) {
        successPanel.hidden = false;
        successPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      if (formNote) formNote.textContent = 'Submission failed. Please check your connection and try again.';
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Submit registration</span>
        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      `;
    }
  });

  // 4. Reset Button Handler
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      form.reset();
      clearAllErrors();

      // Reset radio option visual state
      document.querySelectorAll('.radio-option').forEach((opt, idx) => {
        if (idx === 0) {
          opt.classList.add('selected');
        } else {
          opt.classList.remove('selected');
        }
      });

      // Reset Turnstile if available
      if (window.turnstile && typeof window.turnstile.reset === 'function') {
        try {
          window.turnstile.reset();
        } catch (_) {}
      }

      // Restore submit button
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Submit registration</span>
        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      `;

      // Hide success and reveal form & header
      if (successPanel) successPanel.hidden = true;
      if (cardHead) cardHead.hidden = false;
      form.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Helpers
  function validateSingleField(input) {
    if (!input) return;
    const value = input.value.trim();
    if (input.required && !value) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
    } else if (input.type === 'email' && value && !isValidEmail(value)) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
      const errEl = document.getElementById(`err-${input.id}`);
      if (errEl) errEl.classList.remove('visible');
    }
  }

  function showError(errorId, inputEl, message) {
    const errEl = document.getElementById(errorId);
    if (errEl) {
      if (message) errEl.textContent = message;
      errEl.classList.add('visible');
    }
    if (inputEl) {
      inputEl.classList.add('is-invalid');
      inputEl.setAttribute('aria-invalid', 'true');
    }
  }

  function clearAllErrors() {
    document.querySelectorAll('.field-error').forEach((el) => {
      el.classList.remove('visible');
    });
    document.querySelectorAll('input').forEach((el) => {
      el.classList.remove('is-invalid');
      el.removeAttribute('aria-invalid');
    });
    if (formNote) {
      formNote.textContent = '';
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

// Cloudflare Turnstile Callbacks
window.onTurnstileSuccess = function() {
  const formNote = document.getElementById('formNote');
  if (formNote) formNote.textContent = '';
};

window.onTurnstileExpired = function() {
  const formNote = document.getElementById('formNote');
  if (formNote) formNote.textContent = 'Security check expired. Please complete it again.';
};
