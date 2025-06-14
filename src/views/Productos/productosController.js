export function productoController() {
    let contenedor = document.querySelector(".contenido");
    let texto = document.createElement('p');
    texto.textContent = "No hay información de los productos";

    contenedor.append(texto);
}