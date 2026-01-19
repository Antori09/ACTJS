
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 10;
let intentosusados = 1;

function comprobar() {
    let datoUsuario = document.getElementById("entradaUsuario").value;
    let mensaje = document.getElementById("mensaje");

    if (intentos > 0) {

        if (datoUsuario == numeroSecreto) {
            mensaje.innerText = "¡Felicidades! Has acertado. Solo neceseitaste: " + intentosusados + " Intentos";
            mensaje.style.color = "green";
        } else {
            intentos = intentos - 1;
            intentosusados = intentosusados + 1;

            if (intentos === 0) {
                mensaje.innerText = "Game Over. El número era " + numeroSecreto;
                mensaje.style.color = "black";
            } else if (datoUsuario > numeroSecreto) {
                mensaje.innerText = "Muy alto. Te quedan " + intentos + " intentos.";
                mensaje.style.color = "red";
            } else {
                mensaje.innerText = "Muy bajo. Te quedan " + intentos + " intentos.";
                mensaje.style.color = "red";
            }
        }

    } else {
        mensaje.innerText = "Ya no te quedan intentos. Recarga para jugar otra vez.";
    }
}

function sumar() {

    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);

    let resultadoPantalla = document.getElementById("suma");

    let suma = numero1 + numero2;

    resultadoPantalla.innerText = "El resultado es: " + suma;
}


let gameSequence = [];
let userSequence = [];
let level = 0;
let puntuacion = 0;
const colors = ['red', 'green', 'blue', 'yellow'];

function startGame() {
    gameSequence = [];
    userSequence = [];
    level = 0;
    puntuacion = 0;
    nextStep();
}

function nextStep() {
    userSequence = [];
    level++;
    puntuacion += 10;
    document.getElementById("nivel").innerText = "Nivel: " + level;
    document.getElementById("puntuacion").value = puntuacion;
    const randomColor = colors[Math.floor(Math.random() * 4)];
    gameSequence.push(randomColor);


    flashButton(randomColor);
}

function flashButton(color) {
    const btn = document.getElementById(color);
    btn.classList.add('active');
    setTimeout(() => {
        btn.classList.remove('active');
    }, 400);
}

function userClick(color) {
    userSequence.push(color);
    flashButton(color);

    checkAnswer(userSequence.length - 1);
}


function checkAnswer(currentIndex) {
    if (userSequence[currentIndex] === gameSequence[currentIndex]) {
        if (userSequence.length === gameSequence.length) {
            setTimeout(nextStep, 1000);
            puntuacion = Number(document.getElementById("puntuacion").value);

        }
    } else {
        alert("¡Perdiste! Inténtalo de nuevo");
        startGame();
    }
}

