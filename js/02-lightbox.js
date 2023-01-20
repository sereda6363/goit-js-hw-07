import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery")

const imageEl = galleryItems.map(elem => `<a class="gallery__link" href="${elem.original}">
    <img
    class="gallery__image"
    src="${elem.preview}" 
    data-source="${elem.original}" 
    alt="${elem.description}"/>
  </a>`).join("");
galleryEl.insertAdjacentHTML("beforeend", imageEl);

// galleryEl.addEventListener('click', onGalleryClick);

// function onGalleryClick(evt) {
//   evt.preventDefault()
//   if (evt.target.nodeName !== 'IMG') {
//     return
//   }
  // const dataEl = evt.target.getAttribute('data-source')
  // const modalEl = basicLightbox.create(`
	// 	<img src="${dataEl}" width="1280">
	// `)
  // modalEl.show()

//   galleryEl.addEventListener('keydown', evt => {
//   if (evt.key === 'Escape'){
//     modalEl.close()
//   }
// })
new SimpleLightbox(".gallery a",{captionDelay:250, captionPosition:"botton", captionsData:"alt"})

