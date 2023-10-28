const firebaseConfig = {
    apiKey: "AIzaSyAX9Mr2rwl0fWEb2pY--YZ6CVFSa-yaWKA",
    authDomain: "datos-de-formulario-bf80e.firebaseapp.com",
    projectId: "datos-de-formulario-bf80e",
    storageBucket: "datos-de-formulario-bf80e.appspot.com",
    messagingSenderId: "404228085300",
    appId: "1:404228085300:web:727b18f4b6a8669ed69c61",
    measurementId: "G-T1VH3G1Y27"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

document.getElementById('formulario').addEventListener('submit', event => {
    event.preventDefault();

    let nombreImput = document.getElementById('nombre')
    let nombreError = document.getElementById('errorNombre')
    if (nombreImput.value.trim() === '') {
        nombreError.textContent = 'Debes ingresar el nombre'
        nombreError.classList.add('error-message')
    }else{
        nombreError.textContent = ''
        nombreError.classList.add('remove')
    }

    let apellidoInput = document.getElementById('apellido')
    let apellidoError = document.getElementById('errorApellido')
    if(apellidoInput.value.trim() === '') {
        apellidoError.textContent = 'Debes ingresar el apellido'
        apellidoError.classList.add('error-message')
    }else{
        apellidoError.textContent = ''
        apellidoError.classList.add('remove')
    }
    let correoInput = document.getElementById('correo')
    let correoError = document.getElementById('errorCorreo')
    let correoPathern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!correoPathern.test(correoInput.value)) {
        correoError.textContent = 'Por favor agrega un correo valido'
        correoError.classList.add('error-message')
    }else{
        correoError.textContent = ''
        correoError.classList.add('remove')
    }

    let contrasenaInput = document.getElementById('contrasena')
    let contrasenaError = document.getElementById('errorContrasena')
    if (contrasenaInput.value.length < 6) {
        contrasenaError.textContent = 'La contrasena debe ser mas de 6 caracteres'
        contrasenaError.classList.add('error-message')
    }else{
        contrasenaError.textContent = ''
        contrasenaError.classList.add('remove')
    }

    if (!nombreError.textContent && !apellidoError.textContent && !correoError.textContent && !contrasenaError.textContent) {

        db.collection("users").add({
            nombre: nombre.value,
            apellido:apellido.value,
            correo:correo.value,
            password:contrasena.value
        })

        
        
        alert('El formulario se envio correctamente')
        document.getElementById('formulario').reset()
    }

})