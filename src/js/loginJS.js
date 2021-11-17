function contraseñausuario(){
    localStorage.setItem("correokey", "jart2607@gmail.com");
    localStorage.setItem("key", 1234 );
}

function leer(){
    var correoj=document.getElementById("correop").value;
    var contraseñaj=document.getElementById("contraseñap").value;
    var lastname = localStorage.getItem("correokey");
    var lastkey=localStorage.getItem("key");   
    if (correoj==lastname && contraseñaj==lastkey ) {
        location.href ="https://www.youtube.com/"}
        
}