function addButtonListener($button, callback) {
    document.getElementById($button).addEventListener("click", callback);
}

function addDOMContentLoaderListener(handler) {
    document.addEventListener("DOMContentLoaded", handler);
}

function addPhotoClickListener($image, handler) {
    $image.addEventListener("click", handler);
}

function setCurrentPhotoSrc(images, id, $currentPhoto) {
    for (let i = 0; i < images.length; i++) {
        if (images[i].id === id) {
            $currentPhoto.src = images[i].src;
        }
    }
}

function getGalleryPhotos() {
    let $mainGallery = document.getElementById("main-gallery");
    return $mainGallery.getElementsByTagName('img');
}

function isPhotoCurrent(galleryPhotoId, currentPhotoId) {
    return Number(galleryPhotoId) === currentPhotoId;
}

const IMAGES_ARRAY_SIZE = 5;

class Gallery {
    constructor() {
        this.images = [];
        this.currentPhotoId = null;
        this.setup();
    }
    
    setup() {
        this.setCurrentPhotoId(0);
        this.buildImagesArray();
        this.displayCurrentPhoto();
        this.setupClickListeners();
    }
    
    buildImagesArray() {
        for (let i = 0; i < IMAGES_ARRAY_SIZE; i++) {
            this.images.push({
                id: i,
                src: './src/assets/photo' + i + '.jpg'
            });
        }
    }
    
    setCurrentPhotoId(value) {
        switch (value) {
            case 'next':
                if (this.currentPhotoId < this.images.length - 1) {
                    this.currentPhotoId += 1;
                }
                break;
            
            case 'previous':
                if (this.currentPhotoId > 0) {
                    this.currentPhotoId -= 1;
                }
                break;
            
            default:
                this.currentPhotoId = value;
        }
    }
    
    setupClickListeners() {
        addButtonListener("next-button", () => this.nextButtonHandler());
        addButtonListener("previous-button", () => this.previousButtonHandler());
        this.addPhotosListener();
    }
    
    addPhotosListener() {
        let $galleryPhotos = getGalleryPhotos();
        
        for (let i = 0; i < $galleryPhotos.length; i++) {
            addPhotoClickListener($galleryPhotos[i], (event) => this.photoClickHandler(event));
        }
    }
    
    photoClickHandler(event) {
        this.setCurrentPhotoId(Number(event.target.id));
        this.displayCurrentPhoto();
        this.setActivePhotoBorder();
    }
    
    displayCurrentPhoto() {
        let id = this.currentPhotoId;
        let images = this.images;
        let $currentPhoto = document.getElementById("current-photo");
        setCurrentPhotoSrc(images, id, $currentPhoto);
    }
    
    nextButtonHandler() {
        this.setCurrentPhotoId('next');
        this.displayCurrentPhoto();
        this.setActivePhotoBorder();
    }
    
    previousButtonHandler() {
        this.setCurrentPhotoId('previous');
        this.displayCurrentPhoto();
        this.setActivePhotoBorder();
    }
    
    setActivePhotoBorder() {
        let $galleryPhotos = getGalleryPhotos();
        
        for (let i = 0; i < $galleryPhotos.length; i++) {
            let $photo = $galleryPhotos[i];
            $photo.className = isPhotoCurrent($photo.id, this.currentPhotoId) ? 'border-active' : '';
        }
    }
}

addDOMContentLoaderListener(() => {
    new Gallery();
});
