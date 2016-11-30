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
        addButtonListener("nextButton", this.nextButtonHandler.bind(this));
        addButtonListener("previousButton", this.previousButtonHandler.bind(this));
        this.addPhotosListener();
    }
    
    addPhotosListener() {
        let $mainGallery = document.getElementById("main-gallery");
        let $galleryImages = $mainGallery.getElementsByTagName('img');
        
        for (let i = 0; i < $galleryImages.length; i++) {
            addPhotoClickListener($galleryImages[i], this.photoClickHandler.bind(this));
        }
    }
    
    photoClickHandler() {
        this.setCurrentPhotoId(Number(event.srcElement.id));
        this.displayCurrentPhoto();
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
        console.log('next clicked, currentPhotoId: ', this.currentPhotoId);
    }
    
    previousButtonHandler() {
        this.setCurrentPhotoId('previous');
        this.displayCurrentPhoto();
        console.log('previous clicked, currentPhotoId: ', this.currentPhotoId);
    }
}

addDOMContentLoaderListener(() => {
    new Gallery();
});
