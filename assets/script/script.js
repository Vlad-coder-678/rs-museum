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

const progressBar = document.getElementById("video_progress_bar");

progressBar.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
});

const progressVolume = document.getElementById("volume_bar");

progressVolume.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
});

console.log(`отсутствует выезжающая форма покупки билетов стоимостью 22 балла`);
