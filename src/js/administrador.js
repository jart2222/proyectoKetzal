function alertUser(mensajealert,color){
    let alerta=document.getElementById("alerta"); 
    alerta.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" style="display: none; ">
                            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </symbol>
                        </svg>
                        <div class="alert alert-success d-flex align-items-center" ${color}  role="alert">
                           <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                          <div style="color: #623307;">
                            ${mensajealert}
                          </div>
                        </div>`
}

document.addEventListener('DOMContentLoaded', e => { 
    //importar productos default
    let totalProductos = JSON.parse(localStorage.getItem("catalogo"));   
    // importar formulario
    let form_1 = document.getElementById("form_1");
    // evento presionar boton submit
    form_1.addEventListener("submit", function(e){
        e.preventDefault();
        let validar=0;
        //posibles respuestas
        let posibleID=/^[0-9]+$/;
        let posibleNumero=/^[0-9.]+$/;
        let posibleNombre=/^[^\|\.\*\?\\:<>/$"]+$/;//que no contenga estos caracteres
        //importar entradas
        let input_nombre = document.getElementById("nombre").value;
        let input_precio = document.getElementById("precio").value;
        let input_idProducto = document.getElementById("idProducto").value;
        let input_cantidad = document.getElementById("cantidad").value;
        let input_imagen = document.getElementById("imagen").value;
        let input_descripcion = document.getElementById("descripcion").value;
        //validaciones nombre
        if(input_nombre.length > 50||input_nombre.length<0){
            mensajealert="Error, el nombre es muy largo";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        if(!input_nombre.match(posibleNombre)){
            mensajealert="El nombre no tiene el formato esperado";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        //validación precio
        if(input_precio.length>10||input_precio.length<1){
            mensajealert="Error, el valor del precio no es correcto";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        if(!input_precio.match(posibleNumero)){
            mensajealert="El precio no tiene el formato esperado";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        //validacion id 
        if(!input_idProducto.match(posibleID)){
            mensajealert="El ID no tiene el formato esperado";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        if(totalProductos.hasOwnProperty(input_idProducto)) {
            mensajealert="ya existe el ID";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        //validaciones cantidad
        if(input_cantidad.length > 12||input_cantidad.length<1){
            mensajealert="Error, el valor de la cantidad no es correcto";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        if(!input_cantidad.match(posibleNumero)){
            mensajealert="La cantidad no tiene el formato esperado";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        //validaciones imagen
        if(input_imagen.length > 30 ||input_imagen.length<0){
            mensajealert="Error, el tamaño del nombre de la imagen no es correcto";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        if(!input_imagen.match(posibleNombre)){
            mensajealert="Solo escriba el nombre de la imagen, sin la extención o ubicación";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        //validaciones descripción
        if(input_descripcion.length > 100 ||input_descripcion.length<0){
            mensajealert="Error, el tamaño de la descripción no es correcto";
            validar+=1;
            color="warning"
            alertUser(mensajealert,color);
        }
        if (validar==0){
            totalProductos[input_idProducto] = {
                nombre: input_nombre,
                precio: input_precio,
                id: input_idProducto,
                cantidad: input_cantidad,
                imagen: "../src/images/productos/"+input_imagen+".jpeg",
                descripcion: input_descripcion
            };
            let totalProductosJson=JSON.stringify(totalProductos);
            localStorage.removeItem("catalogo");
            localStorage.setItem("catalogo", totalProductosJson);
        }
        else{
            validar=0;
        } 
    });
});
