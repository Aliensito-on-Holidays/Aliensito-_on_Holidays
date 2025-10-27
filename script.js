const listImage = ['./01.jpg']; // Image array
let currentImageIndex = 0;
const onHat = () => {
  const title = document.getElementById('title'); // ✅ get element by ID
     img.src = listImage[currentImageIndex];

  if (title.classList.contains('bg-dark')) {
    title.classList.remove('bg-dark');
    title.classList.add(img);
  } else {
    title.classList.remove(img);
    title.classList.add('bg-dark');
  }
};

const onSend = () => {
  onHat();
};
