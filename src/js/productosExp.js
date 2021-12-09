const cards = document.getElementById("tarjetas");
document.addEventListener('DOMContentLoaded', e => { 
        //cargar productos por default
        let totalProductos=JSON.parse(localStorage.getItem("catalogo"));
        let plantillaFinal='';    
        const ancla=document.getElementById("tarjetas");
        for(idProducto in totalProductos){
            let card=`
                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="${totalProductos[idProducto].imagen}" alt="wave" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            ${totalProductos[idProducto].nombre}
                            <small>$${totalProductos[idProducto].precio} MXN / ${totalProductos[idProducto].cantidad} gr.</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description" style="text-align: justify;">
                            ${totalProductos[idProducto].descripcion}
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <button type="submit" id=${idProducto} onclick="addCarrito(this)" class="btn btn-success">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            plantillaFinal = plantillaFinal + card;
        }
        ancla.innerHTML = plantillaFinal;
});//cuando cargue todo el html
// Agregar al carrito
function addCarrito (producto){
    let id = producto.id;
    let carrito = {}
    let totalProductos=JSON.parse(localStorage.getItem("catalogo"));
    if(localStorage.getItem("carrito")!=null) {//si existe
        carrito=JSON.parse(localStorage.getItem("carrito"));
    }
    if (carrito.hasOwnProperty(id)) {
        carrito[id].cantidad = carrito[id].cantidad + 1
    }
    else{
        carrito[id] = {
            nombre: totalProductos[id].nombre,
            precio: totalProductos[id].precio,
            id: id,
            cantidad: 1
        }
    }               
    let carritoJson=JSON.stringify(carrito);
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito", carritoJson);            
}
