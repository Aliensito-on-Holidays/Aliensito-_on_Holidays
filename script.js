const setNombre = () => {
  const input = document.querySelector("#inputNombre");
  const intro = document.querySelector("#intro");
  const main = document.querySelector("#main");
  const saludo = document.querySelector("#saludo");
  const text = document.querySelector("#text");
  const ufo = document.querySelector("#ufo");

  if (!input.value.trim()) {
    alert("Por favor, escribe un nombre para continuar.");
    input.focus();
    return;
  }

  const nombre = input.value.trim();
  saludo.innerHTML = `¡Encantado <span class="text-primary">${nombre}</span>! Ya casi estoy listo, solo necesito coger unas cositas...`;
  ufo.src = "./imagenes/platillo_accesorio.png";
  ufo.style.display = "block";
  if (text) text.remove();

  intro.classList.remove("show");
  setTimeout(() => {
    intro.classList.add("d-none");
    main.classList.remove("d-none");
    setTimeout(() => main.classList.add("show"), 10);
  }, 500);
};

// === Image lists ===
const listHelmet = ['./imagenes/Casco espacial.png'];
const listSunglasses = ['./imagenes/Gafitas Sol.png'];
const listHat = ['./imagenes/Gorrita playera.png'];
const listTShirt = ['./imagenes/t-shirt.png'];
const listShirt = ['./imagenes/shirt.png'];
const listSweatShirt=['./imagenes/tshirt2.png']
const listPants = ['./imagenes/pants.png'];
const listDenimPants = ['./imagenes/denim pants.png'];
const listOrangePants = ['./imagenes/pants orange.png'];


// === Index ===
let indexHelmet = 0;
let indexSunglasses = 0;
let indexHat = 0;
let indexTShirt = 0;
let indexShirt = 0;
let indexSweatShirt=0
let indexPants = 0;
let indexDenimPants = 0;
let indexOrangePants=0


// === ID ===

const caraIds = ['title', 'gaffas', 'gorra'];
const cuerpoIds = ['tshirt','shirt','tshirt1'];
const piernasIds = ['pants', 'denim_pants','orange_pants'];

//===Background Change==
const changeBackground=(option)=>{
  const container = document.getElementById("playa");

  switch (option) {
    case 'beach':
      container.style.backgroundImage = "url('./imagenes/fondo_playa.png')";
      container.style.backgroundSize = "cover";
      container.style.backgroundPosition = "center";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 'space':
      container.style.backgroundImage = "url('./imagenes/fondo_nave.png')";
      container.style.backgroundSize = "cover";
      container.style.backgroundPosition = "center";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 'montana':
      container.style.backgroundImage = "url('./imagenes/fondo_montaña.png')";
      container.style.backgroundSize = "cover";
      container.style.backgroundPosition = "center";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 'reset':
      // Restore original video background
      container.style.backgroundImage = "none";
      container.style.background = "none";
      video.style.display = "block";
      break;
}


}


const hideCategoryImages=(ids)=>{
  ids.forEach(id => {
    const img = document.getElementById(id);
    if (img) img.style.display = 'none';
  });
}

const showSingleImage=(imgId, list, index, categoryIds)=> {
  hideCategoryImages(categoryIds);
  const img = document.getElementById(imgId);
  img.src = list[index];
  img.style.display = 'block';
}

const showAllImages=(idsToShow, list, index)=> {
  hideCategoryImages(piernasIds); 
  idsToShow.forEach(id => {
    const img = document.getElementById(id);
    img.src = list[index];
    img.style.display = 'block';
  });
}




const onHelmet=()=>{
  showSingleImage('title', listHelmet, indexHelmet, caraIds);
  indexHelmet = (indexHelmet + 1) % listHelmet.length;
}

const onSunglasses=() =>{
  showSingleImage('gaffas', listSunglasses, indexSunglasses, caraIds);
  indexSunglasses = (indexSunglasses + 1) % listSunglasses.length;
}

const onHat=()=>{
  showSingleImage('gorra', listHat, indexHat, caraIds);
  indexHat = (indexHat + 1) % listHat.length;
}

const onTShirt = () => {
  showSingleImage('tshirt', listTShirt, indexTShirt, cuerpoIds);
  indexTShirt = (indexTShirt + 1) % listTShirt.length;
}

const onShirt = () => {
  showSingleImage('shirt', listShirt, indexShirt, cuerpoIds);
  indexShirt = (indexShirt + 1) % listShirt.length;
}
const onSweatShirt=()=>{
  showSingleImage('tshirt1',listSweatShirt,indexSweatShirt,cuerpoIds);
  indexSweatShirt=(indexSweatShirt+1)%listSweatShirt.length
}
const onPants=() =>{
  showAllImages(['pants'], listPants, indexPants);
  indexPants = (indexPants + 1) % listPants.length;
}

const onDenimPants =()=> {
  showAllImages(['denim_pants'], listDenimPants, indexDenimPants);
  indexDenimPants = (indexDenimPants + 1) % listDenimPants.length;
}



const onOrangePants=()=> {
  showAllImages(['orange_pants'], listOrangePants, indexOrangePants);
  indexOrangePants = (indexOrangePants + 1) % listOrangePants.length;
}


const resetHelmet =()=>{
   const helmet = [...caraIds]
  hideCategoryImages(helmet)
}

const resetBody =()=>{
   const body = [...cuerpoIds]
  hideCategoryImages(body)
}

const resetLeg =()=>{
   const leg = [...piernasIds]
  hideCategoryImages(leg)
}
const resetAliensito=()=>{
  const allIds = [...caraIds, ...cuerpoIds, ...piernasIds];
  hideCategoryImages(allIds);
}
