
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
let score = 0;
const colors = ['red', 'green', 'blue', 'yellow'];

function startGame() {
    gameSequence = [];
    userSequence = [];
    level = 0;
    nextStep();
}

function nextStep() {
    userSequence = [];
    level++;
    score = (level - 1) * 10;
    document.getElementById('score').innerText = 'Puntuacion ' + score;
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
        }
    } else {
        alert("¡Perdiste! Inténtalo de nuevo");
        startGame();
    }
}
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const passwordMessage = document.getElementById('passwordMessage');

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(passwordInput);
    const hasLowerCase = /[a-z]/.test(passwordInput);
    const hasNumber = /[0-9]/.test(passwordInput);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput);
    if (passwordInput.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
        passwordMessage.innerText = "Contraseña segura";
        passwordMessage.style.color = "green";
    }
    else {
        passwordMessage.innerText = "Contraseña insegura. Debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
        passwordMessage.style.color = "red";
    }
}
function generateUsername() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const usernameDisplay = document.getElementById('username');

    if (firstName === '' || lastName === '') {
        usernameDisplay.innerText = "Por favor, ingresa tanto el nombre como el apellido.";
        usernameDisplay.style.color = "red";
        return;
    }

    const randomNum = Math.floor(Math.random() * 1000);
    const username = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomNum}`;

    usernameDisplay.innerText = `Nombre de usuario generado: ${username}`;
    usernameDisplay.style.color = "green";
}
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmiResult = document.getElementById('bmiResult');
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        bmiResult.innerText = "Por favor, ingresa valores válidos para peso y altura.";
        bmiResult.style.color = "red";
        return;
    }
    const bmi = weight / (height * height);
    let category = "";
    if (bmi < 18.5) {
        category = "Bajo peso";
    } else if (bmi < 24.9) {
        category = "Peso normal";
    } else if (bmi < 29.9) {
        category = "Sobrepeso";
    } else {
        category = "Obesidad";
    }   
    bmiResult.innerText = `Tu IMC es ${bmi.toFixed(2)} (${category})`;
    bmiResult.style.color = "green";
}
let clickCount = 0;
let count = 0;
let multiplierCost = 50;
let clickValue = 1;

function incrementClicks() {
    clickCount++;
    document.getElementById('clickCount').innerText = 'Clics: ' + clickCount;

    if (clickCount % 10 === 0) {
        count++;
        const milestone = document.getElementById('milestoneCount');
        if (milestone) milestone.innerText = 'Hitos alcanzados: ' + count;
    }
    const img = document.getElementById('clickerImage');
    img.classList.add('expanding');
    setTimeout(() => {
        img.classList.remove('expanding');
    }, 100);
}
function incrementClicks() {
    clickCount += clickValue;

    document.getElementById('clickCount').innerText = 'Clics: ' + clickCount;

    const img = document.getElementById('clickerImage');
    img.classList.add('expanding');
    setTimeout(() => img.classList.remove('expanding'), 100);
}

function buyDoublePlugin() {
    if (clickCount >= multiplierCost) {
        clickCount -= multiplierCost; 
        clickValue *= 2;             
        multiplierCost *= 3;         

        document.getElementById('clickCount').innerText = 'Clics: ' + clickCount;
        document.getElementById('multiplierStatus').innerText = 'Poder de Clic: x' + clickValue;
        document.getElementById('btnMultiplier').innerText = 'Comprar X2 (Costo: ' + multiplierCost + ')';
    } else {
        alert("¡No tienes suficientes clics para este plugin!");
    }
}

function resetClicks() {
    clickCount = 0;
    document.getElementById('clickCount').innerText = 'Clics: 0';
}