const anclaHeader=document.getElementById("menu");
<<<<<<< HEAD
const anclaFooter=document.getElementById("footer");

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
                    <a class="nav-link" href="#">INICIO</a>
                </li>
                <li id="moveText2" class="nav-item">
                    <a class="nav-link" href="#">PRODUCTOS</a>
                </li>
                <li id="logoNav" class="navbar-item d-lg-block d-none" href="#">
                    <img src="../src/images/logo.svg">
                </li><!--Logo navbar--> 
                <li id="moveText3" class="nav-item">
                    <a class="nav-link" href="#">CONTÁCTANOS</a>
                </li>
                <li id="moveText4" class="nav-item">
                    <a class="nav-link" href="#">ACERCA&nbsp;DE</a>
                </li>
                <li id="moveText5" class="nav-item">
                    <a class="nav-link" href="#"><i class="far fa-user"></i></a>
                </li>
            </ul><!--Items navbar-->
        </div>
    </div>
    </nav><!--Menú navbar-->
`

let foot = `
    <ul class="redes">
    <li><a href="#" alt="Facebook"><i class="fab fa-facebook-f"></i></a></li>
    <li><a href="#" alt="Instagram"><i class="fab fa-instagram"></i></a></li>
    <li><a href="#" alt="Twitter"><i class="fab fa-twitter"></i></a></li>
    <li><a href="#" alt="WhatsApp"><i class="fab fa-whatsapp"></i></a></li>
    </ul><!--Redes footer-->
`

anclaHeader.innerHTML = head;
anclaFooter.innerHTML = foot;
=======
const anclaFooter=document.getElementById("foot");

let head = `
<div class="container">
<div class="row">
        <div class="col-12">
            <nav class="navbar navbar-expand-lg navbar-primary bg ">
                <div class="container-fluid .d-none d-sm-block d-md-block d-lg-none ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list"></i> <!-- icono de menu -->
                      </button>  
                    
                    <a class="navbar-brand navancla" href="#">
                        <img class="img-fluid" width="30" height="24" src="../src/images/ktezal1.png" alt="" class="d-inline-block align-text-top"> KETZAL<!--  logo ymensaje ketzal -->
                    </a>
                </div>  
                  <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="container-fluid">
                                <a class="navbar-brand navancla" href="../../pages/administrador.html"> 
                                    <i class="bi bi-folder"></i>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="container-fluid">
                                <a class="navbar-brand navancla" href="../../index.html">INICIO</a>
                              </div>
                        </li>
                        <li class="nav-item">
                            <div class="container-fluid">
                                <a class="navbar-brand navancla" href="../../pages/productos.html">PRODUCTOS</a>
                              </div>
                        </li>
                        <li class="nav-item d-none d-lg-block">
                            <div class="container-fluid">
                                <a class="navbar-brand navancla" href="../../index.html">
                                    <img class="img-fluid" width="100" src="../src/images/ktezal1.png" alt="">
                                </a>
                            </div>
                            
                        </li>
                        <li class="nav-item">
                            <div class="container-fluid">
                                <a class="navbar-brand navancla" href="../../pages/contáctanos.html">CONTÁCTANOS</a>
                              </div>
                        </li>
                        
                        <li class="nav-item">
                            <div class="container-fluid">
                                <a class="navbar-brand navancla" href="../../pages/acerca.html">ACERCA DE</a>
                              </div>
                        </li>
                        <li>
                            <div class="container-fluid">
                                <a class="navbar-brand navancla" href="../../pages/login.html">
                                    <i class="bi bi-person"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                  </div>
            </nav>
          </div>



</div>

</div>

`

let foot = `
<div class="container">
<div class="row">
    <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-primary bg  justify-content-center verde" >
            <div class="navbar" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <i class="bi bi-twitter"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
</div>

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
>>>>>>> main
