

// Carrito de compras array 
let carritoC = [];

//Función que agrega items al carrito
function agregarAlCarrito(nombre, precio, cantidad = 1) {
    // Verifica si ya está agregado
    const existingItem = carritoC.find(item => item.nombre === nombre);
    if (existingItem) {
        // Actualiza la cantidad
        existingItem.cantidad += cantidad;
    } else {
        // Agrega un nuevo item
        carritoC.push({ nombre, precio, cantidad });
    }
    var carrito =document.getElementById('carrito');
    var producItem = document.createElement('p');
    producItem.textContent = nombre;
    carrito.appendChild(producItem);
    console.log(`${nombre} agregado al carrito.`);
}

// Sacar item del carrito
function quitarDelCarrtito(nombre) {
    carritoC = carritoC.filter(item => item.nombre !== nombre);
    console.log(`${nombre} eliminado del carrito.`);
}

// Actualizar cantidad de items del mismo producto
function updateCantidad(nombre, cantidad) {
    const item = carritoC.find(item => item.nombre === nombre);
    if (item) {
        if (cantidad > 0) {
            item.cantidad = cantidad;
            console.log(`Cantidad de ${nombre} actualizada a ${cantidad}.`);
        } else {
            quitarDelCarrtito(nombre);
        }
    } else {
        console.log(`${nombre} no está en el carrito.`);
    }
}

// Function to calculate the total precio of items in the cart
function calcularTotal() {
    return carritoC.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

// Function to display the cart's content
function mostrarCarrito() {
    if (carritoC.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log("Tu carrito de compras:");
        carritoC.forEach(item => {
            console.log(`- ${item.nombre}: $${item.precio} x ${item.cantidad}`);
        });
        console.log(`Total: $${calcularTotal()}`);
    }
}

// Agregar botón que muestra la descripción del producto
function addProductClickEvent(productElement, description) {
    const descriptionContainer = document.createElement("div");
    descriptionContainer.style.marginTop = "10px";
    descriptionContainer.style.display = "none";
    descriptionContainer.style.padding = "10px";
    descriptionContainer.style.border = "1px solid #ccc";
    descriptionContainer.style.backgroundColor = "#f9f9f9";
    productElement.parentElement.appendChild(descriptionContainer); ///ERROR UNDEFINED

    productElement.addEventListener("click", () => {
        if (descriptionContainer.style.display === "none") {
            descriptionContainer.style.display = "block";
            descriptionContainer.textContent = description;
        } else {
            descriptionContainer.style.display = "none";
        }
    });
}

// Example Usage
agregarAlCarrito("Producto 1", 10.99, 2);
agregarAlCarrito("Producto 2", 5.99);
agregarAlCarrito("Producto 1", 10.99, 1); // Add more of the same Producto
mostrarCarrito(); // View cart contents
updateCantidad("Producto 1", 3); // Update cantidad
mostrarCarrito();
quitarDelCarrtito("Producto 2"); // Remove a Producto
mostrarCarrito();

// Example of Producto card click event
const productCard1 = document.createElement("div");
productCard1.textContent = "Producto 1";
productCard1.style.cursor = "pointer";
productCard1.style.marginBottom = "10px";
productCard1.style.padding = "10px";
productCard1.style.border = "1px solid #ccc";
productCard1.style.width = "200px";
document.body.appendChild(productCard1);
addProductClickEvent(productCard1, "Descripción de Producto 1.");

const productCard2 = document.createElement("div");
productCard2.textContent = "Producto 2";
productCard2.style.cursor = "pointer";
productCard2.style.marginBottom = "10px";
productCard2.style.padding = "10px";
productCard2.style.border = "1px solid #ccc";
productCard2.style.width = "200px";
document.body.appendChild(productCard2);
addProductClickEvent(productCard2, "Descripción de Producto 2.");
// Procesar y verificar campos del formulario
//let campo == console.get("input")

function processForm(campos) {
   // Validar los datos ingresados.
   for (let i = 0; i < campos.length; i++) {
       const campo = campos[i];

       if (typeof campo.name !== 'string') {
           console.error(`${i} no es un nombre. Ingresá un nombre.`, campo);
           return;
       };
       if (typeof campo.email !== 'email') {
         console.error(`${i} no es un correo. Ingresá tu email.`, campo);
         return;
     }
   }

   let totalDispon = 0;
   let totalNoDisp = 0;

// Iterar sobre la lista y sumar la cantidad de productos con disponible.
   for (let i = 0; i < productos.length; i++) {
       const producto = productos[i];
       if (producto.disponible === true) {
           totalDispon++;
       } else {
           totalNoDisp++;
       }
   }

   // Mostrar resultados en consola.
   console.log(`Total productos disponibles: ${totalDispon}`);
   console.log(`Total productos no disponibles: ${totalNoDisp}`);
   console.log(`Total productos: ${totalDispon + totalNoDisp}`);
}


// JavaScript function to handle product display and search

document.addEventListener("DOMContentLoaded", function () {
    // Function to display products
    function displayProducts(filteredProducts = products) {
        const shopList = document.getElementById("barra_lat");
        //productContainer.innerHTML = ""; // Clear previous cards
        
        filteredProducts.forEach(product => {
            const buyitem = document.createElement("li"); // agregar elemento al carrio, ie. listarlo y computarlo
            buyitem.className = "product-item";
            buyitem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            shopList.appendChild(buyitem);
        });
    }

    // Initial list of products
    const products = [
        { name: "Product 1", description: "Description of Product 1" },
        { name: "Product 2", description: "Description of Product 2" },
        { name: "Product 3", description: "Description of Product 3" },
    ];

    // Display all products initially
    displayProducts();

    // Search functionality
    document.getElementById("busq").addEventListener("click", function () {
        const query = document.getElementById("cuadrob").value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });
});


function processList(productos) {
    // Validar los datos ingresados.
    for (let i = 0; i < productos.length; i++) {
        const product = productos[i];
 
        if (typeof product.name !== 'string') {
            console.error(`${i} no es un nombre. Ingresá un nombre.`, product);
            return;
        };
        if (typeof product.price !== 'number') {
          console.error(`${i} no es un número. Ingresá un número.`, product);
          return;
      }
      if (typeof product.disponible !== 'boolean') {
       console.error(`${i} no es un valor True/False. Ingresá un valor True o False.`, product);
       return;
   }
    }
}
// Lista de ejemplo y cotejo de función.
const productList = [
   { name: "Producto 1", price: 400, disponible: true },
   { name: "Producto 2", price: 200, disponible: false },
   { name: "Producto 3", price: 150, disponible: true },
   { name: "Producto 4", price: 350, disponible: true },
   { name: "Producto 5", price: 300, disponible: false }
];

processList(productList);