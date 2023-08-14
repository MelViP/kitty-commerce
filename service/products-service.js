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

const agregarProd = (imagen, nombre, precio) => {
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

const prodBox = document.querySelector('[data-box]')

const http = new XMLHttpRequest();

const productList = () => {
    const promise = new Promise( (resolve,reject) => {
  
      http.open('GET', 'http://localhost:3000/perfil');
  
      http.send();
  
      http.onload = () => {
        const response = JSON.parse(http.response);
  
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };