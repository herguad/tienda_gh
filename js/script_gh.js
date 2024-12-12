// Procesar la lista de productos
function processProductList(productos) {
   // Validar los datos ingresados.
   for (let i = 0; i < productos.length; i++) {
       const product = productos[i];
       if (typeof product.name !== 'string') {
           console.error(`${i} no es un nombre. Ingresá un nombre.`, product);
           return;
       };
       if (typeof product.price !== 'number' || typeof product.descuento !== 'boolean') {
         console.error(`${i} no es un número. Ingresá un número.`, product);
         return;
     }
     if (typeof product.descuento !== 'boolean') {
      console.error(`${i} no es un valor True/False. Ingresá un valor True o False.`, product);
      return;
  }
   }

   let totalConDesc = 0;
   let totalSinDesc = 0;

   // Iterar sobre la lista y sumar la cantidad de productos con descuento.
   for (let i = 0; i < productos.length; i++) {
       const producto = productos[i];
       if (producto.descuento === true) {
           totalConDesc++;
       } else {
           totalSinDesc++;
       }
   }

   // Mostrar resultados en consola.
   console.log(`Total productos con descuento: ${totalConDesc}`);
   console.log(`Total productos sin descuento: ${totalSinDesc}`);
   console.log(`Total productos: ${totalConDesc + totalSinDesc}`);
}

// Lista de ejemplo y cotejo de función.
const productList = [
   { name: "Producto 1", price: 100, descuento: true },
   { name: "Producto 2", price: 200, descuento: false },
   { name: "Producto 3", price: 150, descuento: true },
   { name: "Producto 4", price: 250, descuento: false },
];

processProductList(productList);
