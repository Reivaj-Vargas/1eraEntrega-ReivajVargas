
// const cafeOpciones = ["Espresso: $1.500", "Latte: $2.500", "Cappuccino: $2.000"];
// const precios = [1500, 2500, 2000];
// const promocion = "Latte + 2 medias lunas"; 
function calcularPrecioCafe() {
    let cafe1 = "espresso";
    let cafe2 = "Capuchino";
    let cafe3 = "Latte";
    let postre = "media luna";
    let precios = [1500, 2500, 3500];
    let precioPostre = 500;

    let eleccion = prompt("Elige una opción: espresso, Capuchino, Latte, media luna, promocion");
    let mensaje = "";

    if (eleccion === cafe1) {
        mensaje = `Has elegido ${cafe1}. El precio es: $${precios[0]}`;
    } else if (eleccion === cafe2) {
        mensaje = `Has elegido ${cafe2}. El precio es: $${precios[1]}`;
    } else if (eleccion === cafe3) {
        mensaje = `Has elegido ${cafe3}. El precio es: $${precios[2]}`;
    } else if (eleccion === postre) {
        mensaje = `Has elegido ${postre}. El precio es: $${precioPostre}`;
    } else if (eleccion === "promocion") {
        mensaje = `Has elegido la promoción. El precio es: $${precios[1] + precioPostre}`;
    } else {
        mensaje = "Opción no válida";
    }

    alert(mensaje);
}

calcularPrecioCafe();

  mostrarResultado(precio);


function mostrarResultado(precio) {
    alert("El precio es: $" + precio);
}

calcularPrecioCafe();



// function mostrarOpciones() {
//   let mensaje = "Elige tu café:\n";
//   for (let i = 0; i < cafeOpciones.length; i++) { 
//     mensaje += `${i + 1}. ${cafeOpciones[i]} - $${precios[i]}\n`;
//   }
//   mensaje += "4. Salir";
//   return mensaje;
// }

// function calcularPrecio(opcion) {
//   let precio = precios[opcion - 1];
//   if (cafeOpciones[opcion - 1] === promocion) {
//     precio = 3000; 
//   }
//   return precio;
// }


// function simuladorCafeteria() {
//   let continuar = true;
  
//   while (continuar) {
//     const eleccion = prompt(mostrarOpciones());
    
//     if (eleccion >= 1 && eleccion <= 3) {
//       const precioFinal = calcularPrecio(eleccion);
//       alert(`Has elegido un ${cafeOpciones[eleccion - 1]}. El precio es $${precioFinal.toFixed(0)}.`);
//       alert("Tu café está listo y en camino con el delivery.");
//     } else if (eleccion == 4) {
//       continuar = false;
//       alert("Gracias por visitar nuestra cafetería online.");
//     } else {
//       alert("Por favor, elige una opción válida.");
//     }
//   }
// }


// simuladorCafeteria();
