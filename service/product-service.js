const urlAPI = "http://localhost:3000/productos";

//GET
//mostrar desde el json
const productList = async (queryCategoriaConsulta) => {
  const urlConsultaAPI = `${urlAPI}${queryCategoriaConsulta}`;
  try {
    const responseObjeto = await fetch(urlConsultaAPI);
    const response = await responseObjeto.json();
    return response;
  } catch (error) {
    console.log("Ha ocurrido un error en el GET");
    throw error;
  }
};

///POST
//agregar al json data

const addProduct = (categoria, imagen, nombre, precio, descripcion) => {
  return fetch(urlAPI, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      categoria,
      imagen,
      nombre,
      precio,
      descripcion,
      id: uuid.v4(),
    }),
  });
};

//DELETE
//borrar del json
const deleteProduct = (id) => {
  const urlAPIDelete = `${urlAPI}/${id}`;
  return fetch(urlAPIDelete, {
    method: "DELETE",
  });
};

//editar datos del json
const editProduct = (categoria, imagen, nombre, precio, descripcion, id) => {
  const urlAPIEdit = `${urlAPI}/${id}`;
  return fetch(urlAPIEdit, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      categoria,
      imagen,
      nombre,
      precio,
      descripcion,
      id: id,
    }),
  });
};

export const productServices = {
  productList,
  addProduct,
  deleteProduct,
  editProduct,
};
