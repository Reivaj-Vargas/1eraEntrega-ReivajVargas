
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

