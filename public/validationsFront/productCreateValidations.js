window.addEventListener("load", function (){

    let camisas = document.querySelectorA("div .elemento")

    //terminar de arrmar el falta el html 
    let = errores [""]  

    camisas.addEventListener ("submit", function(e){
        e.preventDefault();


        let campoCamisa = document.querySelector()
        if (campoCamisa == "") {
            errores.push  ("el nombre de la camisa es obligatoria")
        } else if (campoNombre.value.lenght<5) {
            errores.push ("campo nombre con almenos 5 carecteres")
        }

        let campoDescripcion = document.querySelector ("")
        if (campoDescripcion.value == ""){
            errores.push("El campo descripcion debe estar completo ")
        } else if (campoDescripcion.value.length<20){
            errores.push ("La descripcion debe tener al menos 20 caracteres")
        }

        let campoImagen = document.querySelector("")
        if (campoImagen.value == "") {
            errores.push("Imagen con tipo de archivo (JPG, JPEG, PNG, GIF).")
        }

        if (errores.lenght>0){
            event.preventDefault()
        } 
    })

})