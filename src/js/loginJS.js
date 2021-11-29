function alertnoregistrado(mensajealert,color){
    let alertnoregistrado=document.getElementById("alertausuario");
    alertnoregistrado.innerHTML=`<div class="alert alert-colorinput ${color} alert-dismissible fade show" role="alert">
                                <strong>${mensajealert} </strong> 
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
}

function contraseñausuario(){
    var contraseñas=[];
    var correousuarios=[];
    if(localStorage.getItem("key")==null) {
        person =[
            {"id":"",
                "datos":[{ "name":"admin", "correo":"admin@gmail.com", "contraseña" : "ketzal1",}]
            },
            {"id":"",
                "datos":[{ "name":"Armando", "correo":"jart2607@gmail.com", "contraseña" :"1234",}]
            },
            {"id": "",
                "datos":[{ "name":"Pedro", "correo":"mariana1234@gmail.com","contraseña" : "12w35343md34f",}]
            },
        ]
        for (let index = 0; index < person.length; index++) {
            person[index].id=index;
            selector=person[index];
            contraseñas.push(selector.datos[0].contraseña);
            correousuarios.push(selector.datos[0].correo);
        }
        localStorage.setItem("correokey", correousuarios);
        localStorage.setItem("key", contraseñas);
    }
}
function leer(){
    var correoj=document.getElementById("correop").value; 
    var contraseñaj=document.getElementById("contraseñap").value; 
    /*     traer elementos del formulario*/  
    let lastkey=localStorage.getItem("key").split(",");
    let lastname=localStorage.getItem("correokey").split(",");
    /*     traer elementos del los correos del localstronge formulario*/  
    /*     traer elementos del las contraseñas del localstronge formulario*/
    let longitudlastkey=localStorage.getItem("key").split(",").length;
    for (let i = 1; i < longitudlastkey; i++) {
        if (correoj==lastname[0] && contraseñaj==lastkey[0] ) { /* solo se ejecuta para el administrador */
            let usuarioAceptado=JSON.stringify("admin@gmail.com");
            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo",usuarioAceptado);
            location.href ="../pages/administrador.html"
            break;
        }
        if(correoj==lastname[i] && contraseñaj==lastkey[i]){/* solo se ejecuta para los usuarios*/
            location.href ="../pages/productosExp.html"
            break;
        }
    } //cierra for
        mensajealert="Usuario o contraseña incorrecto ";
        color="warning"
        alertnoregistrado(mensajealert, color);
}

        

