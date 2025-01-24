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


async function handleClick(event) {
    event.preventDefault();
    cont.innerHTML = "";
    const pesquisa = input.value.toUpperCase();;
    console.log(pesquisa)
    const dados = await info();
    for (let dado in dados) {
        const dadosList = dados[dado]
        const div = document.createElement("div");
        div.innerText = "peliculas compatives para " + dado;
        cont.appendChild(div);
        dadosList.forEach(el => {   
            if (el.includes(pesquisa)) {
                createP(el,div);
            } 
        });
    } 
}
form.addEventListener("submit", handleClick)
