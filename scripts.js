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
let card = prompt("Com quantas cartas vossa senhoria deseja jogar? Pares, de 4 a 14");
let tempo = false;
let tempoMinutos = 0
let tempoSegundos = 0
let intervalo;

while (card % 2 !== 0 || card < 4 || card > 14) {
    card = prompt("Com quantas cartas vossa senhoria deseja jogar? Pares, de 4 a 14")
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function distribuirCartas() {
    shuffle(imagens);
    for (let i = 0; i < (card / 2); i++) {
        imagensEmbaralhadas.push(imagens[i])
    }
    duplicarCartas()
}

distribuirCartas()

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
        <div class="card" ">
        <img class="card-front face" onclick="escolherCarta(this)" src="${img0}" alt="">
        <img class="card-back face escondido" src="${cartasDistribuir[i]}" alt="">
    </div>`

    }
    cronometro()
}

function escolherCarta(elemento) {

    if (tempo === false) {
        elemento.parentNode.classList.add("flip");
        elemento.classList.add("escondido");
        setTimeout(() => {
            elemento.nextElementSibling.classList.remove("escondido");
        }, 100);

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
        console.log(click)
    }
}

function checar() {
    let primeirona = primeiraCarta.nextElementSibling.src
    let segundona = segundaCarta.nextElementSibling.src
    console.log(primeirona)
    console.log(segundona)

    if (primeirona == segundona) {

        primeirona = ""
        segundona = ""
        disableCards();
        resetar()
    } else {

        unflipCards();
    }
}

function disableCards() {
    primeiraCarta = ""
    segundaCarta = ""
    acerto += 1
    console.log(acerto)
}

function unflipCards() {
    tempo = true
    console.log(tempo)
    setTimeout(() => {
        primeiraCarta.parentNode.classList.remove("flip")
        primeiraCarta.classList.remove("escondido");
        primeiraCarta.nextElementSibling.classList.add("escondido");
        segundaCarta.parentNode.classList.remove("flip")
        segundaCarta.classList.remove("escondido");
        segundaCarta.nextElementSibling.classList.add("escondido");
        tempo = false;
        console.log(tempo)

    }, 1000);
    console.log(tempo)
}

function resetar() {
    if (acerto === card / 2) {
        setTimeout(() => {
            alert(`Você ganhou em ${click} jogadas! e ${tempoMinutos}:${tempoSegundos}s`)
        }, 100);
        setTimeout(() => {
            card = prompt("Você gostaria de jogar novamente? Responda 'Sim'");
            if (card == "Sim") {
                while (card % 2 !== 0 || card < 4 || card > 14) {
                    card = prompt("Com quantas cartas vossa senhoria deseja jogar? Pares, de 4 a 14")
                }
                acerto = 0
                rodadas = 0
                click = 0
                imagensEmbaralhadas = []
                cartasDistribuir = []
                document.querySelector(".container").innerHTML = ""
                distribuirCartas()
            }
        }, 300);

        setTimeout(() => {
            clearInterval(intervalo)
            tempoMinutos = 0
            tempoSegundos = 0
            let minutos = document.querySelector('.minutos')
            let segundos = document.querySelector('.segundos')

            minutos.innerHTML = `${tempoMinutos}`
            segundos.innerHTML = `${tempoSegundos}`

        }, 200);
    }
}

function cronometro() {
    intervalo = setInterval(function () {
        if (tempoSegundos === 60) {
            tempoMinutos++
            tempoSegundos = 0
        }
        let minutos = document.querySelector('.minutos')
        let segundos = document.querySelector('.segundos')

        minutos.innerHTML = `${tempoMinutos}`
        segundos.innerHTML = `${tempoSegundos}`

        tempoSegundos++
        console.log(tempoSegundos)
    }, 1000)
}


