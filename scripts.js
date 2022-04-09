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
let hasFlippedCard = false;
let primeiraCarta;
let segundaCarta;
let acerto = 0
let rodadas = 0
let click = 0
document.querySelector("h2").innerHTML = acerto;
document.querySelector("h3").innerHTML = click;
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
    for (let i = 0; i < (card / 2); i++) {
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
    elemento.classList.toggle("flip");
    elemento.children[0].classList.toggle("escondido");
    elemento.children[1].classList.toggle("escondido");

    if (hasFlippedCard === false) {
        hasFlippedCard = true;
        primeiraCarta = elemento
        console.log(primeiraCarta)
    } else {
        segundaCarta = elemento;
        hasFlippedCard = false;
        console.log(segundaCarta)
        checar();
    }

    click += 1
    document.querySelector("h3").innerHTML = click;
    
}

function checar() {
    let primeirona = primeiraCarta.children[1].src
    let segundona = segundaCarta.children[1].src
    console.log(primeirona)
    console.log(segundona)

    if (primeirona == segundona) {
        //alert("aeee")
        primeirona = ""
        segundona = ""
        disableCards();
        resetar()
    } else {
        //alert("xi")
        unflipCards();
    }

}

function disableCards() {
    primeiraCarta = ""
    segundaCarta = ""
    acerto += 1
    document.querySelector("h2").innerHTML = acerto;
}

function unflipCards() {

    setTimeout(() => {
        primeiraCarta.classList.remove("flip")
        primeiraCarta.children[0].classList.remove("escondido");
        primeiraCarta.children[1].classList.add("escondido");
        segundaCarta.classList.remove("flip")
        segundaCarta.children[0].classList.remove("escondido");
        segundaCarta.children[1].classList.add("escondido");
        //rodadas += 1
        document.querySelector("h3").innerHTML = rodadas;
       
    }, 1000);

    //primeiraCarta.classList.remove("flip")
    //primeiraCarta.children[0].classList.remove("escondido");
    //primeiraCarta.children[1].classList.add("escondido");
    //segundaCarta.classList.remove("flip")
    //segundaCarta.children[0].classList.remove("escondido");
    //segundaCarta.children[1].classList.add("escondido");
    //rodadas += 1
    //document.querySelector("h3").innerHTML = rodadas;
}

function resetar() {
    if(acerto === card/2) {
        alert(`Você ganhou em ${click + 1} jogadas!`)
    }
}





