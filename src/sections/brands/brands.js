import "./style.css";
import versace from '../../assets/versace.png';
import zara from '../../assets/zara.png';
import gucci from '../../assets/gucci.png';
import prada from '../../assets/prada.png';
import calvin from '../../assets/calvin.png';

export const brands = document.createElement("div");

brands.innerHTML = ` 
      <div class="brands-container">
        <div class="brand"><img src=${versace} alt="versace-image"></div>
        <div class="brand"><img src=${zara} alt="zara-image"></div>
        <div class="brand"><img src=${gucci} alt="gucci-image"></div>
        <div class="brand"><img src=${prada} alt="prada-image"></div>
        <div class="brand"><img src=${calvin} alt="calvin-image"></div>
      </div> 
`
