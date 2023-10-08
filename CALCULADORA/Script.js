
const input = document.getElementById("input");

function digit(char) {
    var valorAtual = input.innerText;

    if (valorAtual.length > 14) {
        return;
    } else {
        input.innerText = `${valorAtual+char}`;
        const button = document.querySelector(`button[id="${char}"]`);
        if (button) {
            
            button.classList.add("anime"); // Adiciona a classe anime ao botão
            setTimeout(() => {
                button.classList.remove("anime"); // Remove a classe anime após um curto período de tempo
            }, 300); // Ajuste o tempo conforme necessário
        }
    }
}

function clearInput() {
    input.innerHTML = "";
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

