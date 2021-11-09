const cards = document.getElementById('cards')
const templateCard = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let carrito = {}
document.addEventListener('DOMContentLoaded', e => { 
    readTextFile("../src/images/Json/articulos.json", function(text){
        var data = JSON.parse(text);
        console.log(data);
        MostrarPeoductos(data);
    });
 });//cuando cargue todo el html
cards.addEventListener('click', e => { addCarrito(e) });
const fetchData = async () => {
    // const res = await fetch("https://fakestoreapi.com/products");
    // const data = await res.json()
    //MostrarPeoductos(data)
}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
const MostrarPeoductos = data => {
    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('p').textContent = item.precio
		templateCard.querySelector('img').setAttribute("src",item.image)
        templateCard.querySelector('button').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}
const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}
const setCarrito = item => {
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent,
        id: item.querySelector('button').dataset.id,
    }
    if (carrito.hasOwnProperty(producto.id)) {
        console.log("Ya agregó al carrito este preducto");
    }
    else{
        carrito[producto.id] = {producto}
    }
    console.log(carrito[producto.id]);
}