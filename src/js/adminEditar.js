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
        desplejar_get(data)
    } );
}

function desplejar_get(data){
    for (const i in data) {
        let idP= data[i].idProductos
        let nombreP= data[i].nombre
        let imagenP= data[i].imagen;
        let productoP=data[i].descripcion;
        let precioP= data[i].precio;
        let gramajeP=data[i].gramaje;
        crear_lista(idP,nombreP,imagenP,productoP,precioP,gramajeP);
      }    
}

function crear_lista(idP,nombreP,imagenP,productoP,precioP,gramajeP){
    let tarjetas=document.getElementById("tarjetas")
    tarjetas.innerHTML+=
    `                   <div class=" col-sm-12 col-md-12 col-lg-6">
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-success" aria-disabled="true">Producto num. ${idP}</li>
                                <li class="list-group-item list-group-item-danger">Nombre del producto: ${nombreP}</li>
                                <li class="list-group-item list-group-item-danger">Direccion de la imagen: ${imagenP}</li>
                                <li class="list-group-item list-group-item-danger">Descripcion: ${productoP}</li>
                                <li class="list-group-item list-group-item-danger">Precio: ${precioP} pesos.</li>
                                <li class="list-group-item list-group-item-danger">Peso: ${gramajeP} gr</li>
                                <li class="list-group-item list-group-item-danger"><button type="button" class="btn btn-success" onclick="borrarProducto(${idP})" >Eliminar</button></li>
                                <li class="list-group-item list-group-item-danger">
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Editar
                                    </button>
                                </li>
                            </ul> 
                            <!-- Button trigger modal -->
                            

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Editor de Productos</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">

                                    <section id="form_1" class="container-fluid">
                                        <div class="row justify-content-center">
                                        <div class="imagen">
                                            <h1>ADMINISTRADOR</h1>
                                        </div>
                                        <div class="row" style=" padding: 7%;">
                                            <form class="row g-3">
                                            <div id="alerta">
                                                
                                            </div>
                                            <div class="col-md-6">
                                                <label for="producto" class="form-label">NOMBRE DEL PRODUCTO *</label>
                                                <input id="nombreU${idP}" type="text" class="form-control" minlength="1" maxlength="30" value="${nombreP}" >
                                            </div>
                                            <div class="col-md-6">
                                                <label for="idProducto" class="form-label">ID DEL PRODUCTO *</label>
                                                <input type="number" step="1" min="1" class="form-control"  value="${idP}"  disabled id="idProductoU${idP}">
                                            </div>
                                            <div class="col-md-6">
                                                <label for="precio" class="form-label">PRECIO *</label>
                                                <input type="number"  step="0.01" min="1.0" class="form-control" value="${precioP}"  id="precioU${idP}">
                                            </div>
                                            <div class="col-md-6">
                                                <label for="Cantidad" class="form-label">CANTIDAD EN GRAMOS *</label>
                                                <input type="number" step="0.01" min="1.0" class="form-control" value="${gramajeP}" id="cantidadU${idP}">
                                            </div>    
                                            <div class="mb-3">
                                                <label for="Imagen" class="form-label">DIRECCION DE LA IMAGEN *</label>
                                                <input type="text" minlength="1" maxlength="100" class="form-control" value="${imagenP}" id="imagenU${idP}">
                                            </div>
                                            <div class="mb-3">
                                                <label for="Descripción" class="form-label">DESCRIPCIÓN DEL PRODUCTO *</label>
                                                <textarea class="form-control" minlength="1" maxlength="200" id="descripcionU${idP}" type="text" rows="3"> ${productoP}</textarea>
                                            </div>
                                        
                                            </form>
                                        </div><!--div form -->
                                        </div><!--div row-->
                                    </section>

                                </div>
                                <div class="modal-footer">
                                    <button type="submit" onclick="actualizar_boton(${idP})" class="btn justify-content-center">AGREGAR</button>
                                    <button type="button" class="btn justify-content-center" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>         
                        <div>  `
    }


function borrarProducto(id){
    let url =`http://127.0.0.1:8080/api/productos/${id}`;
    let promiseDelete=fetch(url,{ 
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json'}
                        })
    promiseDelete
    .then(function(){
        return alert("Producto eliminado")
    })
}

function actualizar_boton(idP){
    let idU=idP
    let nombreU=document.getElementById(`nombreU${idU}`).value;
    let imagenU= document.getElementById("imagenU"+idU).value;;
    let productoU=document.getElementById("descripcionU"+$idU).value;
    let precioU= document.getElementById("precioU"+idU).value;
    let gramajeU= document.getElementById("cantidadU"+idU).value;
    update_producto(idU,nombreU,imagenU,productoU,precioU,gramajeU)

}

 function update_producto(idU,nombreU,imagenU,productoU,precioU,gramajeU){
    let url=`http://127.0.0.1:8080/api/productos/${idU}?nombre=${nombreU}&imagen=${imagenU}&descripcion=${productoU}&precio=${precioU}&gramaje=${gramajeU}`
    let promiseDelete=fetch(url,{ 
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'}
            })
        promiseDelete
        .then(function(){
        return alert("Producto Actualizado")
        })
} 


