
window.addEventListener("load", function () {
    let formulario = document.querySelector("form.caja2");
console.log(formulario)
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let errores = [];


        let campoNombre = document.querySelector("#nombre");
        if (campoNombre.value == "") {
            errores.push("El nombre tiene que estar completo.")
        } else if (campoNombre.value.length < 2) {
            errores.push("El nombre debe tener al menos 2 caracteres.")
        }

        let campoApellido = document.querySelector("#apellido");
        if (campoApellido.value == "") {
            errores.push("El apellido tiene que estar completo.")
        } else if (campoApellido.value.length < 2) {
            errores.push("El apellido debe tener al menos 2 caracteres.")
        }

        let campoEmail = document.querySelector("#correoe");
        if (campoEmail.value == "") {
            errores.push("El email tiene que estar completo.")
        } else if (campoEmail.value.length < 2) {
            errores.push("El email debe tener al menos 2 caracteres.")
        }

        let campoContraseña = document.querySelector("#contra");
        if (campoContraseña.value == "") {
            errores.push("La contraseña tiene que estar completa.")
        } else if (campoContraseña.value.length < 8) {
            errores.push("La contraseña debe tener al menos 8 caracteres.")
        }

        
        
                function validar(archivo) {
        
                    let nombre = archivo.toLowerCase();
                    let jpg = nombre.includes(".jpg");
                    let jpeg = nombre.includes(".jpeg");
                    let png = nombre.includes(".png");
                    let gif = nombre.includes(".gif");

                    if(jpg || jpeg || png || gif){
                        return true
                    }else {
                        return false
                    }
                }


        let campoImagen = document.querySelector("#imagen");
        if (campoImagen.value == "") {
            errores.push("Debes seleccionar una imagen.")
        }else if (!validar(campoImagen.value)) {
            errores.push("La imagen debe ser un archivo válido(JPG, JPEG, PNG, GIF).")
        }


        console.log(errores)
        if (errores.length > 0) {
         

            let ulErrores = document.querySelector("ul.ul-register-errores")
            ulErrores.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                console.log(campoImagen.value)

                ulErrores.innerHTML += "<li>" + errores[i] + "<li/>"

            }
        }else{
            formulario.submit()
        }
    })
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