document.addEventListener("DOMContentLoaded", function() {
    // Obtén los elementos
    const uploadLink = document.getElementById("upload-photo");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Muestra el popup cuando se hace clic en el enlace
    uploadLink.onclick = function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        popup.style.display = "block"; // Muestra el popup
    }

    // Cierra el popup cuando se hace clic en el botón de cerrar
    closeBtn.onclick = function() {
        popup.style.display = "none"; // Oculta el popup
    }

    // Cierra el popup si se hace clic fuera del contenido del popup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none"; // Oculta el popup
        }
    }
});
