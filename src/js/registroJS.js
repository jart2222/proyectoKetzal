

function alertUser(mensajealert,color){
    let alertanombre=document.getElementById("alertanombre");
    alertanombre.innerHTML=`<div class="alert alert-colorinput ${color} alert-dismissible fade show" role="alert">
                                <strong>${mensajealert} </strong> 
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
}


function validar1(){
    document.getElementById("alertanombre").innerHTML=""; /* reinicia el div del mensaje*/
    let input_nombreusuario=document.getElementById("nombreusuario1").value;
    if (input_nombreusuario.length <= 5 || input_nombreusuario>= 20 ) {
        mensajealert="Sin Nombre de usuario";
        color="warning"
        alertUser(mensajealert, color);

        return true;
    }

}


function validar2(){
    document.getElementById("alertanombre").innerHTML=""; /* reinicia el div del mensaje*/
    let input_correo = document.getElementById("mail").value;
    var posibleTexto=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var posibleCorreo=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    document.getElementById("alertanombre").innerHTML="";
     //validación correo
     if(input_correo.length>40||input_correo.length<10){
        mensajealert="Tamaño no permitido, por favor ocupa un correo valido";
        color="warning"
        alertUser(mensajealert, color);
        
        return true;
    }
    if(!posibleCorreo.exec(input_correo)){
        mensajealert="correo no valido";
        color="warning"
        alertUser(mensajealert,color);
        return true;
    }
    

    

}

function validar4(){
    //validaciones contraseña
    document.getElementById("alertanombre").innerHTML=""; /* reinicia el div del mensaje*/
    var regularExpression = /\d\D/ ;
    var regularEspacio= /\s/;


    let input_contrasena = document.getElementById("contraseñas").value;

    if(input_contrasena.length < 8 || input_contrasena.length>21){
        mensajealert="Error, el tamaño de la contraseña no es correcto";
        color="warning"
        alertUser(mensajealert,color); 
        return true;
    }
    if(!regularExpression.exec(input_contrasena)){
        mensajealert="la Contraseña debe tener al menos un número o una letra";
        color="warning"
        alertUser(mensajealert,color);
        return true;
    }
    if(regularEspacio.test(input_contrasena)){
        mensajealert="No debe contener espacios";
        color="warning"
        alertUser(mensajealert,color);
        return true;
    }

    
}


function validar5(){
    document.getElementById("alertanombre").innerHTML=""; /* reinicia el div del mensaje*/
    let input_contrasena = document.getElementById("contraseñas").value;
    let input_contrasena2 = document.getElementById("contraseñas2").value;
    if(input_contrasena2<8 ){
        mensajealert="Por favor acomplete su contraseña";
        color="warning"
        alertUser(mensajealert, color);
        return true;
    }

    if (input_contrasena != input_contrasena2) {
        mensajealert="No son la misma contraseña";
        color="warning"
        alertUser(mensajealert,color);
        return true;
    }
}

function crearjson(){
    document.getElementById("alertanombre").innerHTML=""; /* reinicia el div del mensaje*/
    document.getElementById("alertanombre").innerHTML="";
    if (validar2()==true || validar4()==true || validar1()==true || validar5()==true) {
        mensajealert="Campos imcompletos o erroneos";
        color="warning"
        alertUser(mensajealert,color);        
    }
    else {
        let input_correo = document.getElementById("mail").value;
        let input_contrasena= document.getElementById("contraseñas").value;
        let input_nombreusuario=document.getElementById("nombreusuario1").value;
        Datos_exitoso(input_correo,input_contrasena,input_nombreusuario)
        /*     traer elementos del formulario*/
        
           
    } 
}

function Datos_exitoso(input_correo,input_contrasena,input_nombreusuario){
    var myobjeto2={
        "id":"",
        "datos":[
                    { "name":`${input_nombreusuario}`, "correo":`${input_correo}`, "contraseña" :`${input_contrasena}`}
                ]
    }
    /*     crear objeto con datos  del formulario*/
    
    
    let lastkey=localStorage.getItem("key").split(",");
    let lastname =localStorage.getItem("correokey").split(",");
    let contraseñas=[];
    let correousuarios=[];

    /*     traer elementos del los correos del localstronge formulario y 
    los convierte en una lista y se crean dos listas vacias */  
    myobjeto2.id=lastname.length; 
    
    // le asigna un id unico al nuevo elemento

    
    for (let k = 0; k < lastname.length; k++) {
        correousuarios.push(lastname[k]);
        contraseñas.push(lastkey[k]);   
    }
    correousuarios.push(myobjeto2.datos[0].correo);
    contraseñas.push(myobjeto2.datos[0].contraseña);
    
    localStorage.setItem("correokey", correousuarios);
    localStorage.setItem("key", contraseñas);
    color="success"
    mensajealert="Datos registrados exitosamente, ¡MUCHAS GRACIAS!";
    alertUser(mensajealert,color);

}



