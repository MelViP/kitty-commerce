/*
<li class="galeria__productos_items">
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

//agregar prod salud y bienestar

const agregarProdSaludBienestar = (imagen, nombre, precio, id) => {
    const linea = document.createElement("li");
    linea.classList.add("galeria__productos_items");
    const content = `
      <img class="galeria__productos_items__foto" src="${imagen}"/>
  
      <div class="galeria__productos__textCard">
  
          <p class="galeria__productos_items__nombre">
              ${nombre}
          </p>
          <p class="galeria__productos_items__precio destacado">
              $${precio}
          </p>
          <a href="" class="galeria__productos--link destacado id="${id}">
              Ver productos
          </a>
  
      </div>  
      `;
    linea.innerHTML = content;
    return linea;
  
    console.log(linea)
  };
  
  const prodBox_saludBienestar = document.querySelector('[data-productosSaludBienestar]')
  
  productServices.productListSaludBienestar()
    .then((data) => {
      data.forEach( ( { imagen, nombre, precio, id } ) => {
        // console.log(perfil)
        const nuevaLinea = agregarProdSaludBienestar( imagen, nombre, precio, id );
        prodBox_saludBienestar.appendChild(nuevaLinea);
      });
    }).catch((error) => alert("Ocurrio un errorcito"));




//agregar prod camisetas
const agregarProdCamisetas = (imagen, nombre, precio, id) => {
    const linea = document.createElement("li");
    linea.classList.add("galeria__productos_items");
    const content = `
      <img class="galeria__productos_items__foto" src="${imagen}"/>
  
      <div class="galeria__productos__textCard">
  
          <p class="galeria__productos_items__nombre">
              ${nombre}
          </p>
          <p class="galeria__productos_items__precio destacado">
              $${precio}
          </p>
          <a href="" class="galeria__productos--link destacado id="${id}">
              Ver productos
          </a>
  
      </div>  
      `;
    linea.innerHTML = content;
    return linea;
  
    console.log(linea)
  };
  
  const prodBox_camisetas = document.querySelector('[data-productosCamisetas]')
  
  productServices.productListCamisetas()
    .then((data) => {
      data.forEach( ( { imagen, nombre, precio, id } ) => {
        // console.log(perfil)
        const nuevaLinea = agregarProdCamisetas( imagen, nombre, precio, id );
        prodBox_camisetas.appendChild(nuevaLinea);
      });
    }).catch((error) => alert("Ocurrio un errorcito"));





//Agregar lineas prod diversos
const agregarProdDiversos = (imagen, nombre, precio, id) => {
  const linea = document.createElement("li");
  linea.classList.add("galeria__productos_items");
  const content = `
    <img class="galeria__productos_items__foto" src="${imagen}"/>

    <div class="galeria__productos__textCard">

        <p class="galeria__productos_items__nombre">
            ${nombre}
        </p>
        <p class="galeria__productos_items__precio destacado">
            $${precio}
        </p>
        <a href="" class="galeria__productos--link destacado id="${id}">
            Ver productos
        </a>

    </div>  
    `;
  linea.innerHTML = content;
  return linea;

  console.log(linea)
};

const prodBox_diversos = document.querySelector('[data-productosDiversos]')

productServices.productListDiversos()
  .then((data) => {
    data.forEach( ( { imagen, nombre, precio, id } ) => {
      // console.log(perfil)
      const nuevaLinea = agregarProdDiversos( imagen, nombre, precio, id );
      prodBox_diversos.appendChild(nuevaLinea);
    });
  }).catch((error) => alert("Ocurrio un errorcito"));
