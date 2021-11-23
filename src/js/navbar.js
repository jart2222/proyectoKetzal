const anclaHeader=document.getElementById("menu");
const anclaFooter=document.getElementById("foot");

let head = `
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button><!--Icono desplegable-->
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center moveText">
                    <li id="moveText1" class="nav-item">
                        <a class="nav-link" href="../index.html">INICIO</a>
                    </li>
                    <li id="moveText2" class="nav-item">
                        <a class="nav-link" href="../pages/productos.html">PRODUCTOS</a>
                    </li>
                    <li id="logoNav" class="navbar-item d-lg-block d-none" >
                        <a href="../index.html">
                        <img src="../src/images/logo.svg">
                        </a>
                    </li><!--Logo navbar--> 
                    <li id="moveText3" class="nav-item">
                        <a class="nav-link" href="../pages/contáctanos.html">CONTÁCTANOS</a>
                    </li>
                    <li id="moveText4" class="nav-item">
                        <a class="nav-link" href="../pages/acerca.html">ACERCA&nbsp;DE</a>
                    </li>
                    <li id="moveText5" class="nav-item">
                        <a class="nav-link" href="../pages/login.html"><i class="far fa-user"></i></a>
                    </li>
                    <li id="moveText6" class="nav-item">
                        <a class="nav-link" href="../pages/administrador.html" id="administrador"><i class="far fa-folder-open"></i></a>
                    </li>
                    
                </ul><!--Items navbar-->
            </div>
        </div>
    </nav>
`

let foot = `
    <ul class="redes">
        <li><a href="#" alt="Facebook"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#" alt="Instagram"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#" alt="Twitter"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#" alt="WhatsApp"><i class="fab fa-whatsapp"></i></a></li>
    </ul>
`
iniciarProductos();
anclaHeader.innerHTML = head;
anclaFooter.innerHTML = foot;
if(localStorage.getItem("usuarioActivo")!=null) {//esta logeado el usuario dueño
    let usuarioActivo=JSON.parse(localStorage.getItem("usuarioActivo"));
    if(usuarioActivo=="admin@gmail.com"){
        const anclaPagDesarrollador=document.getElementById("administrador");
        let botonPagDesarrollo=`<a href="../pages/PaginaDesarrollador.html" >Agregar Productos</a>`;
        anclaPagDesarrollador.innerHTML=botonPagDesarrollo;
    }
}
    
function iniciarProductos(){
    //productos por default
    if(localStorage.getItem("catalogo")==null) {//si no existe
        let totalProductos=crearProductos();
        let totalProductosJson=JSON.stringify(totalProductos);
        localStorage.setItem("catalogo", totalProductosJson);
    }
}
function crearProductos(){
    let totalProductos = {};
    totalProductos[1] = {
        nombre: "Café Honduras",
        precio: 102,
        id: 1,
        cantidad: 180,
        imagen: "../src/images/productos/cafeHonduras.jpeg",
        descripcion: "Café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[2] = {
        nombre: "Café Borundi",
        precio: 150,
        id: 2,
        cantidad: 200,
        imagen: "../src/images/productos/cafeBorundi.jpeg",
        descripcion: "Café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[3] = {
        nombre: "Café Guatemala",
        precio: 135,
        id: 3,
        cantidad: 100,
        imagen: "../src/images/productos/cafeGuatemala.jpeg",
        descripcion: "Café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[4] = {
        nombre: "Café Indonesia",
        precio: 163,
        id: 4,
        cantidad: 110,
        imagen: "../src/images/productos/cafeIndonesia.jpeg",
        descripcion: "Café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[5] = {
        nombre: "Café Mimba",
        precio: 216,
        id: 5,
        cantidad: 210,
        imagen: "../src/images/productos/cafeMimba.jpeg",
        descripcion: "Café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[6] = {
        nombre: "Café Mujeres",
        precio: 394,
        id: 6,
        cantidad: 360,
        imagen: "../src/images/productos/cafeMujeres.jpeg",
        descripcion: "Café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[7] = {
        nombre: "Café Perú",
        precio: 498,
        id: 7,
        cantidad: 400,
        imagen: "../src/images/productos/cafePeru.jpeg",
        descripcion: "Café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[8] = {
        nombre: "Café Pétalo",
        precio: 93,
        id: 8,
        cantidad: 87,
        imagen: "../src/images/productos/cafePetalo.jpeg",
        descripcion: "Café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[9] = {
        nombre: "Café Tziscao",
        precio: 135,
        id: 9,
        cantidad: 270,
        imagen: "../src/images/productos/cafeTziscao.jpeg",
        descripcion: "Café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    return(totalProductos);
}