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

// Image lists
const listImage = ['./imagenes/Casco espacial.png'];
const listImage1 = ['./imagenes/Gafitas Sol.png'];
const listImage2 = ['./imagenes/Gorrito invierno.png'];

let currentImageIndex = 0;

// Helper: hide all images
function hideAll() {
  document.getElementById('title').style.display = 'none';
  document.getElementById('gaffas').style.display = 'none';
  document.getElementById('gorra').style.display = 'none';
}

// Show/hide selected image only
function toggleImage(imgId, list) {
  const img = document.getElementById(imgId);
  const isHidden = img.style.display === 'none' || img.style.display === '';

  // Hide all others first
  hideAll();

  if (isHidden) {
    img.src = list[currentImageIndex];
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }

  // Loop images if there are multiple
  currentImageIndex = (currentImageIndex + 1) % list.length;
}

// Button handlers
function onSend() {
  toggleImage('title', listImage); // Show helmet
}

function onProd() {
  toggleImage('gaffas', listImage1); // Show sunglasses
}

function onConfirm() {
  toggleImage('gorra', listImage2); // Show winter hat
}
