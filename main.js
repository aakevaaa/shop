import "./style.css";
import { signUp } from "./src/sections/sign-up/sign-up";
import { header } from "./src/sections/header/header";
import { content } from "./src/sections/content/content";
import { brands } from "./src/sections/brands/brands";
import { categories } from "./src/sections/categories/categories";
import { categoryBlock } from "./src/components/category/category";
import { subscribe } from "./src/sections/subscribe/sunscribe";
import { footer } from "./src/sections/footer/footer";

const app = document.getElementById("app");
app.append(signUp);
app.append(header);
app.append(content);

// link to categories
const shopButton = document.getElementsByClassName("content-button")[0];
shopButton.setAttribute("href", "#categories");

app.append(brands);
app.append(categories);

// filling categories from backend
const categoriesBlock = document.getElementById("categories-block");
function fetchData() {
  return new Promise((resolve, reject) => {
    const url = "https://dummyjson.com/products/categories";
    // fetch data
    fetch(url)
      .then((response) => {
        // if not works
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // return json format
        return response.json();
      })
      .then((data) => {
        // return data if success
        resolve(data);
      })
      .catch((error) => {
        // return error if not success
        reject(error);
      });
  });
}

// call fetch data function
fetchData()
  .then((data) => {
    console.log("categories", data);
    // insert array with categories into categories block
    let result = "";
    for (let i = 0; i < data.length; i++) {
      // passing category name in category component
      result += `${categoryBlock(data[i])}`;
    }
    categoriesBlock.innerHTML = result;
    console.log("result", result);
  })
  .catch((error) => {
    // error
    console.log(error);
  });

app.append(subscribe);
app.append(footer);
