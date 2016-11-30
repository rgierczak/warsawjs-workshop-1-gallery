class Gallery {
    constructor() {
        this.currentPhotoId = null;
        this.setup();
    }

    setup() {
        this.setCurrentPhotoId();
        Gallery.addDOMContentLoaderListener(this.setupClickListeners.bind(this));
    }

    setCurrentPhotoId(value) {
        switch (value){
            case 'next':
                if (this.currentPhotoId < 10)
                this.currentPhotoId += 1;
                break;

            case 'previous':
                if (this.currentPhotoId >= 1)
                this.currentPhotoId -= 1;
                break;

            default:
                this.currentPhotoId = 0;
        }
    }

    static addButtonListener($button, callback) {
        document.getElementById($button).addEventListener("click", callback);
    }

    static addDOMContentLoaderListener(handler) {
        document.addEventListener("DOMContentLoaded", handler);
    }

    setupClickListeners() {
        Gallery.addButtonListener("nextButton", this.nextButtonHandler.bind(this));
        Gallery.addButtonListener("previousButton", this.previousButtonHandler.bind(this));
    }

    nextButtonHandler() {
        this.setCurrentPhotoId('next');
        console.log('next clicked, currentPhotoId: ', this.currentPhotoId);
    }

    previousButtonHandler() {
        this.setCurrentPhotoId('previous');
        console.log('previous clicked, currentPhotoId: ', this.currentPhotoId);
    }
}

new Gallery();
