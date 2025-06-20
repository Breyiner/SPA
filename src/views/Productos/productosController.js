export function productoController() {
  let contenedor = document.querySelector(".contenido");
    
  cargarContenido(contenedor);
    
}

let cargarContenido = async (contenedor) => {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts');

  let posts = await data.json();

  let tabla = document.createElement('table');

  let tablaHeader = document.createElement('thead');

  let idHeader = document.createElement('th');
  let tituloHeader = document.createElement('th');
  let contenidoHeader = document.createElement('th');

  idHeader.textContent = "ID";
  tituloHeader.textContent = "Titulo";
  contenidoHeader.textContent = "Contenido";

  tablaHeader.append(idHeader, tituloHeader, contenidoHeader);

  let tablaBody = document.createElement('tbody');
  
  posts.forEach(post => {
    
    let fila = document.createElement('tr');
    
    let id = document.createElement('td');
    let titulo = document.createElement('td');
    let contenido = document.createElement('td');
    
    id.textContent = post.id;
    titulo.textContent = post.title;
    contenido.textContent = post.body;

    fila.append(id, titulo, contenido);
    
    tablaBody.append(fila);
  });
  
  tabla.append(tablaHeader, tablaBody);

  contenedor.append(tabla);

  tabla.border = 2;
}