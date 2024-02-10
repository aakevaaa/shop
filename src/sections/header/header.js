import "./style.css";

export const header = document.createElement("div");

header.innerHTML = `
    <div class='header'>
        <div class="container header-container">
            <p class="logo"><a href="/">SHOP.CO</a></p>
            <div class="header-icons"> 
               <div><img src="../../../src/assets/bag.svg" alt="bag"></div>
               <div><img src="../../../src/assets/man.svg" alt="man"></div>
            </div>
        </div>
    </div>
`;
