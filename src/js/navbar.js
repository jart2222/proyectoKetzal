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
document.addEventListener('DOMContentLoaded', e => { 
    anclaHeader.innerHTML = head;
    anclaFooter.innerHTML = foot;
});//cuando cargue todo el html