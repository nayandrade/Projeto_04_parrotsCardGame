const img0 = "img/img0.png";
const img1 = "img/img1.gif";
const img2 = "img/img2.gif";
const img3 = "img/img3.gif";
const img4 = "img/img4.gif";
const img5 = "img/img5.gif";
const img6 = "img/img6.gif";
const img7 = "img/img7.gif";
const imagens = [img1, img2, img3, img4, img5, img6, img7]
let imagensEmbaralhadas = []
let cartasDistribuir = []

let card = prompt("Com quantas cartas vossa senhoria deseja jogar? Pares, de 4 a 14")

while (card % 2 !== 0) {
    card = prompt("Com quantas cartas vossa senhoria deseja jogar? Pares, de 4 a 14")

    while (card < 4 || card > 14) {
        card = prompt("Com quantas cartas vossa senhoria deseja jogar? Pares, de 4 a 14")
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      
    }
  }

distribuirCartas()
function distribuirCartas() {
    shuffle(imagens);
    for (let i = 0; i < (card/2) ; i++) {
        imagensEmbaralhadas.push(imagens[i])
    }
    
    duplicarCartas()
}


function duplicarCartas() {
    for (let i = 0; i < imagensEmbaralhadas.length; i++) {        
        cartasDistribuir.push(imagensEmbaralhadas[i])             
    }
    for (let j = 0; j < imagensEmbaralhadas.length; j++) {        
        cartasDistribuir.push(imagensEmbaralhadas[j])             
    }    
    shuffle(cartasDistribuir) 
    adicionarCarta()    
}

function adicionarCarta() {
    
    for (let i = 0; i < card; i++) {
        let lista = document.querySelector(".container")
        lista.innerHTML += `
        <div class="card" onclick="escolherCarta(this)">
        <img class="card-front" src="${img0}" alt="">
        <img class="card-back escondido" src="${cartasDistribuir[i]}" alt="">
    </div>`
    }
}

function escolherCarta(elemento) {

}







