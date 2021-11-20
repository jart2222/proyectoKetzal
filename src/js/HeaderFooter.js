const anclaHeader=document.getElementById("Head");
const anclaFooter=document.getElementById("footer");
let HEAD = `
    <nav id="menu" class="navbar navbar-expand-lg navbar-light">
        <div class="navbar-brand">
            <a href="../index.html">
                <img src="../src/images/logo.png" alt="logo" />
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item nav-link"><a href="../index.html">Inicio</a></li>
                <li class="nav-item nav-link"><a href="../pages/productos.html">Productos</a></li>
                <li class="nav-item nav-link"><a href="../pages/contacto.html">Contacto</a></li>
                <li class="nav-item nav-link"><a href="../pages/acerca.html">Acerca de</a></li>
                <li class="nav-item nav-link" id="pagDesarrollo"></li>
                <li class="nav-item nav-link"><a href="../pages/login.html"><img src="../src/images/userIcon.png" alt="usuario" /></a></li>
            </ul>
        </div>
    </nav>
    <!--menu-->
`
let FOOT = `
<section class="mt-3 container-fluid row justify-content-around">
    <div id="menu_footer" class="casilla col-3 d-none d-md-inline-block d-lg-inline-block">
        <a class="btn letrero">
            Menú
        </a>
        <div class="mt-3 menuFooter">
            <ul>
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="../pages/productos.html">Productos</a></li>
                <li><a href="../pages/contacto.html">Contacto</a></li>
                <li><a href="../pages/acerca.html">Acerca de</a></li>                
            </ul>
        </div>
    </div>
    <!--Items-->
    <div id="contactanos" class="casilla col-3 d-none d-md-inline-block d-lg-inline-block">
        <a class="btn letrero">
            Contáctanos
        </a>
        <div id="contactanosFooter">
            <div id="redes">
                <div class="icono">
                    <a href="https://www.facebook.com/profile.php?id=100074260975975">
                        <img src="../src/images/facebookIcon.png" alt="facebook" />
                    </a>
                    <p class="overlay"><a href="https://www.facebook.com/profile.php?id=100074260975975">facebook.com/Ketzal_cafeteria</a></p>
                </div>
                <!--Facebook-->
                <div class="icono">
                    <a href="https://twitter.com/CafeteriaKetzal">
                        <img src="../src/images/twitterIcon.png" alt="twitter" />
                    </a>
                    <p class="overlay"><a href="https://twitter.com/CafeteriaKetzal">@CafeteriaKetzal</a></p>
                </div>
                <!--twitter-->
                <div class="icono">
                    <a href="https://www.instagram.com/ketzal_cafeteria/">
                        <img src="../src/images/instagramIcon.png" alt="instagram" />
                    </a>
                    <p class="overlay"><a href="https://www.instagram.com/ketzal_cafeteria/">instagram.com/ketzal_cafeteria</a></p>
                </div>
                <!--instagram-->
                <div class="icono">
                    <a href="#">
                        <img src="../src/images/whatsappIcon.png" alt="whatsapp" />
                    </a>
                    <p class="overlay">+52&nbsp;55&nbsp;22&nbsp;33&nbsp;44&nbsp;11</p>
                </div>
                <!--whatsapp-->
            </div>
            <!--Redes-->
        </div>
        <!--Collapse redes-->
    </div>
    <!--Contactanos-->
    <!--Inicia acordion footer-->
    <div class="accordion mt-3 d-block d-md-none d-lg-none" id="accordionFooter">
        <div class="accordion-item">
            <h2 class="accordion-header" id="menuAccordion">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Menú
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="menuAccordion"
                data-bs-parent="#accordionFooter">
                <div class="accordion-body">
                    <div class="mt-3 menuFooter">
                        <ul>
                            <li><a href="../index.html">Inicio</a></li>
                            <li><a href="../pages/productos.html">Productos</a></li>
                            <li><a href="../pages/contacto.html">Contacto</a></li>
                            <li><a href="../pages/acerca.html">Acerca de</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="contactoAccordion">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Contáctanos
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="contactoAccordion"
                data-bs-parent="#accordionFooter">
                <div class="accordion-body">
                    <div id="contactanosFooter">
                        <div id="redes">
                            <div class="iconoAccordion">
                                <a href="https://www.facebook.com/profile.php?id=100074260975975">
                                    <img src="../src/images/facebookIcon.png" alt="facebook" />
                                </a>

                                <p class="overlayAccordion"><a href="#">facebook.com/Ketzal_cafeteria</a></p>
                            </div>
                            <!--Facebook-->

                            <div class="iconoAccordion">
                                <a href="https://twitter.com/CafeteriaKetzal">
                                    <img src="../src/images/twitterIcon.png" alt="twitter" />
                                </a>

                                <p class="overlayAccordion"><a href="#">@CafeteriaKetzal</a></p>
                            </div>
                            <!--twitter-->

                            <div class="iconoAccordion">
                                <a href="https://www.instagram.com/ketzal_cafeteria/">
                                    <img src="../src/images/instagramIcon.png" alt="instagram" />
                                </a>

                                <p class="overlayAccordion"><a href="#">instagram.com/ketzal_cafeteria</a></p>
                            </div>
                            <!--instagram-->

                            <div class="iconoAccordion">
                                <a href="#">
                                    <img src="../src/images/whatsappIcon.png" alt="whatsapp" />
                                </a>

                                <p class="overlayAccordion">+52&nbsp;55&nbsp;22&nbsp;33&nbsp;44&nbsp;11</p>
                            </div>
                            <!--whatsapp-->
                        </div>
                        <!--Redes-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Termina acordion footer-->
</section>
<!--Contenedor footer-->
<section id="copyright" class="container-fluid">
    <p>Esta web fue creada por el Equipo 2, Cohorte 6 de Generation&copy, 2021</p>
</section>
`
anclaHeader.innerHTML=HEAD;
anclaFooter.innerHTML=FOOT;
if(localStorage.getItem("usuarioActivo")!=null) {//esta logeado el usuario dueño
    let usuarioActivo=JSON.parse(localStorage.getItem("usuarioActivo"));
    if(usuarioActivo=="admin@gmail.com"){
        const anclaPagDesarrollador=document.getElementById("pagDesarrollo");
        let botonPagDesarrollo=`<a href="../pages/PaginaDesarrollador.html" >Agregar Productos</a>`;
        anclaPagDesarrollador.innerHTML=botonPagDesarrollo;
    }
}