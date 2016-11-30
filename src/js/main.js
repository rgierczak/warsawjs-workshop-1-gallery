function addButtonListener($button, callback) {
    document.getElementById($button).addEventListener("click", callback);
}

function addDOMContentLoaderListener(handler) {
    document.addEventListener("DOMContentLoaded", handler);
}

const IMAGES_ARRAY_SIZE = 5;

class Gallery {
    constructor() {
        this.images = [];
        this.currentPhotoId = null;
        this.setup();
    }
    
    setup() {
        this.setCurrentPhotoId();
        this.buildImagesArray();
        this.displayCurrentPhoto();
        this.setupClickListeners();
    }
    
    buildImagesArray() {
        for (let i = 0; i < IMAGES_ARRAY_SIZE; i++) {
            this.images.push({
                id: i,
                src: './src/assets/' + (i + 1) + '.jpg'
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
                this.currentPhotoId = 0;
        }
    }
    
    setupClickListeners() {
        addButtonListener("nextButton", this.nextButtonHandler.bind(this));
        addButtonListener("previousButton", this.previousButtonHandler.bind(this));
    }
    
    displayCurrentPhoto() {
        let id = this.currentPhotoId;
        let images = this.images;
        let $currentPhoto = document.getElementById("current-photo");
        
        for (let i = 0; i < images.length; i++) {
            if (images[i].id === id) {
                $currentPhoto.src = images[i].src;
            }
        }
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
