import Router from "./router.mjs";

export default class Title{
    constructor(){
        this.heading = "My photo gallery!";
        this.subHeading = "This is my photo gallery.";

        document.addEventListener('click', (e) => (e.target && e.target.classList.contains("title-link")) && this.onTitleLinkClicked(e));
    }

    onTitleLinkClicked(e){
        e.preventDefault();
        e.stopImmediatePropagation();

        Router.instance.pushHistory({title: this.heading, link: "/"});
    }

    render(){
        return `
            <section class="text-center p-5 mb-4 bg-info">
                <h1 class="title-link">${this.heading}</h1>
                <p>${this.subHeading}</p>
            </section>
        `;
    }
}