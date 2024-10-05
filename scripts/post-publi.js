document.addEventListener("DOMContentLoaded", function() {
    // Obtén los elementos
    const uploadLink = document.getElementById("new-post");
    const popup = document.getElementById("popup-publi");
    const closeBtn = document.getElementsByClassName("close-publi")[0];
    const form = document.querySelector('.ask-what-u-thinking-form');
    
    // Muestra el popup cuando se hace clic en el enlace
    uploadLink.onclick = function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        popup.style.display = "block"; // Muestra el popup
        const textarea = document.getElementById('thought-input');
        textarea.focus();
    }

    // Cierra el popup cuando se hace clic en el botón de cerrar
    closeBtn.onclick = function() {
        popup.style.display = "none"; // Oculta el popup
    }

    // Cierra el popup si se hace clic fuera del contenido del popup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none"; // Oculta el popup
            form.reset()
        }
    }
});
