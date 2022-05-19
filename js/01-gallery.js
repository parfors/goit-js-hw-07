import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
gallery: document.querySelector('.gallery')
}

refs.gallery.addEventListener('click', onGalleryClick)

function makeGalleryMarkup({ preview, original, description }) {
    return `    
    <div class="gallery__item">
    <a href="" class="gallery__link"     onclick="return false"

        ><img
        class="gallery__image"
        data-sourse="${original}"
        src="${preview}" 
        alt="${description}" 
    /></a>
    </div>`    
}
const galleryMarkup = galleryItems.map(makeGalleryMarkup).join("")
refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup)

function onGalleryClick(event) {
    if (event.target.nodeName !== 'IMG')
    { return }
    console.log(event.target.dataset.sourse);

}