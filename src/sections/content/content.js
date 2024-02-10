import "./style.css";
import { newButton } from '../../components/button/button';

export const content = document.createElement("div");

content.innerHTML = `
    <div class='content'>
      <div class="content-container">
         <div class="content-info">
            <h1>FIND <span>ANYTHING</span> THAT MATCHES YOUR STYLE</h1>
            <p class="info-text">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            ${newButton("Shop now", "content-button")}
            <div class="content-numbers">
              <div class="numbers-block">
                 <p class="number">200+</p>
                 <p class="text">International Brands</p>
              </div>
                <div class="numbers-block">
                 <p class="number">2,000+</p>
                 <p class="text">High-Quality Products</p>
              </div>
                <div class="numbers-block">
                 <p class="number">30,000+</p>
                 <p class="text">Happy Customers</p>
              </div>
            </div>
         <div>   
      </div>
    </div>
`;
