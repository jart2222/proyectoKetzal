document.addEventListener('DOMContentLoaded', e => { 
    let totalProductos = iniciarProductos();   
    // importar formulario
    let form_1 = document.getElementById("form_1");
    // evento presionar boton submit
    form_1.addEventListener("submit", function(e){
        e.preventDefault();
        var validar=0;
        //posibles respuestas
        var posibleID=/^[0-9]+$/;
        var posibleNumero=/^[0-9.]+$/;
        var posibleNombre=/^[^\|\.\*\?\\:<>/$"]+$/;//que no contenga estos caracteres
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
                imagen: "../src/images/Json/"+input_imagen+".jpeg",
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
function iniciarProductos(){
    //localStorage.removeItem("catalogo");
    if(localStorage.getItem("catalogo")!=null) {
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