
window.addEventListener("load", function(){
    let formulario = document.querySelector("form.caja2");

    formulario.addEventListener("submit", function(e){

    let errores = [];


    let campoNombre = document.querySelector("#nombre");
    if (campoNombre.value == "") {
        errores.push("El campo de nombre tiene que estar completo.")
    } else if (campoNombre.value.lenght < 2) {
        errores.push("El campo de nombre debe tener al menos 2 caracteres.")
    }



    let campoApellido = document.querySelector("#apellido");
    if (campoApellido.value == "") {
        errores.push("El campo de apellido tiene que estar completo.")
    } else if (campoApellido.value.lenght < 2) {
        errores.push("El campo de apellido debe tener al menos 2 caracteres.")
    }



    let campoEmail = document.querySelector("#correoe");
    if (campoEmail.value == "") {
        errores.push("El campo de email tiene que estar completo.")
    } else if (campoEmail.value.lenght < 2) {
        errores.push("El campo de email debe tener al menos 2 caracteres.")
    }


    let campoContraseña = document.querySelector("#contra");
    if (campoContraseña.value == "") {
        errores.push("El campo de contraseña tiene que estar completo.")
    } else if (campoContraseña.value.lenght < 8) {
        errores.push("El campo de contraseña debe tener al menos 8 caracteres.")
    }



    let campoImagen = document.querySelector("#imagen");
    if (campoImagen.value == d) {
        errores.push("La imagen debe ser un archivo valido(JPG, JPEG, PNG, GIF).")
    }


    if(errores.lenght > 0){
        e.preventDefault();

        let ulErrores = document.querySelector("div.errores")
        for(let i = 0; i < errores.lenght; i++){

            ulErrores.innerHTML += "<li>" + errores[i] +  "<li/>"

        }
        
    }

    

});

})












/* Registro de usuarios
○ Nombre y apellido
■ Obligatorio.
■ Deberá tener al menos 2 caracteres.
○ Email
■ Obligatorio.
■ Deberá ser un formato de e-mail válido.
■ No puede repetirse con los e-mails ya registrados.
○ Contraseña
■ Obligatoria.
■ Deberá tener al menos 8 caracteres.
■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un
número y un carácter especial.

○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF). */