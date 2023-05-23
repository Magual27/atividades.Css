let hpRato = 100
let hpVenom = 100
function jogar(){
    let telajogo = document.getElementById('tela')
    telajogo.innerHTML = `
        <div class="itens">
            <img class="img"src="imgs/venom.png" alt="imagem 1" onclick="ataque1()">
            <div id="id_barra1"></div>
            <img class="img" src="imgs/ratoBanho.png" alt="imagem 2" onclick="ataque2()">
            <div id="id_barra2"></div>
        </div>
    `
}
function ataque1(){
    hpVenom -= 5
    id_barra1.style.width = `${hpVenom}%` 
    if (hpVenom <= 50 && hpVenom > 20) {
        id_barra1.style.background = "yellow"
    } else if (hpVenom <= 20) {
        id_barra1.style.background = "red"
    } else if (hpVenom < 5) {
        alert("Rato Venceu")
    }
}
function ataque2(){
    hpRato -= 5
    id_barra2.style.width = `${hpRato}%`
    if (hpRato <= 50 && hpRato > 20) {
        id_barra2.style.background = "yellow"
    }else if (hpRato <= 20){
        id_barra2.style.background = "red"
    }
}