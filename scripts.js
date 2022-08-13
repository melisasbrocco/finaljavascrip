console.log('Fetch a JSON local');

const URL = 'data/productos.json'

function productos( lista ){
    lista.forEach(producto => {
        document.write (`<li>${producto.name} - precio: ${producto.price} </li>`)
    });
}
fetch(URL)
    .then( respuesta => respuesta.json ())
    .then( data => { productos(data) })

//original 

//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");


//cart
let cart = [];

//crear productos
class Products {
    constructor(id, title, price, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }

    toString() {
        return `${this.id}. ${this.title}, ${this.price} PESOS`;
    }
}

const productsData = [];
productsData.push(new Products(1, "Anillo Samanta", 900, "img/anillo.jpg"));
productsData.push(new Products(2, "Aros Corazón", 500, "img/aros.jpg"));
productsData.push(new Products(3, "Cadena Shine", 2500, "img/cadena.jpg"));
productsData.push(new Products(4, "Cadena y dije", 2300, "img/cadenadije.jpg"));
productsData.push(new Products(5, "Dije Planeta", 850, "img/dije.jpg"));
productsData.push(new Products(6, "Pulsera Amor", 1200, "img/pulsera.jpg"));

//productos
for (const product of productsData) {
    let displayProducts = document.createElement("article");
    displayProducts.className = "product";
    displayProducts.innerHTML = `
    <div class="img-container">
        <img src=${product.image} alt="Producto" class="product-img">
        <button class="bag-btn" data-id=${product.id}>
            <i class="fas fa-shopping-cart"></i>
            Agregar al carrito
        </button>
    </div>
    <h3>${product.title}</h3>
    <h4>${product.price} PESOS</h4>
    `
 productsDOM.appendChild(displayProducts);
}

//show cart
cartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("transparent-bcg");
    cartDOM.classList.add("show-cart");
});

//hide cart
closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("transparent-bcg");
    cartDOM.classList.remove("show-cart");
});

//add to cart
const bagBtn = [...document.querySelectorAll(".bag-btn")];

bagBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        cartOverlay.classList.add("transparent-bcg");
        cartDOM.classList.add("show-cart");
    });   
}); 

bagBtn.forEach(btn => {
    let id = btn.dataset.id;
    let inCart = cart.find(item => item.id === id);
    if (inCart) {
        btn.innerText = "Agregado";
        btn.disabled = true;
    } else {
        btn.addEventListener("click", e => {
            e.target.innerText = "Agregado";
            e.target.disabled = true;
        });
    }
});