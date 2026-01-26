
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

function restar() {

    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let resultadoPantalla = document.getElementById("suma");

    let resta = numero1 - numero2;
    resultadoPantalla.innerText = "El resultado es: " + resta;
}
function multiplicar() {

    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let resultadoPantalla = document.getElementById("suma");
    let multiplicacion = numero1 * numero2;
    resultadoPantalla.innerText = "El resultado es: " + multiplicacion;
}
function dividir() {

    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let resultadoPantalla = document.getElementById("suma");
    let division = numero1 / numero2;
    resultadoPantalla.innerText = "El resultado es: " + division;
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
let autoclickerCost = 200;
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
        multiplierCost *= 2;


        document.getElementById('clickCount').innerText = 'Clics: ' + clickCount;
        document.getElementById('multiplierStatus').innerText = 'Poder de Clic: x' + clickValue;
        document.getElementById('btnMultiplier').innerText = 'Comprar X2 (Costo: ' + multiplierCost + ')';
    } else {
        document.getElementById('multiplierStatus').innerText = 'No tienes suficientes clics para comprar el poder X2.';
        document.getElementById('multiplierStatus').style.color = "red";
    }
}

function buyAutoClickerPlugin() {
    if (clickCount >= autoclickerCost) {
        clickCount -= autoclickerCost;
        autoclickerCost *= 3;

        setInterval(incrementClicks, 1000);
        document.getElementById('clickCount').innerText = 'Clics: ' + clickCount;
        document.getElementById('autoClickerStatus').innerText = 'Autoclicker activado.';
        document.getElementById('btnAutoClicker').innerText = 'Comprar Autoclicker (Costo: ' + autoclickerCost + ')';
        document.getElementById('autoClickerStatus').style.color = "limegreen";

    } else {
        document.getElementById('autoClickerStatus').innerText = 'No tienes suficientes clics para comprar el autoclicker.';
        document.getElementById('autoClickerStatus').style.color = "red";
    }
}


function resetClicks() {
    clickCount = 0;
    document.getElementById('clickCount').innerText = 'Clics: 0';
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsiusInput').value;
    const fahrenheitOutput = document.getElementById('fahrenheitOutput');
    const celsius = parseFloat(celsiusInput);
    if (isNaN(celsius)) {
        fahrenheitOutput.innerText = "Por favor, ingresa un valor numérico válido.";
        fahrenheitOutput.style.color = "red";
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitOutput.innerText = `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    fahrenheitOutput.style.color = "green";
}

function checkPalindrome() {
    const inputString = document.getElementById('palindromeInput').value;   
    const palindromeResult = document.getElementById('palindromeResult');
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');  
    if (cleanedString === reversedString) {
        palindromeResult.innerText = `"${inputString}" es un palíndromo.`;
        palindromeResult.style.color = "green";
    }
    else {
        palindromeResult.innerText = `"${inputString}" no es un palíndromo.`;
        palindromeResult.style.color = "red";
    }
}

function test () {
    console.log("Funciona");
}

//Aqui se va a realzar una funcion que realiza un juego de preguntas de cultura general.
let currentQuestionIndex = 0;
let scoreQuiz = 0;
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["París", "Londres", "Roma", "Berlín"],
        correctAnswer: "París"
    },
    {
        question: "¿En qué año se fundó la ciudad de Madrid?",
        options: ["1548", "1561", "1570", "1580"],
        correctAnswer: "1561"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"],
        correctAnswer: "Amazonas"
    }
];
function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById('quizQuestion').innerText = questionObj.question;
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    questionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswerQuiz(option);
        optionsContainer.appendChild(button);
    });
}
function checkAnswerQuiz(selectedOption) {
    const questionObj = questions[currentQuestionIndex];
    if (selectedOption === questionObj.correctAnswer) {
        scoreQuiz++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showQuizResult();
    }
}
function showQuizResult() {
    document.getElementById('quizQuestion').innerText = `Has completado el quiz. Tu puntuación es ${scoreQuiz} de ${questions.length}.`;
    document.getElementById('quizOptions').innerHTML = '';
}
window.onload = loadQuestion;
//fin del juego de preguntas

var cara = new Array(
    new Array("SRC/1Dado.png", 1),
    new Array("SRC/2Dado.png", 2),
    new Array("SRC/3Dado.png", 3),
    new Array("SRC/4Dado.png", 4),
    new Array("SRC/5Dado.png", 5),
    new Array("SRC/6Dado.png", 6)
);

function Num_dado() {
    if (cara.length > 0) {
        var random = Math.floor(Math.random() * cara.length);
        var card = cara[random];
        document.getElementById("diceResult").innerHTML = "<img src='" + card[0] + "' alt='Carta' width='100' height='150'><br>Número: " + card[1];
        cara.splice(random, 1);
    }
}

// nigth mode
 const toggleBtn = document.getElementById('dark-mode-toggle');
 const body = document.body;

 if(localStorage.getItem('then') === 'dark'){
    body.classList.add('darkmode')
    toggleBtn.textContent = 'Modo Claro';
 }

 toggleBtn.addEventListener('click', () =>{
    body.classList.toggle('dark-mode');

     if (body.classList.contains('dark-mode')) {
         localStorage.setItem('theme', 'dark');
         toggleBtn.textContent = 'Modo Claro';
     } else {
         localStorage.setItem('theme', 'light');
         toggleBtn.textContent = 'Modo Oscuro';
     }
 });

// 1. Definimos las reglas
const REGLAS = [
    {
        id: 1,
        mensaje: "La contraseña debe tener al menos 5 caracteres.",
        validar: (pass) => pass.length >= 5
    },
    {
        id: 2,
        mensaje: "Debe incluir al menos un número.",
        validar: (pass) => /\d/.test(pass)
    },
    {
        id: 3,
        mensaje: "Debe incluir una mayúscula.",
        validar: (pass) => /[A-Z]/.test(pass)
    },
    {
        id: 4,
        mensaje: "Los numeros deben sumar 10.",
        validar: (pass) => {
        
            const numeros = pass.match(/\d/g);

            if(!numeros) return false;

            const suma = numeros.reduce((acumulado, actual) => {
                return acumulado + numer(actual);
            }, 0)
            return suma === 10;
        }
    }
];

// 2. Función principal//
function comprobar() {
const pass = document.getElementById('password').value;
    const contenedorReglas = document.getElementById('errores');

// Limpiamos el contenedor antes de re-comprobar
contenedorReglas.innerHTML = "";

for (let regla of REGLAS) {
const esValida = regla.validar(pass);

// Creamos el elemento visual para la regla
const div = document.createElement('div');
div.className = esValida ? "regla-valida" : "regla-error";
div.innerText = (esValida ? "✅ " : "❌ ") + regla.mensaje;

contenedorReglas.appendChild(div);

// Lógica del juego: Si una regla falla, dejamos de mostrar las siguientes
if (!esValida) break;
}
}


