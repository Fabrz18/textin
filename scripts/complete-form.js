// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.forms-more-help-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío normal del formulario

        // Enviar el formulario
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Asegúrate de que el modo no cors esté configurado
        })
        .then(() => {
            // Limpiar todos los campos del formulario
            form.reset();

            // Abrir la ventana emergente con el archivo HTML existente
            const confirmationPopup = window.open('confirmation.html', 'Confirmation', 'width=auto,height=auto');

            // Cerrar la ventana emergente después de 3 segundos
            setTimeout(() => {
                confirmationPopup.close();
            }, 5000);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un error al enviar tu respuesta. Inténtalo de nuevo.');
        });
    });
});
