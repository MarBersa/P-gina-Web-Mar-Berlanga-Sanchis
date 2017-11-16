var form  = document.getElementsByTagName('forma')[0];

var inputNombre = document.getElementById('nombre');
var inputApellidos = document.getElementById('apellidos');
var emailInput = document.getElementById('email');
var cantidadInput = document.getElementById('cantidad');
var fechaInput = document.getElementById('fecha');
var submitButton = document.getElementById('enviar');

var productoInput = {
    producto1 : document.getElementById('tipo_producto_1'),
    producto2 : document.getElementById('tipo_producto_2'),
    producto3 : document.getElementById('tipo_producto_3')
}


form.addEventListener('submit', function (event) {

    if (inputNombre.checkValidity()) === false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }


    if (inputApellidos.checkValidity()) === false) {
        alert("Escribe tus apellidos");
        inputApellidos.focus();
        event.preventDefault();
        return false;
    }


    if (emailInput.checkValidity()) === false) {
        alert("Introduce un email correcto");
        emailInput.focus();
        event.preventDefault();
        return false;
    }


    if (productoInput.producto1.checkValidity()) === false) {
        alert("Selecciona el tipo de solicitud");
        event.preventDefault();
        return false;
    }


    if (cantidadInput.checkValidity()) === false) {
        alert("Introduce el número de productos que deseas");
        cantidadInput.focus();
        event.preventDefault();
        return false;
    }

    if (fechaInput.checkValidity()) === false) {
        alert("Introduce la fecha en la que deseas tener el producto");
        fechaInput.focus();
        event.preventDefault();
        return false;
    }

    submitButton.setAttribute("disabled", "");
    submitButton.appendChild(loadingIcon);
    event.preventDefault();
    
    setTimeout(function () {
        form.reset();
        submitButton.removeAttribute("disabled");
        submitButton.removeChild(loadingIcon);
        sendNotification("Formulario recibido", "Revisamos vuestras solicitudes diariamente, en breves recibiras nuestra respuesta. ¡Gracias! ");

    }, 1000);

});
