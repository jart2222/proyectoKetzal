function contraseñausuario(){
    person =[
        {"id":"",
        "datos":[{ "name":"Armando", "correo":"jart2607@gmail.com","telefono": 5513572675, "contraseña" :"1234",}]
        }
        {
        "id":"",
        "datos":[{ "name":"John", "correo":"jaer34r2@gmail.com","telefono": 4432234560, "contraseña" : "12343md34f",}]
        },
        {
            "id": "",
            "datos":[{ "name":"Pedro", "correo":"mariana1234@gmail.com","telefono": 4432234560, "contraseña" : "12w35343md34f",}]
            },

        ]
    var contraseñas=[];
    var correousuarios=[];
    for (let index = 0; index < person.length; index++) {
        person[index].id=index;
        selector=person[index];
        contraseñas.push(selector.datos[0].contraseña);
        correousuarios.push(selector.datos[0].correo);
    }
    localStorage.setItem("correokey", correousuarios);
    localStorage.setItem("key", contraseñas);
    }

function leer(){
    var correoj=document.getElementById("correop").value;
    var contraseñaj=document.getElementById("contraseñap").value;
    var lastname = localStorage.getItem("correokey");
    var lastkey=localStorage.getItem("key");   
    if (correoj==lastname && contraseñaj==lastkey ) {
        location.href ="../../pages/PaginaDesarrollador.html"}
        
}