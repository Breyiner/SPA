export function categoriaController() {
    let contenedor = document.querySelector(".contenido");
    let texto = document.createElement('p');
    texto.textContent = "No hay información de las categorias";

    contenedor.append(texto);
}