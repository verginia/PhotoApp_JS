import Thumbnail from "./thumbnail.mjs";

export default class PhotoGrid{
    constructor(data){
        this.data = data;
        console.log(data);
    }

    render(){
        return `
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-xs-6">
                        ${new Thumbnail().render()}
                    </div>
                </div>
            </div>
        `
    }
}