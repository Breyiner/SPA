import * as validate from "../../helpers/validaciones.js";


export function nuevaCategoriaController() {
  let formulario = document.querySelector('#form');

  let nombre = document.querySelector('[name="nombre"]');
  let descripcion = document.querySelector('[name="descripcion"]');

  nombre.addEventListener("keydown", (e) => {
    validate.validarTexto(e); 
    validate.validarMaximo(e, 20);
  });

  descripcion.addEventListener("keydown", (e) => {
    validate.validarTexto(e);
    validate.validarMaximo(e, 100);
  });

  nombre.addEventListener("blur", validate.validarCampo);
  descripcion.addEventListener("blur", validate.validarCampo);

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(validate.validarCampos(e)) console.log(validate.datos);
    
  })
}