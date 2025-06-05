export default function decorate(block) {
  // Get the configuration from the block's data attributes
  const config = {
    heading: block.getAttribute('data-heading') || "Join America's fastest growing home internet provider!",
    offer_details: block.getAttribute('data-offer-details') ? 
      JSON.parse(block.getAttribute('data-offer-details')) : 
      [
        "For a limited time, get $200 back via Virtual Prepaid Mastercard® when you switch to Home Internet online or via chat. Allow 10 weeks.",
        "Customers who add 5G home internet can pay as little as $40/month with AutoPay and a qualifying voice line. Enter your address to see if you qualify."
      ],
    not_available: block.getAttribute('data-not-available') || "Not available in all areas.",
    full_terms_link: block.getAttribute('data-full-terms-link') || "#",
    business_link: block.getAttribute('data-business-link') || "#",
    puerto_rico_link: block.getAttribute('data-puerto-rico-link') || "#",
    image: block.getAttribute('data-image') || "https://publish-p148568-e1559417.adobeaemcloud.com/content/dam/citisignal/citisignal/banner.png"
  };

  // Ensure offer_details is always an array
  if (!Array.isArray(config.offer_details)) {
    config.offer_details = [config.offer_details];
  }

  block.innerHTML = `
    <div class="home-internet-offer-container">
      <div class="home-internet-offer-left">
        <h1>${config.heading}</h1>
        ${config.offer_details.map(detail => `<p class="offer-details">${detail}</p>`).join('')}
        <p class="not-available"><strong>${config.not_available}</strong></p>
        <a class="full-terms" href="${config.full_terms_link}">Get full terms</a>
        <form class="availability-form">
          <label for="pincode">Zip Code</label>
          <input type="text" id="pincode" name="pincode" placeholder="Enter your pincode" required>
          <button type="submit" class="check-availability">Check availability</button>
        </form>
        <div class="api-response" style="margin-top:1rem;color:#7c2bc0;"></div>
        <div class="business-link">
          Looking for Internet for business? <a href="${config.business_link}">Learn more</a>
        </div>
        <div class="puerto-rico-link">
          Are you in Puerto Rico? <a href="${config.puerto_rico_link}">Get more details</a>
        </div>
      </div>
      <div class="home-internet-offer-right">
        <img src="${config.image}" alt="Smiling family using internet" />
      </div>
    </div>
  `;

  const form = block.querySelector('.availability-form');
  const responseDiv = block.querySelector('.api-response');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pincode = form.pincode.value.trim();

    try {
      const res = await fetch(`https://285361-450sapphirebeaver-stage.adobeioruntime.net/api/v1/web/MobilePlans/generic?pincode=${encodeURIComponent(pincode)}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-gw-ims-org-id': '8EBB33FE5E43BA110A495EF8@AdobeOrg'
        },
        body: '{}'
      });

      const data = await res.json();
      
      if (!data.availablePlans || data.availablePlans.length === 0) {
        // Redirect to register location page if no plans available
        window.location.href = '/us/en/home-internet/register-my-location';
      } else {
        // Redirect to my plans page with SKUs as query parameter
        const skus = data.availablePlans.join(',');
        window.location.href = `/us/en/home-internet/my-plans?skus=${encodeURIComponent(skus)}`;
      }
    } catch (err) {
      console.error('Error checking availability:', err);
      // Redirect to register location page on error
      window.location.href = '/us/en/home-internet/register-my-location';
    }
  });
}
