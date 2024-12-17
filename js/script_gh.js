
///Carrito

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