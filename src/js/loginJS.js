function alertnoregistrado(mensajealert,color){
    let alertnoregistrado=document.getElementById("alertausuario");
    alertnoregistrado.innerHTML=`<div class="alert alert-colorinput ${color} alert-dismissible fade show" role="alert">
                                <strong>${mensajealert} </strong> 
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
}

// function leer(){
//     //elementos formulario
//     let correoj=document.getElementById("correop").value; 
//     let contraseñaj=document.getElementById("contraseñap").value; 
//     //usuarios localstorage
//     let usuarios = JSON.parse(localStorage.getItem("usuarios")); 
//     for(idUsuario in usuarios){
//         if (correoj==usuarios[idUsuario].correo && contraseñaj==usuarios[idUsuario].password) { 
//             let usuarioAceptado=JSON.stringify(usuarios[idUsuario].correo);
//             localStorage.removeItem("usuarioActivo");
//             localStorage.setItem("usuarioActivo",usuarioAceptado);
//             if(correoj=="admin@gmail.com"){
//                 location.href ="../pages/administrador.html"
//             }
//             else{
//                 location.href ="../pages/productosExp.html"
//             }
//             break;
//         }
//     } //cierra for
//     let mensajealert="Usuario o contraseña incorrecto ";
//     let color="warning"
//     alertnoregistrado(mensajealert, color);
// }

function getClientes() {
    let url = "http://127.0.0.1:8080/api/clientes";
    fetch(url, {
        method: "GET",
        headers: { 'Content-Type': 'application/json'}
    })
    .then(data => data.json())
    .then(clientes => {
        let correoj=document.getElementById("correop").value; 
        let contraseñaj=document.getElementById("contraseñap").value; 

        Array.from(clientes).forEach(cliente =>{

            if ( (correoj == cliente.correo) && (contraseñaj == cliente.contrasena) ) { 
                let usuarioAceptado=JSON.stringify(cliente.correo);
                localStorage.removeItem("usuarioActivo");
                localStorage.setItem("usuarioActivo",usuarioAceptado);
                if(correoj == "admin@gmail.com"){
                    location.href ="../pages/administrador.html"
                }
                else{
                    location.href ="../pages/productosExp.html"
                }
            } else {
                let mensajealert = "Usuario o contraseña incorrecto ";
                let color = "warning"
                alertnoregistrado(mensajealert, color);
            }
        })
    });
}
        

