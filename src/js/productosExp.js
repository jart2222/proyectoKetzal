const cards = document.getElementById('tarjetas')
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
                                <button type="submit" class="btn btn-success">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            plantillaFinal = plantillaFinal + card;
        }
        ancla.innerHTML = plantillaFinal;
 });//cuando cargue todo el html