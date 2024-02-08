const images = ["떼아.jpg", "유채가족.jpg", "크리스마스.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage)

document.body.appendChild(bgImage)