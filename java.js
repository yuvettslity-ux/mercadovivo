const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// MENÚ RESPONSIVE

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// CERRAR MENÚ

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// CARRITO

let cartCount = 0;

const cartNumber = document.getElementById("cartCount");

document.querySelectorAll(".add-btn").forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartNumber.textContent = cartCount;

        button.textContent = "✓ Añadido";

        button.style.background = "#236b4d";
        button.style.color = "white";

        setTimeout(() => {

            button.textContent = "+ Añadir";
            button.style.background = "";
            button.style.color = "";

        }, 1200);

    });

});


// FORMULARIO

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {

        formMessage.textContent =
            "Por favor, completa todos los campos.";

        formMessage.style.color = "#c94d38";

        return;
    }

    if (!correo.includes("@")) {

        formMessage.textContent =
            "Ingresa un correo electrónico válido.";

        formMessage.style.color = "#c94d38";

        return;
    }

    formMessage.textContent =
        "¡Mensaje enviado correctamente!";

    formMessage.style.color = "#236b4d";

    form.reset();

});


// AÑO AUTOMÁTICO

document.getElementById("year").textContent =
    new Date().getFullYear();