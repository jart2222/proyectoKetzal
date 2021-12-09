document.addEventListener('DOMContentLoaded', e => {         
    traer_productos();
});

function traer_productos(){
    let url ="http://127.0.0.1:8080/api/productos";
    let promise=fetch(url,{ 
                            method: 'GET',
                            headers: { 'Content-Type': 'application/json'}
                        })
    promise
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        desplejar_get(data);        
    });
}
function desplejar_get(data){
    let ancla=document.getElementById("tarjetas");
    let plantillaFinal='';  
    for (const i in data) {
        let card=
                `
                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="../src/images/productos/${data[i].imagen}" alt="wave" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            ${data[i].nombre}
                            <small>$${data[i].precio} MXN / ${data[i].gramaje} gr.</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description" style="text-align: justify;">
                            ${data[i].descripcion}
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <button type="submit" id=${data[i].idProductos} onclick="addCarrito(this)" class="btn btn-success">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        plantillaFinal = plantillaFinal + card;
      }  
      ancla.innerHTML = plantillaFinal;  
    ToggleCards();
}
function addCarrito (producto){
    let url ="http://127.0.0.1:8080/api/productos";
    let promise=fetch(url,{ 
                            method: 'GET',
                            headers: { 'Content-Type': 'application/json'}
                        })
    promise
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let id = producto.id;
        let carrito = {}
        for (i in data) {
            if(parseInt(data[i].idProductos)==parseInt(id)){
                if(localStorage.getItem("carrito")!=null) {//si existe
                    carrito=JSON.parse(localStorage.getItem("carrito"));
                }
                if (carrito.hasOwnProperty(id)) {
                    carrito[id].cantidad = carrito[id].cantidad + 1
                }
                else{
                    carrito[id] = {
                        nombre: data[i].nombre,
                        precio: data[i].precio,
                        id: id,
                        cantidad: 1
                    }
                }               
                let carritoJson=JSON.stringify(carrito);
                localStorage.removeItem("carrito");
                localStorage.setItem("carrito", carritoJson); 
            }         
        }
    });



        
}