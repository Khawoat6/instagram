function appendImageElement(keyword, index) {
  const imgElement = document.createElement('img');
  imgElement.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index};`;

  const galleryElement = document.querySelector('.gallery');
  galleryElement.appendChild(imgElement);
}

function run() {
  for (let i = 1; i <= 9; i++) {
    appendImageElement('dog', i);
  }
}

run();
