function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || apellido === '' || correo === '' || mensaje === '') {
        alert('Por favor, completar todos los campos.');
        return false;
    }

    var emailCorrecto = /^\S+@\S+\.\S+$/;
    if (!emailCorrecto.test(correo)) {
        alert('Por favor, ingresar un correo electrónico válido.');
        return false;
    }

  alert('Muchas gracias por ponerte en contacto ' + nombre + ' ' + apellido + '! Su formulario ha sido enviado con éxito. En unos instantes nos comunicaremos.');

    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';

    return false; 
}
