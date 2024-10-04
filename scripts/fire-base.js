// Importar las funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Inicializar Firebase
const firebaseConfig2 = {
    apiKey: "AIzaSyBEHNcSMMm6Pzg9SHNP0HxJawTlAkdbDx8",
    authDomain: "textin-database-blogs.firebaseapp.com",
    projectId: "textin-database-blogs",
    storageBucket: "textin-database-blogs.appspot.com",
    messagingSenderId: "1096647351736",
    appId: "1:1096647351736:web:e8846ecaec28c6b219034d",
    measurementId: "G-WRNP1W0HC3"
};

// Inicializar Firebase
const app2 = initializeApp(firebaseConfig2);
const db2 = getFirestore(app2);

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
