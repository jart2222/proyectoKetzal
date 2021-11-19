const cards = document.getElementById('cards')

let carrito = {}
document.addEventListener('DOMContentLoaded', e => { 
        let totalProductos=iniciarProductos();
        let plantillaFinal='';
                    
            const ancla=document.getElementById("cards");
            for(idProducto in totalProductos){
                let card=`
                    <div class="col-12 col-md-4 mb-4" >
                        <div class="card">
                            <div class="card-body" style="background-color: #ffe6a7;">
                                <a class="img-wrap"><img src="${totalProductos[idProducto].imagen}" width="200" height="300" class=" img-fluid rounded"></a>
                                <h5>${totalProductos[idProducto].nombre}</h5>
                                <ul>
                                    <li><p>$<span>${totalProductos[idProducto].precio}</span></p></li>
                                    <li><p>${totalProductos[idProducto].cantidad} gr.</p></li>
                                </ul>
                                <p align="left">${totalProductos[idProducto].descripcion}</p>
                                <button class="btn btn-dark" id="${totalProductos[idProducto].id}" style="background-color:#23883F;">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                `;
                plantillaFinal=plantillaFinal+card;
        }
        ancla.innerHTML=plantillaFinal;

       
 });//cuando cargue todo el html
function iniciarProductos(){
    //localStorage.removeItem("catalogo");
    if(localStorage.getItem("catalogo")!=null) {//si ya existe
        let totalProductosAlmacenados=JSON.parse(localStorage.getItem("catalogo"));
        console.log("ya hay productos almacenados");
        return(totalProductosAlmacenados);
    }
    else{
        let totalProductos=crearProductos();
        let totalProductosJson=JSON.stringify(totalProductos);
        localStorage.setItem("catalogo", totalProductosJson);
        console.log("Productos base almacenados");
        return(totalProductos);
    }
}
function crearProductos(){
    let totalProductos = {};
    totalProductos[1] = {
        nombre: "Café Honduras",
        precio: 102,
        id: 1,
        cantidad: 180,
        imagen: "../src/images/Json/cafeHonduras.jpeg",
        descripcion: "café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[2] = {
        nombre: "Café Borundi",
        precio: 150,
        id: 2,
        cantidad: 200,
        imagen: "../src/images/Json/cafeBorundi.jpeg",
        descripcion: "café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[3] = {
        nombre: "Café Guatemala",
        precio: 135,
        id: 3,
        cantidad: 100,
        imagen: "../src/images/Json/cafeGuatemala.jpeg",
        descripcion: "café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[4] = {
        nombre: "Café Indonesia",
        precio: 163,
        id: 4,
        cantidad: 110,
        imagen: "../src/images/Json/cafeIndonesia.jpeg",
        descripcion: "café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[5] = {
        nombre: "Café Mimba",
        precio: 216,
        id: 5,
        cantidad: 210,
        imagen: "../src/images/Json/cafeMimba.jpeg",
        descripcion: "café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[6] = {
        nombre: "Café Mujeres",
        precio: 394,
        id: 6,
        cantidad: 360,
        imagen: "../src/images/Json/cafeMujeres.jpeg",
        descripcion: "café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[7] = {
        nombre: "Café Perú",
        precio: 498,
        id: 7,
        cantidad: 400,
        imagen: "../src/images/Json/cafePeru.jpeg",
        descripcion: "café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[8] = {
        nombre: "Café Pétalo",
        precio: 93,
        id: 8,
        cantidad: 87,
        imagen: "../src/images/Json/cafePetalo.jpeg",
        descripcion: "café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    totalProductos[9] = {
        nombre: "Café Tziscao",
        precio: 135,
        id: 9,
        cantidad: 270,
        imagen: "../src/images/Json/cafeTziscao.jpeg",
        descripcion: "café soluble liofilizado hecho con granos cosechados a mano para que disfrutes de una deliciosa taza de café"
         
    };
    return(totalProductos);
}