/*
<li class="galeria__productos_items">
    <span class="carritoIcon material-symbols-sharp">
        shopping_cart
    </span>
    <img class="galeria__productos_items__foto" src="./assets/products/luckyCat.png"/>
    <div class="galeria__productos__textCard">
        <p class="galeria__productos_items__nombre">
            Lucky cat
        </p>
        <p class="galeria__productos_items__precio destacado">
            $60
        </p>
        <a href="" class="galeria__productos--link destacado">
            Ver productos
        </a>
    </div>
</li>
*/

import { productServices } from "../../service/product-service.js"

const agregarProd = (imagen, nombre, precio ) => { //id pending to add
  const linea = document.createElement("li");
  linea.classList.add("galeria__productos_items");
  const content = `
    <span class="carritoIcon material-symbols-sharp">
        shopping_cart
    </span>

    <img class="galeria__productos_items__foto" src="${imagen}"/>

    <div class="galeria__productos__textCard">

        <p class="galeria__productos_items__nombre">
            ${nombre}
        </p>
        <p class="galeria__productos_items__precio destacado">
            $${precio}
        </p>
        <a href="" class="galeria__productos--link destacado">
            Ver productos
        </a>

    </div>  
    `;
  linea.innerHTML = content;
  return linea;
};

const prodBox = document.querySelector('[data-productos]')

productServices.productList()
  .then((data) => {
    data.forEach( ( { imagen, nombre, precio, id } ) => {
      // console.log(productos)
      const nuevaLinea = agregarProd( imagen, nombre, precio );
      table.appendChild(nuevaLinea);
    });
  }).catch((error) => alert("Ocurrio un errorcito"));
