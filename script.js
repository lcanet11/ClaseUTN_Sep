//alert("Welcome!")
function saludo() {
    alert("Hello World Event")
}

function registrarse(){
    var nombre;
    nombre = document.form_registro.nombre.value;

    var apellido = document.form_registro.apellido.value;
    var email = document.getElementById("email_id").value;
    var password = document.getElementById("password_id").value; 
    console.log(nombre, apellido, email, password)
    if(nombre=="") {
        document.getElementById("nombre_error").innerHTML = "El campo nombre es obligatorio"
    } else {
        document.getElementById("nombre_error").innerHTML = ""
    }
    document.getElementById("mensaje").innerHTML = "Gracias por registrarse"
}

function tipoSeguro() {
    console.log("tipoSeguro")
    var tipoSeguro = document.getElementById("tipo_seguro_id").value;
    console.log(tipoSeguro);

    var precio;
    switch(tipoSeguro) {
        case "1": precio=500;
        break;
        case "2": precio = 1000;
        break;
        case "3": precio = 1500; 
        break;
    }
    console.log(precio);
}