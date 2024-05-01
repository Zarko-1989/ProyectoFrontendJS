// comentarios.js

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById('formulario-comentarios');
    const listaComentarios = document.getElementById('lista-comentarios');

    // Función para manejar el envío del formulario
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;

        // Crear un nuevo elemento de comentario
        const nuevoComentario = document.createElement('li');
        nuevoComentario.innerHTML = `<strong>${nombre}:</strong> ${comentario}`;

        // Agregar el nuevo comentario a la lista
        listaComentarios.appendChild(nuevoComentario);

        // Limpiar el formulario
        formulario.reset();
    });
});
