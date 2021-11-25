class Miembros {
    constructor(name, imegen,resumen,github,linkedin) {
      this.name = name;
      this.imegen=imegen;
      this.resumen=resumen;
      this.github=github;
      this.linkedin=linkedin;
    }
    agregarcard(){
        this.card=`
            <article class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${this.imegen}" class="img-fluid rounded-start" alt="...">
                    </div> <!--  termina imagen card -->
                    <section class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title titulocard">${this.name}</h5>
                            <p class="card-text textocard">${this.resumen}</p>
                            <div class="container">
                                <div class="col-6 row">
                                    <div class="col-2 m-2">
                                        <a role="button" href="${this.github}" class="btn btn-outline">
                                            <i class="bi bi-github iconos"></i> 
                                        </a>
                                    </div>
                                    <div class="col-2 m-2">
                                        <a role="button" href="${this.linkedin}" class="btn btn-outline">
                                            <i class="bi bi-linkedin iconos"></i>
                                        </a>
                                    </div>
                                </div>
                            </div> <!-- seccion de iconos -->
                        </div>
                    </section> <!-- termina descripcion card -->
                </div>
            </article> <!-- termina card -->
        `
    }
}

 /*  primer miembro */

let Armando= new Miembros("Armando Roman","../src/images/Armando.png","Equipo Back-End. Licenciado en Tecnología."
                        ,"https://github.com/jart2222","https://www.linkedin.com/in/jos%C3%A9-armando-rom%C3%A1n-torres-b3aa78221/");
Armando.agregarcard()
const card1 =document.getElementById("card1");
card1.innerHTML = Armando.card
 /* termina  primer miembro */
 /* segundo miembro */
let Daisy=new Miembros("Daisy Matus","../src/images/Daisy.jpg","Equipo Front-End. Ingeniería en computación."
                    ,"https://github.com/dmatmo" , "https://www.linkedin.com/in/daisy-matus-morales-190042222/")
Daisy.agregarcard()

const card2 =document.getElementById("card2");

card2.innerHTML = Daisy.card

/* termina segundo miembro */

/* tercer miembro */

let Oscar=new Miembros("Oscar Martínez","../src/images/Oscar.jpg","Equipo Front-End. Ingeniería en Software."
                    ,"https://github.com/OscarMtz1111" , "https://www.linkedin.com/in/oscarmtz1111/")

Oscar.agregarcard()

const card3 =document.getElementById("card3");

card3.innerHTML = Oscar.card

/* termina  tercer miembro */

/* cuarto  miembro */

let Saul=new Miembros("Saúl Pérez","../src/images/Saul.jpg","Equipo Back-End. Licenciado en Tecnología."
                    ,"https://github.com/ElizOct98" , "https://www.linkedin.com/in/saul-octavio-perez-elizondo/")

Saul.agregarcard()

const card4 =document.getElementById("card4");

card4.innerHTML = Saul.card
/* Termina cuarto  miembro */

/* Quinto  miembro */

let Fernando=new Miembros("Fernando Melchor","../src/images/LuisFer.jpg","Equipo Front-End. Licenciado en Sociología"
                    ,"https://github.com/luisfernandoMH" , "https://www.linkedin.com/in/luis-fernando-melchor-hernandez-739755180/")

Fernando.agregarcard()

const card5 =document.getElementById("card5");

card5.innerHTML = Fernando.card
/* Termina Quinto miembro */

/* Sexto  miembro */

let Rodrigo=new Miembros("Rodrigo Torres","../src/images/Rodrigo.jpg","Equipo Front-End. Licenciado en Urbanismo."
                    ,"https://github.com/iRoooooo" , "https://www.linkedin.com/in/rod-torres-730aa5221")

Rodrigo.agregarcard()

const card6 =document.getElementById("card6");

card6.innerHTML = Rodrigo.card
/* Termina Sexto miembro */

/* Septimo miembro */

let Miguel=new Miembros("Miguel Cerón","../src/images/Miguel.jpg","Equipo Front-End. Ingeniería geofísica."
                    ,"https://github.com/MikeCeron" , "https://www.linkedin.com/in/miguel-%C3%A1ngel-cer%C3%B3n-mart%C3%ADnez-926541185/")

Miguel.agregarcard()
card7.innerHTML = Miguel.card
/* Termina Septimo miembro */
const card8 =document.getElementById("card8");
let Paulina=new Miembros("Paulyna Campuzano","../src/images/Paulina.jpg","Diseño UX/UI. Diseñadora y comunicadora visual"
                        ,"https://github.com/PaulynaC","https://www.linkedin.com/in/paulyna-campuzano")

Paulina.agregarcard();
card8.innerHTML = Paulina.card


