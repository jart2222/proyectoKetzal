function contraseñausuario(){
    var contraseñas=[];
    var correousuarios=[];
    if(localStorage.getItem("key")==null) {
        person =[
            {"id":"",
                "datos":[{ "name":"admin", "correo":"admin@gmail.com","telefono": 4432234560, "contraseña" : "ketzal1",}]
            },
            {"id":"",
                "datos":[{ "name":"Armando", "correo":"jart2607@gmail.com","telefono": 5513572675, "contraseña" :"1234",}]
            },
            {"id": "",
                "datos":[{ "name":"Pedro", "correo":"mariana1234@gmail.com","telefono": 4432234560, "contraseña" : "12w35343md34f",}]
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
    var lastkey=localStorage.getItem("key").split(",");
    var lastname=localStorage.getItem("correokey").split(",");
    /*     traer elementos del los correos del localstronge formulario*/  
     /*     traer elementos del las contraseñas del localstronge formulario*/
     var longitudlastkey=localStorage.getItem("key").split(",").length;
     for (let i = 1; i < longitudlastkey; i++) {
 
         if (correoj==lastname[0] && contraseñaj==lastkey[0] ) {
            let usuarioAceptado=JSON.stringify("admin@gmail.com");
            localStorage.removeItem("usuarioActivo");
            localStorage.setItem("usuarioActivo",usuarioAceptado);
            location.href ="../../pages/PaginaDesarrollador.html"
            break;
         }
 
         if(correoj==lastname[i] && contraseñaj==lastkey[i]){
             location.href ="../../pages/productos.html"
             break;
         }
         
     }
        
}

function enviarusuarioa(){
    
    

}