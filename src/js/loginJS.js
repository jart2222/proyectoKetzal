function alertnoregistrado(mensajealert,color){
    let alertnoregistrado=document.getElementById("alertausuario");
    alertnoregistrado.innerHTML=`<div class="alert alert-colorinput ${color} alert-dismissible fade show" role="alert">
                                <strong>${mensajealert} </strong> 
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
}

function leer(){
    //elementos formulario
    var correoj=document.getElementById("correop").value; 
    var contraseñaj=document.getElementById("contraseñap").value; 
    //usuarios localstorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")); 
    for(idUsuario in usuarios){
        if (correoj==usuarios[idUsuario].correo && contraseñaj==usuarios[idUsuario].password) { 
            let usuarioAceptado=JSON.stringify(usuarios[idUsuario].correo);
            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo",usuarioAceptado);
            if(correoj=="admin@gmail.com"){
                location.href ="../pages/administrador.html"
            }
            else{
                location.href ="../pages/productosExp.html"
            }
            break;
        }
    } //cierra for
    let mensajealert="Usuario o contraseña incorrecto ";
    let color="warning"
    alertnoregistrado(mensajealert, color);
}

        

