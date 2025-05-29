export default function decorate(block) {
  block.innerHTML = `
    <div class="home-internet-offer-container">
      <div class="home-internet-offer-left">
        <h1>Join America\'s fastest growing home internet provider!</h1>
        <p class="offer-details">For a limited time, get $200 back via Virtual Prepaid Mastercard<sup>®</sup> when you switch to T-Mobile Home Internet online or via chat. Allow 10 weeks.</p>
        <p class="offer-details">T-Mobile customers who add 5G home internet can pay as little as $40/month with AutoPay and a Go5G Next, Go5G Plus, or Magenta<sup>®</sup> MAX voice line. Enter your address to see if you qualify.</p>
        <p class="not-available"><strong>Not available in all areas.</strong></p>
        <a class="full-terms" href="#">Get full terms</a>
        <form class="availability-form">
          <label for="pincode">Zip Code</label>
          <input type="text" id="pincode" name="pincode" placeholder="Enter your pincode" required>
          <button type="submit" class="check-availability">Check availability</button>
        </form>
        <div class="api-response" style="margin-top:1rem;color:#7c2bc0;"></div>
        <div class="business-link">
          Looking for Internet for business? <a href="#">Learn more</a>
        </div>
        <div class="puerto-rico-link">
          Are you in Puerto Rico? <a href="#">Get more details</a>
        </div>
      </div>
      <div class="home-internet-offer-right">
        <img src="https://publish-p148568-e1559417.adobeaemcloud.com/content/dam/citisignal/citisignal/banner.png" alt="Smiling family using internet" />
      </div>
    </div>
  `;


  const form = block.querySelector('.availability-form');
  const responseDiv = block.querySelector('.api-response');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pincode = form.pincode.value.trim();
    responseDiv.textContent = 'Checking...';

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
      responseDiv.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      responseDiv.textContent = 'Error: ' + err.message;
    }
  });

}
