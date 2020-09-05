function appendImageElement(keyword, index) {
  const imgElement = document.createElement('img');
  imgElement.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index};`;

  const galleryElement = document.querySelector('.gallery');
  galleryElement.appendChild(imgElement);
}

function searchPhotos(event) {
  const keyword = event.target.value;

  if (event.key === 'Enter' && keyword !== '') {
    for (let i = 1; i <= 9; i++) {
      appendImageElement(keyword, i);
    }
  }
}

function run() {
  const inputElement = document.querySelector('input');
  inputElement.addEventListener('keydown', searchPhotos);
}

run();
