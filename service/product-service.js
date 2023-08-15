const productList = () => fetch("http://localhost:3000/diversos")
  .then((response) => response.json()
);


const addProduct = (imagen, nombre, precio) => {
  return fetch("http://localhost:3000/diversos", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({imagen, nombre, precio, id: uuid.v4()}),
  });
};




export const productServices = {
  productList,
  addProduct,
};