

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

// Funcion para calcular el monto total
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


// Contenedor para mostrar el contador
const counterDiv = document.createElement('div');
counterDiv.id = 'cart-counter';
counterDiv.style.position = 'fixed';
counterDiv.style.bottom = '10px';
counterDiv.style.right = '10px';
counterDiv.style.padding = '10px';
counterDiv.style.backgroundColor = '#b3a8fa';
counterDiv.style.border = '1px solid #adf6ce';
counterDiv.style.borderRadius = '5px';
counterDiv.style.fontFamily = 'Faculty Glyphic';
counterDiv.style.color = 'rgb(64, 68, 102)';
counterDiv.style.fontSize = '16px';
counterDiv.style.fontWeight = 'bold';
document.body.appendChild(counterDiv);

let clickCount = 0;

// Actualizar el contador
function updateCounter() {
    counterDiv.textContent = `Productos en el carrito: ${clickCount}`;
}

// Agregar event listeners a los otones de compra en las tarjetas de productos
const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        clickCount += 1;
        updateCounter();
    });
});

// Iniciar contador
updateCounter();


// Ejemplo
agregarAlCarrito("Producto 1", 10.99, 2);
agregarAlCarrito("Producto 2", 5.99);
agregarAlCarrito("Producto 1", 10.99, 1); // Add more of the same Producto
mostrarCarrito(); // View cart contents
updateCantidad("Producto 1", 3); // Update cantidad
mostrarCarrito();
quitarDelCarrtito("Producto 2"); // Remove a Producto
mostrarCarrito();



// Barra de búsqueda
    document.getElementById("busq").addEventListener("click", function () {
        const query = document.getElementById("cuadrob").value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
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