class person{
  id=0
  name="";
  email= "";
  age=18;
  static total=0
  constructor(name,email,age,colaboracion,url,linkgit,liklimkding){
      this.name=name;
      this.email = email;
      this.age = age;
      this.colaboracion = `${colaboracion}`;
      this.url=url;
      this.linkgit=linkgit;
      this.liklimkding=liklimkding;
      person.total+=1
      this.id=person.total
  }


  

  printInfo(div){
      div.innerHTML= `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${this.name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="text-center" >
                <img src=${this.url} class=" img-fluid rounded" alt="imagen${this.id}">
            </div>
              <div class="alert alert-dark" id="alert" role="alert">
                  Correo Electronico: ${this.email}
              </div>
            ${this.colaboracion}
          </div>
          <div class="modal-footer">
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="${this.linkgit}" class="btn btn-primary btn-lg" role="button" aria-disabled="true"><i class="bi bi-github"></i> </a>
              <a  href="mailto:${this.email}?&" class="btn btn-primary btn-lg " role="button" aria-disabled="true"><i class="bi bi-envelope"></i></a>
              <a  href="${this.liklimkding}" class="btn btn-primary btn-lg" role="button" aria-disabled="true"><i class="bi bi-linkedin"></i> </a>
              <button type="button" class="btn btn-danger"  aria-disabled="true" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  }


function idetificarclase(a){
if(a==1){
    let divP=document.getElementById("modal1")
    let Armando=new person("Jose Armando Roman Torres","jart2607@gmail.com", 22,
  `Desarrollador Javafull Stack, licenciado en Tecnologia, colaboracion en un proyecto de Automatas 
  celulares con Python, dominio  de HTML, CSS, Boostrap y Javascript  `,
    "../src/images/PérezElizondo.jpg" ,"https://github.com/jart2222", "https://www.linkedin.com/in/jos%C3%A9-armando-rom%C3%A1n-torres-b3aa78221/")
    Armando.printInfo(divP);
}
else if(a==2){
    let divP=document.getElementById("modal1")
    let Daisy=new person("Daisy Sarahí Matus Morales","daisymatus54@gmail.com ", 22,
    `Desarrolladora Java Full Stack.			
    Competente en el manejo de diversas plataformas digitales con intereses en desarrollo, cyber security y temas ambientales. Muestra habilidades sociales para el trabajo colaborativo e interés por participar activamente en la solución de problemáticas actuales. `,
    "../src/images/DaisySarahí.jpg","https://github.com/dmatmo" , "https://www.linkedin.com/in/daisy-matus-morales-190042222/")
    Daisy.printInfo(divP);
}
else if(a==3){
    let divP=document.getElementById("modal1")
    let Oscar=new person("Oscar Martínez Rufino","ing.oscar.martinez.rufino@gmail.com", 22,
    `Desarrollador Java Full Stack y estudiante de Ing. de software.
    Profesional con habilidades informáticas capaz de trabajar Front End con HTML5, CSS3, JavaScript, Bootstrap 4.6 y 5.1  y Backend con Java. VCS Git y GitHub
    Habilidades en la resolución de problemas, trabajo en equipo, organizado, responsable, gestión del tiempo y estrés, con actitud siempre positiva.
    `,"../src/images/OscarMartínez.jpg","https://github.com/OscarMtz1111", "https://www.linkedin.com/in/oscarmtz1111/" )
    Oscar.printInfo(divP);
}
else if(a==4){
    let divP=document.getElementById("modal1")
    let Saul=new person("Pérez Elizondo Saúl Octavio","octavioelizondo98@gmail.com", 22,
    ` Recién egresado, acostumbrado a trabajar en equipo, a familiarizarme con nuevos conceptos rápidamente y decidido a especializarme en las tecnologías más recientes en el desarrollo de software.  `,
    "../src/images/PérezElizondo.jpg","https://github.com/ElizOct98", "https://www.linkedin.com/in/saul-octavio-perez-elizondo/")
    Saul.printInfo(divP);

}
else if(a==5){
    let divP=document.getElementById("modal1")
    let Fernando=new person("Luis Fernando Melchor Hernández","luisfernandomelchorhernandez@gmail.com", 22,
    `Sociólogo con interés en la programación, a pesar de no contar con una carrera afin, mi determinación me ha permitido aprender las herramientas y habilidades necesarias para ser un desarrollador Java full Stack.
    `,"../src/images/LuisFernando.jpg","https://github.com/luisfernandoMH","https://www.linkedin.com/in/luis-fernando-melchor-hernandez-739755180/")
    Fernando.printInfo(divP);
}
else if(a==6){
    let divP=document.getElementById("modal1")
    let Rodrigo=new person("Rodrigo Niebla Torres López","rodtorresl123@gmail.com ", 22,
    `Recién egresado del bootcamp como desarrollador Java full stack. 
    Buen líder, aficionado a aprender cosas nuevas e implementar el trabajo en equipo en las diversas actividades. 
    Autodidacta y organizada. 
    Cuenta con una minuciosa atención al detalle para poder innovar en el mundo de la tecnología. 
    `,
    "../src/images/RodrigoNiebla.jpg","https://github.com/iRoooooo","https://www.linkedin.com/in/rod-torres-730aa5221")
    Rodrigo.printInfo(divP);
}
else if(a==8){
    let divP=document.getElementById("modal1")
    let miguel=new person("Miguel Angel Cerón Martínez","miguel.ceron.mtz@gmail.com", 22,
    `Ingeniero en geofísica, aficionado a la programación y a la naturaleza. Me encanta 
    conocer nuevos lugares. Busco desarrollarme profesionalmente en el desarrollo web y 
    también aplicar mis conocimientos en programación en la prospección sísmica.`
    ,"../src/images/MiguelAngel.jpg","https://github.com/MikeCeron", "#")
    miguel.printInfo(divP);

}



}

