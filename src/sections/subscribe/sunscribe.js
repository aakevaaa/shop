import "./style.css";
import { newButton } from '../../components/button/button';

export const subscribe = document.createElement("div");

subscribe.innerHTML = `
  <div class="container subscribe-container">
    <h2>STAY UPTO DATE ABOUT <br> OUR LATEST OFFERS</h2>
    <div class="subscribe-form">
        <input type="email" placeholder="Enter your email address">
        ${newButton("Subscribe to Newsletter", "subscribe-button")}
    </div>
  </div>
`
