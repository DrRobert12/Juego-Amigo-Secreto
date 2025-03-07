let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();

    // Evita caracteres especiales
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,}$/;

    if (nombre === "" || !isNaN(nombre)) {
        console.log(" Por favor, ingresa un nombre válido (no números).");
        alert("Los números no son permitidos.");
        return;
    }

    if (!regex.test(nombre)) {
        console.log(" El nombre solo debe contener letras y tener al menos 3 caracteres.");
        alert("Solo esta permitido letras y debe tener al menos 3 caracteres.");
        return;
    }

    if (nombres.includes(nombre)) {
        console.log(" Este nombre ya ha sido agregado.");
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length < 3) {
        alert("Debe haber al menos 3 nombres en la lista para realizar el sorteo.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[randomIndex];

    // Remueve el nombre sorteado de la lista
    nombres.splice(randomIndex, 1);

    // Actualizar la lista visualmente
    actualizarLista();

    document.getElementById("resultado").textContent = `🎉 ¡Tu amigo secreto es: ${ganador}! 🎉 `;
}

function resetearLista() {
    nombres = [];
    actualizarLista();
    document.getElementById("resultado").textContent = "";
}
