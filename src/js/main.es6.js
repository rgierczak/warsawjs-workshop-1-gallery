class Gallery {
    constructor() {
        console.log('Gallery');
        this.setup();
    }

    setup() {
        Gallery.addDOMContentLoaderListener(this.setupClickListeners.bind(this));
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
        console.log('next clicked, context: ', this);
    }

    previousButtonHandler() {
        console.log('previous clicked, context: ', this);
    }
}

new Gallery();
