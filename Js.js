function calcularPrecioCafe() {
    let cafe1 = "espresso";
    let cafe2 = "Capuchino";
    let cafe3 = "Latte";
    let postre = "media luna";
    let precios = [1500, 2500, 3500];
    let precioPostre = 500;

    let eleccion = prompt("Elige una opción: espresso, Capuchino, Latte, media luna, promocion");
    let mensaje = "";

    switch (eleccion) {
        case cafe1:
            mensaje = `Has elegido ${cafe1}. El precio es: $${precios[0]}`;
            break;
        case cafe2:
            mensaje = `Has elegido ${cafe2}. El precio es: $${precios[1]}`;
            break;
        case cafe3:
            mensaje = `Has elegido ${cafe3}. El precio es: $${precios[2]}`;
            break;
        case postre:
            mensaje = `Has elegido ${postre}. El precio es: $${precioPostre}`;
            break;
        case "promocion":
            mensaje = `Has elegido la promoción. El precio es: $${precios[1] + precioPostre}`;
            break;
        default:
            mensaje = "Opción no válida";
            break;
    }

    alert(mensaje);
    console.log(mensaje);

    if (mensaje !== "Opción no válida") {
        preguntarServicioOLlevar();
    }
}

function mostrarMenu() {
    let menu = ["espresso", "Capuchino", "Latte", "media luna", "promocion"];
    let precios = [1500, 2500, 3500, 500, 3000];

    let resultadoMenu = "Menú:\n";
    for (let i = 0; i < menu.length; i++) {
        resultadoMenu += `${menu[i]}: $${precios[i]}\n`;
    }

    alert(resultadoMenu);
    console.log(resultadoMenu);
}

function preguntarServicioOLlevar() {
    let eleccion = prompt("¿Quieres tu pedido para servir o para llevar? (Escribe 'servir' o 'llevar')");
    
    switch (eleccion.toLowerCase()) {
        case "servir":
            alert("Enseguida le atenderemos en la mesa.");
            console.log("Enseguida le atenderemos en la mesa.");
            break;
        case "llevar":
            alert("Su pedido se encuentra en camino.");
            console.log("Su pedido se encuentra en camino.");
            break;
        default:
            alert("Opción no válida. Por favor, elige 'servir' o 'llevar'.");
            console.log("Opción no válida. Por favor, elige 'servir' o 'llevar'.");
            preguntarServicioOLlevar();  // Volver a preguntar en caso de opción no válida
            break;
    }
}

function ordenarCafe() {
    let repetir = true;
    while (repetir) {
        calcularPrecioCafe();
        repetir = confirm("¿Quieres ordenar otro café o postre?");
    }
}

// Mostrar el menú y empezar a ordenar
mostrarMenu();
ordenarCafe();
