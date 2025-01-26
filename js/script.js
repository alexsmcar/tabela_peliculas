const cont = document.getElementById("cont")
const form = document.getElementById("form")
const input = document.getElementById("pesquisa");

const info = async() => {
    const response = await fetch("peliculas.json");
    const dados = await response.json();
    return dados;
}


function createP(text, container) {
    const p = document.createElement("p")
    p.innerText = text;
    container.appendChild(p)

}

function createElements(dados, pesquisa) {
    let hasItem = false;
    for (let dado in dados) {
        let find = false;
        const dadosList = dados[dado]
        const div = document.createElement("div");
        const h2 = document.createElement("h2")
        h2.innerText = "peliculas compatives para " + dado;
        div.appendChild(h2)
        cont.appendChild(div);
        dadosList.forEach((el, index) => {   
            if (el.includes(pesquisa)) {
                find = true;
                hasItem = true;
                createP(el,div);
            }
        });
        if (!find) {
            div.remove();
        }
    }
    return hasItem; 
}

async function handleClick(event) {
    event.preventDefault();
    cont.innerHTML = "";
    const valor = input.value.toUpperCase();;
    const dados = await info();
    if (!createElements(dados,valor)) {
        const msg = document.createElement("p");
        msg.innerText = "Nenhum resultado encontrado";
        msg.classList.add("notFound");
        cont.appendChild(msg)
    };
}

form.addEventListener("submit", handleClick)
window.addEventListener("DOMContentLoaded", handleClick)
