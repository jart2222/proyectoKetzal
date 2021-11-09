const endpoint = "https://fakestoreapi.com/products";
const numProducto="1";
const productosPromise=fetch(endpoint);
console.log(`Estado promesa: ${productosPromise}`);
productosPromise
    .then(function(data){
        console.log(data);
        return data.json();
    })
    .then(function(data){
        console.log(data);
        let plantillaFinal='';
        const ancla=document.getElementById("productos");
        let contProductos=0;
        data.forEach(function(elemento){
            let card=`
                <article class="card card-product-list">
                    <div class="card-body">
                        <div class="row">
                            <aside class="col-sm-4">
                                <a class="img-wrap"><img src="${elemento.image}"width="200" height="200"></a>
                            </aside>
                            <div class="col-sm-8">
                                <a href="#" class="title mt-2 h5">${elemento.title}</a>
                                <div class="d-flex mb-3">
                                    <div class="price-wrap mr-4">
                                        <span class="price h5">$${elemento.price}</span>
                                    </div> 
                                </div>
                                <p>${elemento.description}</p>
                                <div class="form-row">
                                    <div class="form-group col-md flex-grow-0">
                                        <div class="input-group input-spinner">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-light" type="button" id="button-plus-${elemento.id}"> + </button>
                                            </div>
                                            <input type="text" class="form-control" value="1" id="total-${elemento.id}">
                                            <div class="input-group-append">
                                                <button class="btn btn-light" type="button" id="button-minus-${elemento.id}"> − </button>
                                            </div>
                                        </div>  <!-- input-spinner.// -->
                                    </div> <!-- col.// -->
                                    <div class="form-group col-md ">
                                        <a href="#" class="btn btn-primary"> <span class="text">Agregar al carrito</span> <i class="fas fa-shopping-cart"></i> </a>
					                </div> <!-- col.// -->
				                </div> <!-- row.// -->
                            </div> <!-- col.// -->
                        </div> <!-- row.// -->
                    </div> <!-- card-body .// -->
                </article>
            `;
            if (contProductos<10){
                plantillaFinal=plantillaFinal+card;
                contProductos++;
            }
        });
        ancla.innerHTML=plantillaFinal;
    })
    .catch(function(error){
        console.log(error);
    })


