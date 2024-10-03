document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('thought-input');
    const boxarea = document.getElementsByClassName('ask-what-u-thinking-form')[0];

    // Función para ajustar la altura del textarea automáticamente
    textarea.addEventListener('input', function () {
        // Resetea la altura para que crezca según el contenido
        this.style.height = 'auto'; 

        // Obtiene la altura del contenedor
        const boxHeight = boxarea.clientHeight;

        // Ajusta la altura del textarea para que crezca automáticamente
        if (this.scrollHeight <= boxHeight) {
            this.style.height = this.scrollHeight + 'px';
        } else {
            this.style.height = boxHeight + 'px';
        }
    });
});
