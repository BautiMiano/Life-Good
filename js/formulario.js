function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
    

    if (nombre === '' || apellido === '' || correo === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return false; // 
    }

    var emailCorrecto = /^\S+@\S+\.\S+$/;
    if (!emailCorrecto.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false; // 
    }

    return true; // 
    
    
}