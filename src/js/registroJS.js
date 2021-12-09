
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
    let posibleTexto=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let color="warning";
    let mensajealert="texto";
    //validar tamaño nombre
    if (input_nombreusuario.length <= 1 || input_nombreusuario.length >= 20 ) {
        mensajealert="Sin Nombre de usuario";
        alertUser(mensajealert, color);
        return true;
    }
    //validar contenido nombre
    if(!posibleTexto.exec(input_nombreusuario)){
        mensajealert="nombre no valido";
        alertUser(mensajealert,color);
        return true;
    }

    return false;
}

function validar2(){
    document.getElementById("alertanombre").innerHTML=""; /* reinicia el div del mensaje*/
    let input_correo = document.getElementById("mail").value;
    let posibleCorreo=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    let color="warning";
    let mensajealert="texto";
     //validación tamaño correo
     if(input_correo.length>40||input_correo.length<6){
        mensajealert="Tamaño no permitido, por favor ocupa un correo valido";
        alertUser(mensajealert, color);
        return true;
    }
    //validar contenido correo
    if(!posibleCorreo.exec(input_correo)){
        mensajealert="correo no valido";
        alertUser(mensajealert,color);
        return true;
    }

    return false;
}

function validar4(){
    document.getElementById("alertanombre").innerHTML=""; /* reinicia el div del mensaje*/
    let input_contrasena = document.getElementById("contraseñas").value;
    let regularEspacio= /\s/;
    let color="warning";
    let mensajealert="texto";
    
    if(input_contrasena.length < 3 || input_contrasena.length>21){
        mensajealert="Error, el tamaño de la contraseña no es correcto";
        alertUser(mensajealert,color); 
        return true;
    }
    if(regularEspacio.test(input_contrasena)){
        mensajealert="No debe contener espacios";
        alertUser(mensajealert,color);
        return true;
    }  

    return false;
}


function validar5(){
    document.getElementById("alertanombre").innerHTML=""; /* reinicia el div del mensaje*/
    let input_contrasena = document.getElementById("contraseñas").value;
    let input_contrasena2 = document.getElementById("contraseñas2").value;
    let color="warning";
    let mensajealert="texto";

    if(input_contrasena2.length<1 ){
        mensajealert="Por favor acomplete su contraseña";
        alertUser(mensajealert, color);
        return true;
    }
    if (input_contrasena != input_contrasena2) {
        mensajealert="No son la misma contraseña";
        alertUser(mensajealert,color);
        return true;
    }
    return false;
}

function datosExitosos(input_correo,input_contrasena,input_nombreusuario) {

    let data = {};
    data.nombre = input_nombreusuario;
    data.correo = input_correo;
    data.contrasena = input_contrasena;
    data.telefono="0123456789"
    //guardar lista usuarios registrados

    let url = "http://127.0.0.1:8080/api/clientes";
    fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status == 200) {
            let color="success"
            let mensajealert="Datos registrados exitosamente, ¡MUCHAS GRACIAS!";
            alertUser(mensajealert,color);
            let usuarioAceptado=JSON.stringify(data.correo);
            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo",usuarioAceptado);
            location.href ="../pages/productosExp.html"
        }
        if (response.status == 500) {
            console.log(response);
            let color="warning"
            let mensajealert="Usuario ya registrado";
            alertUser(mensajealert,color);
        }
    })
    .catch(error => {
        console.log(error.response.data);
    });
}

// function existeCliente(input_correo) {
//     let verificacion;
//     let url = "http://127.0.0.1:8080/api/clientes";

//     fetch(url, {
//         method: "GET",
//         headers: { 'Content-Type': 'application/json'}
//     })
//     .then(data => data.json())
//     .then(function(clientes) {
//         console.log(input_correo);
//         Array.from(clientes).forEach(cliente => {
//             console.log(cliente.correo);

//             if (input_correo == cliente.correo) { 
//                 console.log(input_correo + " es igual a " + cliente.correo);
//                 verificacion = true;       
//                 console.log("Contraseña ya existente");
//             } else {
//                 verificacion = false;
//             }
        
//         });
//     })
//     .catch(error => {
//         console.log(error);
//     });

    
//     console.log(verificacion);
//     return verificacion;
// }

function crearjson(){
    document.getElementById("alertanombre").innerHTML=""; /* reinicia el div del mensaje*/
    let color="warning";
    let mensajealert="texto";
    let validar=0;
    if (validar1()==true) {
        mensajealert="Error en el nombre";
        alertUser(mensajealert,color);        
        validar++;
    }
    if (validar2()==true) {
        mensajealert="Error en el correo";
        alertUser(mensajealert,color);        
        validar++;
    }
    if (validar4()==true) {
        mensajealert="Error en la contraseña 1";
        alertUser(mensajealert,color); 
        validar++;       
    }
    if (validar5()==true) {
        mensajealert="Error en la contraseña 2";
        alertUser(mensajealert,color);      
        validar++;  
    }

    if (validar == 0){
        let input_correo = document.getElementById("mail").value;
        let input_contrasena= document.getElementById("contraseñas").value;
        let input_nombreusuario=document.getElementById("nombreusuario1").value;
        datosExitosos(input_correo, input_contrasena, input_nombreusuario);
    }
}

    // if(validar==0) {
    //     //info formulario
    //     let input_correo = document.getElementById("mail").value;

    //     if(existeCliente(input_correo) == true){
    //         mensajealert = "Ya existe este usuario";
    //         alertUser(mensajealert,color);
    //         console.log("Si entro al if");
    //     } else{
    //         console.log("Si entro a datos exitosos");
    //         let input_contrasena= document.getElementById("contraseñas").value;
    //         let input_nombreusuario=document.getElementById("nombreusuario1").value;
    //         Datos_exitoso(input_correo,input_contrasena,input_nombreusuario);
    //     }   
    // } 

// function existeUsuario(input_correo){
//     //usuarios localstorage
//     let usuarios = JSON.parse(localStorage.getItem("usuarios")); 
//     for(idUsuario in usuarios){
//         if (input_correo==usuarios[idUsuario].correo) { //confirmar que no hqy un usuario igual
//            return true;
//         }
//     } //cierra for
//     return false;
// }



