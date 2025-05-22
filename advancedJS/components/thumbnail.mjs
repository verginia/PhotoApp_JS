export default class Thumbnail{
    constructor(props){
        this.props = props;

    }

    render(){
        return `
            <div class="card mb-4">
                <img src="${this.props.srcThumbnail}" class="card-img-top" alt="picture">
                <div class="card-body">
                    <h3 class="card-title">${this.props.title}</h3>
                    <p class="card-text">${this.props.shortDesc}</p>
                    <a href="/single-photo?id=${this.props.id}" class="btn btn-primary" role="button">See more</a>
                </div>
            </div>
        
        `
    }
}