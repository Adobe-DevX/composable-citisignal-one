import { createTag, loadScript } from '../../scripts/utils.js';

export default function init(el) {
  const form = el.querySelector('form');
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
          const successMessage = createTag('div', { class: 'success-message' });
          successMessage.textContent = 'Thank you for joining our waitlist! We\'ll contact you when 5G Home Internet becomes available in your area.';
          form.replaceWith(successMessage);
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        const errorMessage = createTag('div', { class: 'error-message' });
        errorMessage.textContent = 'Sorry, there was an error submitting your information. Please try again later.';
        form.insertBefore(errorMessage, form.firstChild);
      }
    });
  }
} 