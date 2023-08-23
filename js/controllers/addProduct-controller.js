import { productServices } from "../../service/product-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const imgAddress = document.querySelector("[data-img]").value;
  const nombre = document.querySelector("[data-productName]").value;
  const precio = document.querySelector("[data-productCost]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const descripcion = document.querySelector(
    "[data-productDescription]"
  ).value;

  switch (categoria) {
    case "Salud y Bienestar":
      productServices
        .addProductSaludBienestar(
          imgAddress,
          nombre,
          precio,
          descripcion
        )
        .then(() => {
          window.location.href = "../../screens/addProductSuccesfull.html";
        })
        .catch((error) => console.log(`errorcito ocurrido ${error}`));
      break;
    case "Camisetas":
      productServices
        .addProductCamisetas(
          imgAddress,
          nombre,
          precio,
          descripcion
        )
        .then(() => {
          window.location.href = "../../screens/addProductSuccesfull.html";
        })
        .catch((error) => console.log(`errorcito ocurrido ${error}`));
      break;
    default:
      productServices
        .addProductDiversos(
          imgAddress,
          nombre,
          precio,
          descripcion
        )
        .then(() => {
          window.location.href = "../../screens/addProductSuccesfull.html";
        })
        .catch((error) => console.log(`errorcito ocurrido ${error}`));
      break;
  }
});
