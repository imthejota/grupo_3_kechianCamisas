window.addEventListener("load", function () {
    let formulario = document.querySelector("form.caja2");
console.log(formulario)
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let errores = [];

        let campoEmail = document.querySelector("#correo");
        if (campoEmail.value == "") {
            errores.push("Mail obligatorio")
        }

        let campoContraseña = document.querySelector("#contraseña");
        if (campoContraseña.value == "") {
            errores.push("Contraseña obligatoria")
        } 
        
        console.log(errores)
        
        if (errores.length > 0) {
            let ulErrores = document.querySelector("ul.ul-register-errores")
            ulErrores.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                console.log(campoImagen.value)
                ulErrores.innerHTML += "<li>" + errores[i] + "<li/>"
            }
        } else {
            formulario.submit()
        }
    })
})