function appendImageElement(keyword, index) {
  const imgElement = document.createElement('img');
  imgElement.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index};`;

  const galleryElement = document.querySelector('.gallery');
  galleryElement.appendChild(imgElement);
}

function run() {
  appendImageElement('dog', 1);
}

run();
