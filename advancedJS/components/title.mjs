export default class Title{
    constructor(){
        this.heading = "My photo gallery!";
        this.subHeading = "This is my photo gallery.";
    }

    render(){
        return `
            <section class="text-center p-5 mb-4 bg-info">
                <h1>${this.heading}</h1>
                <p>${this.subHeading}</p>
            </section>
        `;
    }
}