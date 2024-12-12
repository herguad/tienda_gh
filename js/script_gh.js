
///Carrito

// Procesar la lista de productos
function processProductList(productos) {
   // Validar los datos ingresados.
   for (let i = 0; i < productos.length; i++) {
       const product = productos[i];

       if (typeof product.name !== 'string') {
           console.error(`${i} no es un nombre. Ingresá un nombre.`, product);
           return;
       };
       if (typeof product.price !== 'number' || typeof product.disponible !== 'boolean') {
         console.error(`${i} no es un número. Ingresá un número.`, product);
         return;
     }
     if (typeof product.disponible !== 'boolean') {
      console.error(`${i} no es un valor True/False. Ingresá un valor True o False.`, product);
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
   console.log(`Total productos con disponible: ${totalDispon}`);
   console.log(`Total productos sin disponible: ${totalNoDisp}`);
   console.log(`Total productos: ${totalDispon + totalNoDisp}`);
}

// Lista de ejemplo y cotejo de función.
const productList = [
   { name: "Producto 1", price: 400, disponible: true },
   { name: "Producto 2", price: 200, disponible: false },
   { name: "Producto 3", price: 150, disponible: true },
   { name: "Producto 4", price: 350, disponible: true },
   { name: "Producto 5", price: 300, disponible: false }
];

processProductList(productList);
