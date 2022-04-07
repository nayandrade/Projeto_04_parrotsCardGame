
let card = prompt("Com quantas cartas vossa senhoria deseja jogar? de 4 a 14")

while (card % 2 !== 0) {
    card = prompt("Com quantas cartas vossa senhoria deseja jogar? de 4 a 14")

    while (card < 4 || card > 14) {
        card = prompt("Com quantas cartas vossa senhoria deseja jogar? de 4 a 14")
    }
}
adicionarCarta()

function adicionarCarta() {    
    for (let i = 0; i < card; i++) {
        let lista = document.querySelector("ul")
        lista.innerHTML += `
        <li class="card" onclick="escolherCarta(this)">
        <img class="card-front" src="img/front.png" alt="">
    </li>`;
    }
}



