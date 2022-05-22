import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery')
}

const galleryMarkup = (obj) => {
    return galleryItems.reduce((acc, {preview, original, description }) => acc + `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="" title="${description}" />
</a>`, '') 
}

refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup(galleryItems))

new SimpleLightbox('.gallery a', {  captionDelay: 250,});