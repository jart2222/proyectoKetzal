function alertUser(mensajealert,color){
    alertanombre=document.getElementById("alertanombre");
    alertanombre.innerHTML=`<div class="alert alert-${color} alert-dismissible fade show" role="alert">
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
        color="danger"
        alertUser(mensajealert, color);
        
        return true;
    }
    if(!posibleCorreo.exec(input_correo)){
        mensajealert="correo no valido";
        color="danger"
        alertUser(mensajealert,color);
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
        color="danger"
        alertUser(mensajealert,color);
        return true;
    }
    if(!input_telefono.match(posibleNumero)){
        mensajealert="El teléfono solo puede contener numeros";
        color="danger"
        alertUser(mensajealert,color);
        return true;
    }
    
}
function validar4(){
    //validaciones contraseña
    document.getElementById("alertanombre").innerHTML="";
    var regularExpression = /\d\D/ ;
    var regularEspacio= /\s/;


    let input_contrasena = document.getElementById("contraseñap").value;

    if(input_contrasena.length < 8 || input_contrasena.length>21){
        mensajealert="Error, el tamaño de la contraseña no es correcto";
        color="danger"
        alertUser(mensajealert,color); 
        return true;
    }
    if(!regularExpression.exec(input_contrasena)){
        mensajealert="la Contraseña debe tener al menos un número o una letra";
        color="danger"
        alertUser(mensajealert,color);
        return true;
    }
    if(regularEspacio.test(input_contrasena)){
        mensajealert="No debe contener espacios";
        color="danger"
        alertUser(mensajealert,color);
        return true;
    }

    
}

function crearjson(){
    document.getElementById("alertanombre").innerHTML="";

    if (validar2() ==true || validar3() ==true || validar4==true) {
        mensajealert="Campos imcompletos o erroneos";
        color="danger"
        alertUser(mensajealert,color);        
    }
    else {
        let input_correo = document.getElementById("mail").value;
        let input_telefono = document.getElementById("teléfono").value;
        let input_contrasena = document.getElementById("contraseñap").value;
        let input_nombreusuario=document.getElementById("nombreusuario1").value;
        const myobjeto={name:input_nombreusuario ,correo: input_correo,  telefono: input_telefono, contraseña: input_contrasena};
        const myJSON = JSON.stringify(myobjeto);
        console.log(myJSON);
        color="success"
        mensajealert="Datos registrados exitosamente, ¡MUCHAS GRACIAS!";
        alertUser(mensajealert,color)


        
    }
    

    
}