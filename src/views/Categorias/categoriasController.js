export function categoriaController() {
  let contenedor = document.querySelector(".contenido");

  cargarContenido(contenedor);

}

let cargarContenido = async (contenedor) => {
  let data = await fetch('http://localhost:3000/api/categorias');

  let categorias = await data.json();

  const categoriasData = categorias.data;

  console.log(categoriasData);
  
  let contenedorHeader = document.createElement('div');
  contenedorHeader.classList.add('header-tabla');

  let titulo = document.createElement('h1');
  titulo.textContent = "Categorías";

  let btnNuevo = document.createElement('a');
  btnNuevo.textContent = "Nueva Categoría";
  btnNuevo.setAttribute('href', '#nuevaCategoria');
  btnNuevo.setAttribute('id', 'nuevaCategoria');
  btnNuevo.classList.add('boton');

  let tabla = document.createElement('table');

  tabla.classList.add('tabla');

  let tablaHeader = document.createElement('thead');

  tablaHeader.classList.add('tabla__header');


  contenedorHeader.append(titulo);
  contenedorHeader.append(btnNuevo);

  let fila = document.createElement('tr');

  fila.classList.add('tabla__fila');

  let idHeader = document.createElement('th');
  let nombreHeader = document.createElement('th');
  let descripcionHeader = document.createElement('th');
  let editarHeader = document.createElement('th');
  let eliminarHeader = document.createElement('th');

  idHeader.classList.add("tabla__celda", 'tabla__celda-header');
  nombreHeader.classList.add("tabla__celda", 'tabla__celda-header');
  descripcionHeader.classList.add("tabla__celda", 'tabla__celda-header');
  editarHeader.classList.add("tabla__celda", 'tabla__celda-header');
  eliminarHeader.classList.add("tabla__celda", 'tabla__celda-header');

  idHeader.textContent = "ID";
  nombreHeader.textContent = "Nombre";
  descripcionHeader.textContent = "Descripción";
  editarHeader.textContent = "Editar";
  eliminarHeader.textContent = "Eliminar";

  fila.append(idHeader, nombreHeader, descripcionHeader, editarHeader, eliminarHeader);

  tablaHeader.append(fila);

  let tablaBody = document.createElement('tbody');
  tablaBody.classList.add('tabla__body');
  
  categoriasData.forEach(categoria => {
    
    let fila = document.createElement('tr');

    fila.classList.add('tabla__fila');
    
    let id = document.createElement('td');
    let nombre = document.createElement('td');
    let descripcion = document.createElement('td');
    let editar = document.createElement('td');
    let eliminar = document.createElement('td');

    id.classList.add('tabla__celda');
    nombre.classList.add('tabla__celda');
    descripcion.classList.add('tabla__celda');
    editar.classList.add('tabla__celda', 'tabla__celda--editar');
    eliminar.classList.add('tabla__celda', 'tabla__celda--eliminar');
    
    id.textContent = categoria.id;
    nombre.textContent = categoria.nombre;
    descripcion.textContent = categoria.descripcion;

    let btnEditar = document.createElement('a');
    btnEditar.textContent = "Editar";
    btnEditar.setAttribute('href', '#editar');
    btnEditar.classList.add('boton', 'boton--editar');
    
    let btnEliminar = document.createElement('a');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.setAttribute('href', '#eliminar');
    btnEliminar.classList.add('boton', 'boton--eliminar');

    editar.append(btnEditar);
    eliminar.append(btnEliminar);

    fila.append(id, nombre, descripcion, editar, eliminar);
    
    tablaBody.append(fila);
  });
  
  tabla.append(tablaHeader, tablaBody);

  contenedor.append(contenedorHeader, tabla);

  // tabla.border = 2;
}