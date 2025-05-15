import Title from "./components/title.mjs";
import PhotoGrid from "./components/photoGrid.mjs";
import DataHandler from "./components/dataHandler.mjs";

class App{
    constructor() {
        this.data = [];
    }


    async render(container){
        this.data = await DataHandler.fetchData();


        const main = document.createElement("main");
        const documentFragment = document.createDocumentFragment();

        main.classList.add("app");
        main.innerHTML = `
            ${new Title().render()}
            ${new PhotoGrid(this.data).render()}
        `;

        documentFragment.appendChild(main);
        container.appendChild(documentFragment.firstElementChild);
    }
}

const app = new App();
app.render(document.querySelector("body"));