import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryEl = document.querySelector('.gallery');

function makeGalleryMarkup() {
    const markup = galleryItems
    .map(({preview, original, description}) => 
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
        </a>`
    )
    .join('');

    galleryEl.innerHTML = markup;
};

makeGalleryMarkup();
const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, disableScroll: false});