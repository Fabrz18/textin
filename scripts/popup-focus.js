// popup-focus.js

document.addEventListener("DOMContentLoaded", () => {
    // Función para mostrar el popup y enfocar el campo correspondiente
    function showPopup(popupId, inputId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = "block"; // Mostrar el popup
        }

        const input = document.getElementById(inputId);
        if (input) {
            setTimeout(() => {
                input.focus(); // Enfocar el campo de entrada
            }, 0); // Usar setTimeout para asegurar que el popup esté visible
        }
    }

    // Escuchar el evento de apertura de todos los popups
    document.querySelectorAll(".open-popup").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            const popupId = this.getAttribute("data-popup-id");
            const inputId = this.getAttribute("data-input-id");
            showPopup(popupId, inputId);
        });
    });

    // Escuchar el evento de cerrar los popups
    document.querySelectorAll(".close").forEach(closeButton => {
        closeButton.addEventListener("click", function() {
            const popup = this.closest(".popup");
            if (popup) {
                popup.style.display = "none"; // Ocultar el popup
            }
        });
    });
});
