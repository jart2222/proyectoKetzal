class person{
      id=0
      name="";
      email= "";
      age=18;
      static total=0
      constructor(name,email,age,colaboracion,url){
          this.name=name;
          this.email = email;
          this.age = age;
          this.colaboracion = `${colaboracion}`;
          this.url=url
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
                <div class="text-center">
                    <img src=${this.url} class="rounded" alt="imagen${this.id}">
                </div>
                    <div class="alert alert-primary" role="alert">
                        Correo Electronico: ${this.email}
                    </div>
                ${this.colaboracion}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident.",
        "./imagenes/PérezElizondo.jpg")
        Armando.printInfo(divP);
    }
    else if(a==2){
        let divP=document.getElementById("modal1")
        let Daisy=new person("Daisy Sarahí Matus Morales","daisymatus54@gmail.com ", 22,
        `Desarrolladora Java Full Stack.			
        Competente en el manejo de diversas plataformas digitales con intereses en desarrollo, cyber security y temas ambientales. Muestra habilidades sociales para el trabajo colaborativo e interés por participar activamente en la solución de problemáticas actuales. `,
        "./imagenes/PérezElizondo.jpg")
        Daisy.printInfo(divP);
    }
    else if(a==3){
        let divP=document.getElementById("modal1")
        let Oscar=new person("Oscar Martínez Rufino","ing.oscar.martinez.rufino@gmail.com", 22,
        `Desarrollador Java Full Stack y estudiante de Ing. de software.
        Profesional con habilidades informáticas capaz de trabajar Front End con HTML5, CSS3, JavaScript, Bootstrap 4.6 y 5.1  y Backend con Java. VCS Git y GitHub
        Habilidades en la resolución de problemas, trabajo en equipo, organizado, responsable, gestión del tiempo y estrés, con actitud siempre positiva.
        `,"./imagenes/PérezElizondo.jpg")
        Oscar.printInfo(divP);
    }
    else if(a==4){
        let divP=document.getElementById("modal1")
        let Saul=new person("Pérez Elizondo Saúl Octavio","octavioelizondo98@gmail.com", 22,
        ` Recién egresado, acostumbrado a trabajar en equipo, a familiarizarme con nuevos conceptos rápidamente y decidido a especializarme en las tecnologías más recientes en el desarrollo de software.  `,
        "./imagenes/PérezElizondo.jpg")
        Saul.printInfo(divP);

    }
    else if(a==5){
        let divP=document.getElementById("modal1")
        let Armando=new person("Luuis Fernando Melchor Hernández","luisfernandomelchorhernandez@gmail.com", 22,
        `Sociólogo con interés en la programación, a pesar de no contar con una carrera afin, mi determinación me ha permitido aprender las herramientas y habilidades necesarias para ser un desarrollador Java full Stack.
        `,
        "./imagenes/PérezElizondo.jpg")
        Armando.printInfo(divP);
    }
    else if(a==6){
        let divP=document.getElementById("modal1")
        let Daisy=new person("Rodrigo Niebla Torres López","rodtorresl123@gmail.com ", 22,
        `Recién egresado del bootcamp como desarrollador Java full stack. 
        Buen líder, aficionado a aprender cosas nuevas e implementar el trabajo en equipo en las diversas actividades. 
        Autodidacta y organizada. 
        Cuenta con una minuciosa atención al detalle para poder innovar en el mundo de la tecnología. 
        `,
        "./imagenes/PérezElizondo.jpg")
        Daisy.printInfo(divP);
    }
    else if(a==7){
        let divP=document.getElementById("modal1")
        let Oscar=new person("Masyell De la Rosa","jart2607@gmail.com", 22,
        "Officia est cillum incididunt adipisicing consequat amet cupidatat fugiat est dolor ea aute proident.",
        "./imagenes/PérezElizondo.jpg")
        Oscar.printInfo(divP);
    }
    else if(a==8){
        let divP=document.getElementById("modal1")
        let miguel=new person("Miguel Angel Cerón Martínez","miguel.ceron.mtz@gmail.com", 22,
        `Ingeniero en geofísica, aficionado a la programación y a la naturaleza. Me encanta 
        conocer nuevos lugares. Busco desarrollarme profesionalmente en el desarrollo web y 
        también aplicar mis conocimientos en programación en la prospección sísmica.`
        ,"./imagenes/PérezElizondo.jpg")
        miguel.printInfo(divP);

    }
    


}
    
 