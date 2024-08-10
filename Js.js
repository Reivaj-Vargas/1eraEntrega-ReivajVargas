// Array de objetos para cafés y postres
const productos = [
    { nombre: "espresso", precio: 1500 },
    { nombre: "Capuchino", precio: 2500 },
    { nombre: "Latte", precio: 3500 },
    { nombre: "media luna", precio: 500 },
    { nombre: "promocion", precio: 3000 }
];

// Guardar los productos en localStorage
localStorage.setItem('productos', JSON.stringify(productos));

// Carrito de compras
let carrito = [];

function agregarAlCarrito() {
    const opcionesSeleccionadas = Array.from(document.querySelectorAll('#opcionesMenu input:checked')).map(input => input.value);

    opcionesSeleccionadas.forEach(eleccion => {
        const producto = productos.find(p => p.nombre === eleccion);
        if (producto) {
            carrito.push(producto);
        }
    });

    mostrarCarrito();
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = ''; // Limpiar el carrito antes de actualizarlo
    let total = 0;

    if (carrito.length === 0) {
        carritoElement.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        carrito.forEach((producto, index) => {
            carritoElement.innerHTML += `
                <p>${producto.nombre}: $${producto.precio}
                <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button></p>`;
            total += producto.precio;
        });

        carritoElement.innerHTML += `<hr><p>Total: $${total}</p>`;
    }
}

function calcularPrecioTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

    let mensaje = carrito.length > 0 
        ? `Has elegido: ${carrito.map(p => p.nombre).join(', ')}. El precio total es: $${total}`
        : "No has agregado ningún producto al carrito.";

    document.getElementById('resultado').innerText = mensaje;

    if (total > 0) {
        document.getElementById('servicioLlevar').style.display = 'block';
    } else {
        document.getElementById('servicioLlevar').style.display = 'none';
    }
}

function preguntarServicioOLlevar() {
    const eleccion = document.getElementById('servicio').value;
    let mensaje = "";

    switch (eleccion) {
        case "servir":
            mensaje = "Enseguida le atenderemos en la mesa.";
            break;
        case "llevar":
            mensaje = "Su pedido se encuentra en camino.";
            break;
        default:
            mensaje = "Opción no válida. Por favor, elige 'servir' o 'llevar'.";
            break;
    }

    document.getElementById('resultado').innerText = mensaje;
    document.getElementById('servicioLlevar').style.display = 'none';
}

function mostrarMenu() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const menuElement = document.getElementById('menu');
    const opcionesMenuElement = document.getElementById('opcionesMenu');
    let resultadoMenu = "";

    productos.forEach(producto => {
        resultadoMenu += `<p>${producto.nombre}: $${producto.precio}</p>`;

        const listItem = document.createElement('li');
        listItem.className = "dropdown-item";
        listItem.innerHTML = `
            <input type="checkbox" id="${producto.nombre}" value="${producto.nombre}">
            <label for="${producto.nombre}">${producto.nombre} - $${producto.precio}</label>
        `;
        opcionesMenuElement.appendChild(listItem);
    });

    menuElement.innerHTML = resultadoMenu;
}

// Mostrar el menú al cargar la página
mostrarMenu();
