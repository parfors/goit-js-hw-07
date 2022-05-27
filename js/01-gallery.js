import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
    body: document.querySelector('body')
}
let modalMarkup = ""
refs.body.addEventListener('click', onBodyClick)

function makeGalleryMarkup({ preview, original, description }) {
    return `    
    <div class="gallery__item">
    <a href="" class="gallery__link"     

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

function onBodyClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG')
    {
        removeEventListener()
    }
    else {
        modalMarkup = basicLightbox.create(`
    <img src="${event.target.dataset.sourse}" width="800" height="600">
`)
        modalMarkup.show()
        addKeyListener()
            }
}

const addKeyListener = () =>{
    if (basicLightbox.visible()) {
        window.addEventListener('keydown', onEscBtnPress);
    } return
}
 
const removeEventListener = () => {
    window.removeEventListener('keydown',onEscBtnPress);
}

const onEscBtnPress = (event) => {
    if (event.key !== "Escape") {
        return
    }
    else {
        modalMarkup.close();
        removeEventListener()
}
}
