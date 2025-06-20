import * as validate from "../../helpers/validaciones.js";


export function nuevaCategoriaController() {
  let btnAgregar = document.querySelector('#btnAgregar');

  let nombre = document.querySelector('[name="nombre"]');
  let descripcion = document.querySelector('[name="descripcion"]');

  nombre.addEventListener("keydown", (e) => validate.validarTexto(e));
  descripcion.addEventListener("keydown", (e) => validate.validarTexto(e));
}
