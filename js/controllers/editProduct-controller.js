import { productServices } from "../../service/product-service.js";

const getProductSalud = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const imagen = document.querySelector("[data-img]").value;
  const nombre = document.querySelector("[data-productName]").value;
  const precio = document.querySelector("[data-productCost]").value;
//   const categoria = document.querySelector("[data-categoria]").value;
  const descripcion = document.querySelector("[data-productDescription]").value;

  productServices
    .editProductsSaludBienestar(id)
    .then(({ saludBienestar }) => {
        imagen.value = saludBienestar.imagen;
        nombre.value = saludBienestar.nombre;
        precio.value = saludBienestar.precio;
        descripcion.value = saludBienestar.descripcion;
    });
};

getProductSalud();

/*const getProductCamisas = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    productServices.editProductsCamisetas(id).then( camisetas => console.log(camisetas));
}

getProductCamisas();

const getProductDiverse = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    productServices.editProductsDiversos(id).then( diversos => console.log(diversos));
}

getProductDiverse();*/
