const setNombre = () => {
    const input = document.querySelector("#inputNombre");
    const intro = document.querySelector("#intro");
    const main = document.querySelector("#main");
    const saludo = document.querySelector("#saludo");

    if (!input.value) {
        alert("Por favor, escribe un nombre para continuar.");
        input.focus();
        return;
    }

    const nombre = input.value;

    saludo.innerHTML = `¡Encantado <span class="text-primary">${nombre}</span>! Ya casi estoy listo, solo necesito coger unas cositas...`;


    intro.classList.remove("show");


    setTimeout(() => {
        intro.classList.add("d-none");
        main.classList.remove("d-none");

        setTimeout(() => main.classList.add("show"), 10);
    }, 500); 
};
