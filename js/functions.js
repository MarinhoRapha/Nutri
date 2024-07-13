window.onload = function(){

    /* MENU MOBILE */
Menu();

function Menu(){
    const menu = document.getElementsByClassName('menu-mobile')[0];
    const menuToggle = document.getElementsByClassName('ul-mobile')[0];
    menu.addEventListener('click', ()=>{
        menuToggle.classList.toggle('abrir')
    })
}
/* MENU MOBILE */


/* MENU SCROLL  */
const menuLinks = document.querySelectorAll('nav a[href^="#"]' && 'li');

function Distancia(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollPadrao(distanciaTopo){
    window.scroll({
        top: distanciaTopo,
        behavior: "smooth",
    })
}

function Scroll(event) {
    event.preventDefault();
    var distanciaTopo = Distancia(event.target) - 80;
    scrollPadrao(distanciaTopo);
}


menuLinks.forEach((link)=>{
    link.addEventListener('click', Scroll)
})


/* MENU SCROLL  */

/* CALCULADORA IMC */

const calcular = document.getElementById('Calcular')

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('Altura').value;
    const peso = document.getElementById('Peso').value;
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorImc = (peso / (altura*altura)).toFixed(2);
        resultado.textContent = `${nome} seu IMC é ${valorImc}. Confira na tabela!`
    }else{
        resultado.textContent = 'Preencha todos os Campos!'
    }
}



calcular.addEventListener('click', imc)

/* CALCULADORA IMC */

}

