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
            alert("Error, el nombre es muy largo");
            validar+=1;
        }
        if(!input_nombre.match(posibleNombre)){
            alert("El nombre no tiene el formato esperado");
            validar+=1;
        }
        //validación precio
        if(input_precio.length>10||input_precio.length<1){
            alert("Error, el valor del precio no es correcto");
            validar+=1;
        }
        if(!input_precio.match(posibleNumero)){
            alert("El precio no tiene el formato esperado");
            validar+=1;
        }
        //validacion id 
        if(!input_idProducto.match(posibleID)){
            alert("El ID no tiene el formato esperado");
            validar+=1;
        }
        if(totalProductos.hasOwnProperty(input_idProducto)) {
            alert("ya existe el ID");
            validar+=1;
        }
        //validaciones cantidad
        if(input_cantidad.length > 12||input_cantidad.length<1){
            alert("Error, el valor de la cantidad no es correcto");
            validar+=1;
        }
        if(!input_cantidad.match(posibleNumero)){
            alert("La cantidad no tiene el formato esperado");
            validar+=1;
        }
        //validaciones imagen
        if(input_imagen.length > 30 ||input_imagen.length<0){
            alert("Error, el tamaño del nombre de la imagen no es correcto");
            validar+=1;
        }
        if(!input_imagen.match(posibleNombre)){
            alert("Solo escriba el nombre de la imagen, sin la extención o ubicación");
            validar+=1;
        }
        //validaciones descripción
        if(input_descripcion.length > 100 ||input_descripcion.length<0){
            alert("Error, el tamaño de la descripción no es correcto");
            validar+=1;
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
            alert("Producto "+totalProductos[input_idProducto].nombre+" agregado");
        }
        else{
            validar=0;
        } 
    });
});
