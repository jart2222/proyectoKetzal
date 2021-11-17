function alertUser(mensajealert){
    alertanombre=document.getElementById("alertanombre");
    alertanombre.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>${mensajealert}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`


}

function validar2(){

    let input_correo = document.getElementById("mail").value;
    var posibleTexto=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var posibleCorreo=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    document.getElementById("alertanombre").innerHTML="";
     //validación correo
     if(input_correo.length>40||input_correo.length<10){
        mensajealert="Tamaño no permitido, por favor ocupa un correo valido";
        alertUser(mensajealert);
        
        return true;
    }
    if(!posibleCorreo.exec(input_correo)){
        mensajealert="correo no valido";
        alertUser(mensajealert);
        return true;
    }
    

    

}
function validar3() {

    var posibleNumero=/^[0-9]+$/;
    let input_telefono = document.getElementById("teléfono").value;
    document.getElementById("alertanombre").innerHTML="";

    //validaciones teléfono
    if(input_telefono.length > 10||input_telefono.length<8){
        mensajealert="Error, el tamaño del teléfono no es correcto";
        alertUser(mensajealert);
        return true;
    }
    if(!input_telefono.match(posibleNumero)){
        mensajealert="El teléfono solo puede contener numeros";
        alertUser(mensajealert);
        return true;
    }
    
}