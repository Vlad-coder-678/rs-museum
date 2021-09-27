const gallery = document.getElementById("gallery_inner");

const images = [];

const imagesLength = 15;

for (let i = 1; i <= imagesLength; i++) {
  images.push(i);
}

const shuffleArray = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const createImg = (number) => {
  const image = document.createElement("img");
  image.classList.add("section_gallery-img");
  image.src = `assets/img/gallery${number}.jpg`;
  image.alt = `gallery`;
  gallery.append(image);
};

const fillGallery = (array) => {
  shuffleArray(array);
  array.map((item) => createImg(item));
};

fillGallery(images);
