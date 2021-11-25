const cards = document.getElementById('cards')
document.addEventListener('DOMContentLoaded', e => { 
        //cargar productos por default
        let totalProductos=JSON.parse(localStorage.getItem("catalogo"));
        let plantillaFinal='';    
        const ancla=document.getElementById("cards");
        for(idProducto in totalProductos){
            let card=`
                <div class="col-12 col-md-4 mb-4 cardsestilos">
                    <div class="card">
                        <img src="${totalProductos[idProducto].imagen}" class="card-img-top" >
                        <div class="card-body">
                            <h5>${totalProductos[idProducto].nombre}</h5>
                            <h6>$${totalProductos[idProducto].precio} / ${totalProductos[idProducto].cantidad} gr.</h6>
                            <p class="card-text" >${totalProductos[idProducto].descripcion}</p>
                            <button type="submit" class="btn btn-success">Agregar al carrito</button>
                        </div>
                    </div>   
                </div> 
            `;
            plantillaFinal=plantillaFinal+card;
        }
        ancla.innerHTML=plantillaFinal;
 });//cuando cargue todo el html