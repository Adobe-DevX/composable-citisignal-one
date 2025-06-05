import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);

  // Create the form HTML as a string
  const formHTML = `
    <form class="register-eligibility-form">
      <div class="input-group">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" required autocomplete="name">
      </div>
      <div class="input-group">
        <label for="contactNumber">Preferred Contact Number</label>
        <input type="tel" id="contactNumber" name="contactNumber" required autocomplete="tel">
      </div>
      <div class="input-group">
        <label for="email">Email address</label>
        <input type="email" id="email" name="email" required autocomplete="email">
      </div>
      <button type="submit">Join the waitlist</button>
    </form>
  `;

  // Append the form to the block's existing content
  block.insertAdjacentHTML('beforeend', formHTML);

  // Add submit handler
  const form = block.querySelector('.register-eligibility-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      try {
        // TODO: Replace with actual API endpoint
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          const successMessage = document.createElement('div');
          successMessage.className = 'success-message';
          successMessage.textContent = 'Thank you for joining our waitlist! We\'ll contact you when 5G Home Internet becomes available in your area.';
          form.replaceWith(successMessage);
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Sorry, there was an error submitting your information. Please try again later.';
        form.insertBefore(errorMessage, form.firstChild);
      }
    });
  }
} 