
export default function decorate(block) {
  // Clear the element and inject the block structure
  block.innerHTML = `
    <div class="container">
      <div class="form-section">
        <h1>T-Mobile 5G Home Internet is not available at your address just yet.</h1>
        <p>But we may have options that work for you!</p>
        <p>Enter your contact info below to join our waitlist for <strong>5G Home Internet</strong> and you may impact where we expand our availability next. Once 5G Home Internet service becomes available at your address, we'll contact you by phone or at the email address provided.</p>
        <p><strong>T-Mobile Internet Lite</strong> may be available to you. To find out about eligibility, please call <a href="tel:833-969-0185" style="color:#e20074;">833-969-0185</a>.</p>
        <form>
          <div class="input-row">
            <div class="input-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required autocomplete="given-name">
            </div>
            <div class="input-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required autocomplete="family-name">
            </div>
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
      </div>
      <div class="image-section">
        <img src="/content/dam/citisignal/father-daughter-laptop.png" alt="Father and daughter using laptop">
      </div>
    </div>
  `;

  const form = block.querySelector('form');
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