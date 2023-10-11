
const input = document.getElementById("input");


function digit(char) {
    var valorAtual = input.innerText;

    if (valorAtual.length > 14) {
        return;
    } else {
        input.innerText = `${valorAtual+char}`;
    }
}

function clearInput() {
    const visor = document.querySelector('.visor');
    visor.style.animationName =  ('fadeoutClear');
    setTimeout(function() {
        visor.style.animationName = null;   
    }, 800);

    visor.innerHTML = "";
}

function solve() {

    var calculo = input.textContent;
    if (calculo) {
    input.innerHTML = eval(calculo);
    } else {
        input.innerHTML = '0';
    }
}

function copy() {
    navigator.clipboard.writeText(input.textContent);  
}

document.addEventListener("keydown", function(event) {
    // Verifique se a tecla pressionada é um dígito numérico (0-9)
    if (event.key === '0'){
        digit(event.key);
        var botao = document.getElementById("zero");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key == 1) {
        digit('1');       
        var botao = document.getElementById("one");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '2') {
        digit('2');
        var botao = document.getElementById("two");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '3') {
        digit('3');
        var botao = document.getElementById("three");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '4') {
        digit('4');
        var botao = document.getElementById("four");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '5') {
        digit('5');
        var botao = document.getElementById("five");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '6') {
        digit('6');
        var botao = document.getElementById("six");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '7') {
        digit('7');
        var botao = document.getElementById("seven");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '8') {
        digit('8');
        var botao = document.getElementById("eight");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '9') {
        digit('9');
        var botao = document.getElementById("nine");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '+') {
        digit(event.key);
        var botao = document.getElementById("sum");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '-') {
        digit(event.key);
        var botao = document.getElementById("subtract");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '*') {
        digit(event.key);
        var botao = document.getElementById("multiply");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '/') {
        digit(event.key);
        var botao = document.getElementById("divide");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === '.') {
        digit(event.key);
        var botao = document.getElementById("dot");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === 'Enter') {
        solve(); 
        var botao = document.getElementById("solvebt");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    } else if (event.key === 'Escape') {
        clearInput(); 
        var botao = document.getElementById("clearbt");
        botao.classList.add("anime");
        setTimeout(function() {
            botao.classList.remove("anime"); 
        }, 100);
    }
});

document.addEventListener("keyup", function(event) {
    // Verifique se a tecla pressionada é um dígito numérico (0-9)
    if (event.key.match(/[0-9]/)) {
        // Remova a classe de animação do botão correspondente quando a tecla for liberada
        const button = document.querySelector(`button[data-key="${event.key}"]`);
        if (button) {
            button.classList.remove("button-pressed");
        }
    }
});

var tempo = 1;
var contador =  document.querySelector('.contador');
var cronometro;

function start(){
    cronometro = setInterval(() => {
        show(tempo);
        tempo++;
    }, 1000);
}

function show(seg) {
    var hour = Math.floor(seg/3600);
    var minute = Math.floor(seg/60);
    var second = seg % 60;

    var contagem = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`;;
    contador.textContent = contagem;
}

function pause() {
    clearInterval(cronometro);
}

function reset() {
    clearInterval(cronometro);
    tempo = 1;
    contador.innerHTML = '00:00:00';
}