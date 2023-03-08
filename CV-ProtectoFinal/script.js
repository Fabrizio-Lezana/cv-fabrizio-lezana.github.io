let menuVisible = false;
// Mostrar-Ocultar Menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false; 
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true; 
    }
}

//Ocultar Menu una vez seleccionado
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Formulario
function validar(){
    var nombre, telefono, correo, asunto, mensaje, expresion;
    nombre = document.getElementById("name").value;
    telefono = document.getElementById("phone").value;
    correo = document.getElementById("email").value;
    asunto = document.getElementById("asunto").value;
    mensaje = document.getElementById("mensaje").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || telefono === "" || correo === "" || asunto === "" || mensaje === ""){
        alert("Por favor, complete todos los campos");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El teléfono ingresado no es un número");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }
    else if(asunto.length > 30){
        alert("El asunto es muy largo (Max 30 caracteres)");
        return false;
    }
    else if(mensaje.length > 200){
        alert("El mensaje es muy largo (Max 200 caracteres)");
        return false;
    }
}