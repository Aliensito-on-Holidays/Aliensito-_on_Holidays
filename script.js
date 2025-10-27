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

const listImage = ['./imagenes/Casco espacial.png']; // adjust path
const listImage1 = ['./imagenes/Gafitas Sol.png']; // adjust path
const listImage2 = ['./imagenes/Gorrito invierno.png']; // adjust path

let currentImageIndex = 0;
let isVisible = false; // track if image is visible

const onHat = (list) => {
  const title = document.getElementById('title');
  const parent = title.parentElement;

  // Set image source (only if hidden)
  if (!isVisible) {
    title.src = list[currentImageIndex];
    title.style.display = 'block';
  } else {
    title.style.display = 'none';
  }

  // Toggle dark background for fun (optional)
  parent.classList.toggle('bg-dark');

  // Toggle visibility state
  isVisible = !isVisible;

  // Move to next image (if you have more)
  currentImageIndex = (currentImageIndex + 1) % list.length;
};


const onHat1 = (list) => {
  const title = document.getElementById('gaffas');
  const parent = title.parentElement;

  // Set image source (only if hidden)
  if (!isVisible) {
    title.src = list[currentImageIndex];
    title.style.display = 'block';
  } else {
    title.style.display = 'none';
  }

  // Toggle dark background for fun (optional)
  parent.classList.toggle('bg-dark');

  // Toggle visibility state
  isVisible = !isVisible;

  // Move to next image (if you have more)
  currentImageIndex = (currentImageIndex + 1) % list.length;
};




const onHat2 = (list) => {
  const title = document.getElementById('gorra');
  const parent = title.parentElement;

  // Set image source (only if hidden)
  if (!isVisible) {
    title.src = list[currentImageIndex];
    title.style.display = 'block';
  } else {
    title.style.display = 'none';
  }

  // Toggle dark background for fun (optional)
  parent.classList.toggle('bg-dark');

  // Toggle visibility state
  isVisible = !isVisible;

  // Move to next image (if you have more)
  currentImageIndex = (currentImageIndex + 1) % list.length;
};




const onSend = () => {
  onHat(listImage);

};



const onProd =()=>{
    onHat1(listImage1);

}




const onConfirm =()=>{
    onHat2(listImage2);

}