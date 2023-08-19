import { productServices } from "../../service/product-service.js"

const form = document.querySelector('[data-form]');
console.log(form)
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const imgAddress = document.querySelector(`[data-imgAddress]`).value;
    const productName = document.querySelector(`[data-productName]`).value;
    const productCost = document.querySelector(`[data-productCost]`).value;
    const productDescription = document.querySelector(`[data-productDescription]`).value;
    productServices
        .addProduct(imgAddress, productName, productCost, productDescription)
        .then( () => {
            window.location.href = "../../screens/addProductSuccesfull.html"
        }).catch(err => console.log(`errorcito ocurrido`));
})