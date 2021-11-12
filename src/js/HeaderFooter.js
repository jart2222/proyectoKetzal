const anclaHeader=document.getElementById("Head");
const anclaFooter=document.getElementById("footer");
let HEAD = `
    <nav id="menu" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand">
            <img src="../src/images/logo.png" alt="logo" />
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
                <li class="nav-item nav-link">
                    <a href="https://goo.gl/maps/7e9axv6hUCUHQ85L9">
                        <img src="../src/images/locationIcon.png" alt="localización" />
                    </a>
                </li>
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
                <li><a href="https://goo.gl/maps/7e9axv6hUCUHQ85L9">Ubicación</a></li>
            </ul>
        </div>
    </div>
    <!--Items-->
    <div id="localizacion" class="casilla col-3 d-none d-lg-inline-block">
        <a class="btn letrero">
            Ubicación
        </a>
        <div class="mt-3" id="localizacionFooter">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.860345841767!2d-99.16654678578394!3d19.28843845027435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00f5a50f29cf%3A0x20e7c5c5054d3797!2sMiguel%20Hidalgo%2016%2C%20Tlalpan%20Centro%20I%2C%20Tlalpan%2C%2014000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1636345204075!5m2!1ses!2smx" 
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
    <!--Localizacion-->
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
                    <p class="overlay"><a href="#">facebook.com/Ketzal_cafeteria</a></p>
                </div>
                <!--Facebook-->
                <div class="icono">
                    <a href="https://twitter.com/CafeteriaKetzal">
                        <img src="../src/images/twitterIcon.png" alt="twitter" />
                    </a>
                    <p class="overlay"><a href="#">@CafeteriaKetzal</a></p>
                </div>
                <!--twitter-->
                <div class="icono">
                    <a href="https://www.instagram.com/ketzal_cafeteria/">
                        <img src="../src/images/instagramIcon.png" alt="instagram" />
                    </a>
                    <p class="overlay"><a href="#">instagram.com/ketzal_cafeteria</a></p>
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
                            <li><a href="./index.html">Inicio</a></li>
                            <li><a href="./productos.html">Productos</a></li>
                            <li><a href="./contacto.html">Contacto</a></li>
                            <li><a href="./acerca.html">Acerca de</a></li>
                            <li><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.860345841767!2d-99.16654678578394!3d19.28843845027435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00f5a50f29cf%3A0x20e7c5c5054d3797!2sMiguel%20Hidalgo%2016%2C%20Tlalpan%20Centro%20I%2C%20Tlalpan%2C%2014000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1636345204075!5m2!1ses!2smx">Ubicación</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="localizacionAccordion">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Ubicación
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="localizacionAccordion"
                data-bs-parent="#accordionFooter">
                <div class="accordion-body">
                    <div class="mt-3" id="localizacionFooter">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.860345841767!2d-99.16654678578394!3d19.28843845027435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00f5a50f29cf%3A0x20e7c5c5054d3797!2sMiguel%20Hidalgo%2016%2C%20Tlalpan%20Centro%20I%2C%20Tlalpan%2C%2014000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1636345204075!5m2!1ses!2smx"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
                            <div class="icono">
                                <a href="https://www.facebook.com/profile.php?id=100074260975975">
                                    <img src="../src/images/facebookIcon.png" alt="facebook" />
                                </a>

                                <p class="overlay"><a href="#">facebook.com/Ketzal_cafeteria</a></p>
                            </div>
                            <!--Facebook-->

                            <div class="icono">
                                <a href="https://twitter.com/CafeteriaKetzal">
                                    <img src="../src/images/twitterIcon.png" alt="twitter" />
                                </a>

                                <p class="overlay"><a href="#">@CafeteriaKetzal</a></p>
                            </div>
                            <!--twitter-->

                            <div class="icono">
                                <a href="https://www.instagram.com/ketzal_cafeteria/">
                                    <img src="../src/images/instagramIcon.png" alt="instagram" />
                                </a>

                                <p class="overlay"><a href="#">instagram.com/ketzal_cafeteria</a></p>
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