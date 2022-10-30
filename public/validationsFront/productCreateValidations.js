window.addEventListener("load", function (){

    let formulario = document.querySelector("div form.c2")

    
    formulario.addEventListener ("submit", function(e){
        e.preventDefault();
        
        let errores = []  

        let campoCamisa = document.querySelector("input#name")
        if (campoCamisa.value == "") {
            errores.push("el nombre de la camisa es obligatoria")
        } else if (campoCamisa.value.length<5) {
            console.log (campoCamisa.value.length)
            errores.push("campo nombre con almenos 5 carecteres")
        }

        let campoDescripcion = document.querySelector("input#descripcion")
        if (campoDescripcion.value == ""){
            errores.push("El campo descripcion debe estar completo ")
        } else if (campoDescripcion.value.length<20){
            errores.push("La descripcion debe tener al menos 20 caracteres")
        }
        
        let campoImagen = document.querySelector("input#imagen")
        if (campoImagen.value == "") {
            errores.push("Imagen con tipo de archivo (JPG, JPEG, PNG, GIF).")
        }
        if (errores.length>0){
            let ulErrores = document.querySelector("div.errores")
            for (let i = 0; i < errores.length; i++) 
            {
                ulErrores.innerHTML += "<li>" + errores[i] + "<li/>"
            }
        } else {
            formulario.submit()
        }
    })

})