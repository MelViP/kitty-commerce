const productList = () => fetch("http://localhost:4000/productos").then((response) => response.json());


const addProduct = (imagen, nombre, precio) => {
  return fetch("http://localhost:4000/productos", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({imagen, nombre, precio, id: uuid.v4()}),
  });
};

const deleteProduct = (id) => {
  console.log(`eliminar a -----> ${id}`)
  return fetch(`http://localhost:4000/productos/${id}`, {
    method: "DELETE",
  })
}


export const productServices = {
  productList,
  addProduct,
  deleteProduct,
};