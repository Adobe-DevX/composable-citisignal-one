import './home-internet-offer.css';

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
          <label for="address">Address</label>
          <input type="text" id="address" name="address" placeholder="Enter your address" />
          <label for="unit">Unit or Apartment #</label>
          <input type="text" id="unit" name="unit" placeholder="Unit #" />
          <button type="submit" class="check-availability">Check availability</button>
        </form>
        <div class="business-link">
          Looking for Internet for business? <a href="#">Learn more</a>
        </div>
        <div class="puerto-rico-link">
          Are you in Puerto Rico? <a href="#">Get more details</a>
        </div>
      </div>
      <div class="home-internet-offer-right">
        <img src="/path/to/your/image.jpg" alt="Smiling family using internet" />
      </div>
    </div>
  `;
} 