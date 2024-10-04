document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('thought-input');
    const form = document.getElementById('ask-what-u-thinking-form');
    const publicsBody = document.getElementById('publics-body');
    const popup = document.querySelector('.popup-publi'); // Selecciona el popup
    const closeButton = document.querySelector('.close-publi'); // Botón para cerrar el popup

    // Evento de envío del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario tradicional

        // Obtén el valor del textarea
        const title = 'User'
        const thought = textarea.value.trim();
        const fechita = new Date().toLocaleString()
        

        if (thought) {
            // Crea un nuevo div para el pensamiento
            const thoughtDiv = document.createElement('div');
            thoughtDiv.id = 'thought-entry'; // Agrega una clase para el estilo
            thoughtDiv.className = "publication"
            // Agrega el contenido
            thoughtDiv.innerHTML = `
                <p>${title} </p>
                <p>${thought}</p>
                <p><small>${fechita}</small></p>
            `;

            // Añade el nuevo div al contenedor
            publicsBody.appendChild(thoughtDiv);

            // Limpia el textarea
            textarea.value = '';
            textarea.style.height = '60px'; // Restablece la altura del textarea
            
            // Cierra el popup
            popup.style.display = 'none'; // O usa popup.classList.add('hidden') si tienes una clase para ocultar
        }
    });

    // Evento para cerrar el popup y limpiar el textarea
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none'; // Oculta el popup
        textarea.value = ''; // Limpia el textarea
        textarea.style.height = '60px'; // Restablece la altura del textarea
    });
});
