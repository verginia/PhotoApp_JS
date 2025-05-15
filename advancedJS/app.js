import Title from "./components/title.mjs";

class App{
    render(container){
        const main = document.createElement("main");
        const documentFragment = document.createDocumentFragment();

        main.classList.add("app");
        main.innerHTML = `
            ${new Title().render()}
        `;

        documentFragment.appendChild(main);
        container.appendChild(documentFragment.firstElementChild);
    }
}

const app = new App();
app.render(document.querySelector("body"));