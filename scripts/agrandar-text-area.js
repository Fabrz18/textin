document.addEventListener("DOMContentLoaded", function () {
    // Función para añadir un documento a Firestore
    async function addPublicacion(titulo, contenido) {
        try {
            const docRef = await addDoc(collection(db2, "publicaciones"), {
                titulo: titulo,
                contenido: contenido,
                fecha: new Date()
            });
            console.log("Documento creado con ID: ", docRef.id);
        } catch (e) {
            console.error("Error añadiendo el documento: ", e);
        }
    }

    // Escuchar el evento submit del formulario del popup
    document.getElementById("ask-what-u-thinking-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado de enviar el formulario

        // Obtener los valores del título y contenido desde el formulario
        const titulo = document.getElementById("thought-title").value;
        const contenido = document.getElementById("thought-content").value;

        // Llamar a la función para añadir la publicación a Firebase
        addPublicacion(titulo, contenido);

        // Limpiar el formulario después de enviarlo
        document.getElementById("thought-title").value = "";
        document.getElementById("thought-content").value = "";
    });

    // Aumentar el tamaño del textarea según el contenido
    const textarea = document.getElementById("thought-content");
    textarea.addEventListener("input", function() {
        this.style.height = 'auto'; // Resetear la altura
        this.style.height = (this.scrollHeight) + 'px'; // Ajustar a la altura del contenido
    });

    // Enfocar el input del título cuando se abre el popup
    const popup = document.getElementById("popup-publi");
    const closeButton = document.querySelector(".close-publi");
    
    closeButton.onclick = function() {
        popup.style.display = "none";
    }

    document.getElementById("new-post").onclick = function() {
        popup.style.display = "block"; // Mostrar el popup
        document.getElementById("thought-title").focus(); // Enfocar el input del título
    }
});
