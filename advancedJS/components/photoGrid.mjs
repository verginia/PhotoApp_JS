import Thumbnail from "./thumbnail.mjs";

export default class PhotoGrid{
    constructor(data){
        this.data = data;
        this.thumbnails = [];
    }

    get thumbnailMarkup() {
        let thumbnailsHTML = "";
        this.thumbnails.forEach(thumbnail => thumbnailsHTML += `<div class="col-6 col-md-4">${thumbnail.render()}</div>`);

        return thumbnailsHTML;
    }

    componentWillRender() {
        if(this.thumbnails.length > 0) {
            return;
        }


        this.data.forEach(thumbnail => this.thumbnails.push(new Thumbnail(thumbnail)));
    }

    render(){
        this.componentWillRender();

        return `
            <div class="container">
                <div class="row g-4">
                    ${this.thumbnailMarkup}
                </div>
            </div>
        `
    }
}