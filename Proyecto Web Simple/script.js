document.addEventListener('DOMContentLoaded', function() {
    let botonEnviar = document.getElementById('enviar');

    if (botonEnviar) {
        botonEnviar.addEventListener('click', function() {
            let nombre = document.getElementById('nombre')?.value.trim();
            let correo = document.getElementById('correo')?.value.trim();
            let telefono = document.getElementById('telefono')?.value.trim();
            let mensaje = document.getElementById('mensaje')?.value.trim();

            if (nombre && correo && telefono && mensaje) {
                alert(`Formulario enviado\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`);
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    } else {
        console.error("No se encontró el botón con id='enviar'");
    }
});
