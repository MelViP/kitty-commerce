//GET
//mostrar desde el json
const productListSaludBienestar = () => fetch("http://localhost:3000/saludBienestar").then((response) => response.json()).catch(error => console.log(error));

const  productListCamisetas = () => fetch("http://localhost:3000/camisetas").then((response) => response.json());

const productListDiversos = () => fetch("http://localhost:3000/diversos").then((response) => response.json());


///POST
//agregar al json data
const addProductSaludBienestar = (imagen, nombre, precio) => {
  return fetch("http://localhost:3000/SaludBienestar", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({imagen, nombre, precio, id: uuid.v4()  }),
  });
};

const addProductCamisetas = (imagen, nombre, precio) => {
  return fetch("http://localhost:3000/camisetas", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({imagen, nombre, precio, id: uuid.v4()  }),
  });
};

const addProductDiversos = (imagen, nombre, precio) => {
  return fetch("http://localhost:3000/diversos", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({imagen, nombre, precio, id: uuid.v4()  }),
  });
};

//DELETE
//borrar del json
const deleteProductSaludBienestar = (id) => {
  return fetch(`http://localhost:3000/saludBienestar/${id}`, {
    method: "DELETE",
  })
}

const deleteProductCamisetas = (id) => {
  return fetch(`http://localhost:3000/camisetas/${id}`, {
    method: "DELETE",
  })
}

const deleteProductDiversos = (id) => {
  return fetch(`http://localhost:3000/diversos/${id}`, {
    method: "DELETE",
  })
}
//
//editar datos del json
const editProductsSaludBienestar = (id) => {
  return fetch(`http://localhost:3000/saludBienestar/${id}`).then(response => response.json);
}

const editProductsCamisetas = (id) => {
  return fetch(`http://localhost:3000/camisetas/${id}`).then(response => response.json);
}

const editProductsDiversos = (id) => {
  return fetch(`http://localhost:3000/diversos/${id}`).then(response => response.json);
}


export const productServices = {
  productListSaludBienestar,
  productListCamisetas,
  productListDiversos,
  
  addProductSaludBienestar,
  addProductCamisetas,
  addProductDiversos,

  deleteProductSaludBienestar,
  deleteProductCamisetas,
  deleteProductDiversos,

  editProductsSaludBienestar,
  editProductsCamisetas,
  editProductsDiversos,
};