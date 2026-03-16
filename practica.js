// JUEGO DE ADIVINAR NÚMERO
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 10;
let intentosusados = 1;

function comprobar() {
    let datoUsuario = document.getElementById("entradaUsuario").value;
    let mensaje = document.getElementById("mensaje");

    if (intentos > 0) {
        if (datoUsuario == numeroSecreto) {
            mensaje.innerText = "🎉 ¡Felicidades! Has acertado. Solo necesitaste: " + intentosusados + " Intentos";
            mensaje.style.color = "#48bb78";
        } else {
            intentos = intentos - 1;
            intentosusados = intentosusados + 1;

            if (intentos === 0) {
                mensaje.innerText = "😔 Game Over. El número era " + numeroSecreto;
                mensaje.style.color = "#f56565";
            } else if (datoUsuario > numeroSecreto) {
                mensaje.innerText = "⬇️ Muy alto. Te quedan " + intentos + " intentos.";
                mensaje.style.color = "#ed8936";
            } else {
                mensaje.innerText = "⬆️ Muy bajo. Te quedan " + intentos + " intentos.";
                mensaje.style.color = "#ed8936";
            }
        }
    } else {
        mensaje.innerText = "Ya no te quedan intentos. Recarga para jugar otra vez.";
    }
}

// CALCULADORA
function sumar() {
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let resultadoPantalla = document.getElementById("suma");
    let suma = numero1 + numero2;
    resultadoPantalla.innerText = "✅ El resultado es: " + suma;
    resultadoPantalla.style.color = "#48bb78";
}

function restar() {
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let resultadoPantalla = document.getElementById("suma");
    let resta = numero1 - numero2;
    resultadoPantalla.innerText = "✅ El resultado es: " + resta;
    resultadoPantalla.style.color = "#48bb78";
}

function multiplicar() {
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let resultadoPantalla = document.getElementById("suma");
    let multiplicacion = numero1 * numero2;
    resultadoPantalla.innerText = "✅ El resultado es: " + multiplicacion;
    resultadoPantalla.style.color = "#48bb78";
}

function dividir() {
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let resultadoPantalla = document.getElementById("suma");

    if (numero2 === 0) {
        resultadoPantalla.innerText = "❌ No se puede dividir por cero";
        resultadoPantalla.style.color = "#f56565";
        return;
    }

    let division = numero1 / numero2;
    resultadoPantalla.innerText = "✅ El resultado es: " + division.toFixed(2);
    resultadoPantalla.style.color = "#48bb78";
}

// JUEGO DE MEMORIA (SIMON)
let gameSequence = [];
let userSequence = [];
let level = 0;
let score = 0;
const colors = ['red', 'green', 'blue', 'yellow'];

function startGame() {
    gameSequence = [];
    userSequence = [];
    level = 0;
    score = 0;
    document.getElementById('score').innerText = 'Puntuación: 0';
    nextStep();
}

function nextStep() {
    userSequence = [];
    level++;
    score = (level - 1) * 10;
    document.getElementById('score').innerText = 'Puntuación: ' + score;
    const randomColor = colors[Math.floor(Math.random() * 4)];
    gameSequence.push(randomColor);
    playSequence();
}

function playSequence() {
    let i = 0;
    const interval = setInterval(() => {
        if (i < gameSequence.length) {
            flashButton(gameSequence[i]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 600);
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
        alert("¡Perdiste! Tu puntuación final: " + score);
        startGame();
    }
}

// VERIFICADOR DE CONTRASEÑA
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const passwordMessage = document.getElementById('passwordMessage');

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(passwordInput);
    const hasLowerCase = /[a-z]/.test(passwordInput);
    const hasNumber = /[0-9]/.test(passwordInput);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput);

    if (passwordInput.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
        passwordMessage.innerText = "🔒 Contraseña segura";
        passwordMessage.style.color = "#48bb78";
    } else {
        passwordMessage.innerText = "⚠️ Contraseña insegura. Debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
        passwordMessage.style.color = "#f56565";
    }
}

// GENERADOR DE NOMBRE DE USUARIO
function generateUsername() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const usernameDisplay = document.getElementById('username');

    if (firstName === '' || lastName === '') {
        usernameDisplay.innerText = "⚠️ Por favor, ingresa tanto el nombre como el apellido.";
        usernameDisplay.style.color = "#f56565";
        return;
    }

    const randomNum = Math.floor(Math.random() * 1000);
    const username = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomNum}`;

    usernameDisplay.innerText = `✅ Nombre de usuario generado: ${username}`;
    usernameDisplay.style.color = "#48bb78";
}

// CALCULADORA DE IMC
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmiResult = document.getElementById('bmiResult');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        bmiResult.innerText = "⚠️ Por favor, ingresa valores válidos para peso y altura.";
        bmiResult.style.color = "#f56565";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";
    let emoji = "";

    if (bmi < 18.5) {
        category = "Bajo peso";
        emoji = "📉";
    } else if (bmi < 24.9) {
        category = "Peso normal";
        emoji = "✅";
    } else if (bmi < 29.9) {
        category = "Sobrepeso";
        emoji = "⚠️";
    } else {
        category = "Obesidad";
        emoji = "🔴";
    }

    bmiResult.innerText = `${emoji} Tu IMC es ${bmi.toFixed(2)} (${category})`;
    bmiResult.style.color = "#48bb78";
}

// DEV CLICKER
let clickCount = 0;
let clickValue = 1;
let multiplierCost = 50;
let autoclickerCost = 200;
let hasAutoClicker = false;

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
        document.getElementById('multiplierStatus').innerText = '⚡ Poder de Clic: x' + clickValue;
        document.getElementById('btnMultiplier').innerHTML = '<p>⚡ Doble Clics<br><span class="cost">Costo: ' + multiplierCost + ' clics</span></p>';
        document.getElementById('multiplierStatus').style.color = "#48bb78";
    } else {
        document.getElementById('multiplierStatus').innerText = '❌ No tienes suficientes clics para comprar el poder X2.';
        document.getElementById('multiplierStatus').style.color = "#f56565";
    }
}

function buyAutoClickerPlugin() {
    if (clickCount >= autoclickerCost && !hasAutoClicker) {
        clickCount -= autoclickerCost;
        hasAutoClicker = true;

        setInterval(incrementClicks, 1000);
        document.getElementById('clickCount').innerText = 'Clics: ' + clickCount;
        document.getElementById('autoClickerStatus').innerText = '🤖 Autoclicker activado';
        document.getElementById('btnAutoClicker').disabled = true;
        document.getElementById('btnAutoClicker').style.opacity = '0.5';
        document.getElementById('autoClickerStatus').style.color = "#48bb78";
    } else if (hasAutoClicker) {
        document.getElementById('autoClickerStatus').innerText = '✅ Ya tienes el autoclicker activo';
        document.getElementById('autoClickerStatus').style.color = "#48bb78";
    } else {
        document.getElementById('autoClickerStatus').innerText = '❌ No tienes suficientes clics para comprar el autoclicker.';
        document.getElementById('autoClickerStatus').style.color = "#f56565";
    }
}

function resetClicks() {
    clickCount = 0;
    clickValue = 1;
    multiplierCost = 50;
    autoclickerCost = 200;
    hasAutoClicker = false;

    document.getElementById('clickCount').innerText = 'Clics: 0';
    document.getElementById('multiplierStatus').innerText = '';
    document.getElementById('autoClickerStatus').innerText = '';
    document.getElementById('btnMultiplier').innerHTML = '<p>⚡ Doble Clics<br><span class="cost">Costo: 50 clics</span></p>';
    document.getElementById('btnAutoClicker').innerHTML = '<p>🤖 Autoclicker<br><span class="cost">Costo: 200 clics</span></p>';
    document.getElementById('btnAutoClicker').disabled = false;
    document.getElementById('btnAutoClicker').style.opacity = '1';

}

// CONVERTIDOR DE TEMPERATURA
function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsiusInput').value;
    const fahrenheitOutput = document.getElementById('fahrenheitOutput');
    const celsius = parseFloat(celsiusInput);

    if (isNaN(celsius)) {
        fahrenheitOutput.innerText = "⚠️ Por favor, ingresa un valor numérico válido.";
        fahrenheitOutput.style.color = "#f56565";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitOutput.innerText = `🌡️ Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    fahrenheitOutput.style.color = "#48bb78";
}

// VERIFICADOR DE PALÍNDROMOS
function checkPalindrome() {
    const inputString = document.getElementById('palindromeInput').value;
    const palindromeResult = document.getElementById('palindromeResult');
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');

    if (cleanedString === reversedString && cleanedString.length > 0) {
        palindromeResult.innerText = `✅ "${inputString}" es un palíndromo.`;
        palindromeResult.style.color = "#48bb78";
    } else if (cleanedString.length === 0) {
        palindromeResult.innerText = "⚠️ Por favor, ingresa una palabra o frase.";
        palindromeResult.style.color = "#f56565";
    } else {
        palindromeResult.innerText = `❌ "${inputString}" no es un palíndromo.`;
        palindromeResult.style.color = "#f56565";
    }
}

// JUEGO DE PREGUNTAS
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
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Leonardo da Vinci", "Miguel Ángel", "Rafael", "Donatello"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Júpiter", "Saturno", "Neptuno", "Urano"],
        correctAnswer: "Júpiter"
    }
];

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionObj = questions[currentQuestionIndex];
        document.getElementById('quizQuestion').innerText = `Pregunta ${currentQuestionIndex + 1}/${questions.length}: ${questionObj.question}`;
        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = '';

        questionObj.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.onclick = () => checkAnswerQuiz(option);
            optionsContainer.appendChild(button);
        });
    }
}

function checkAnswerQuiz(selectedOption) {
    const questionObj = questions[currentQuestionIndex];
    if (selectedOption === questionObj.correctAnswer) {
        scoreQuiz++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 300);
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const percentage = (scoreQuiz / questions.length) * 100;
    let emoji = "";

    if (percentage >= 80) emoji = "🏆";
    else if (percentage >= 60) emoji = "👍";
    else if (percentage >= 40) emoji = "😐";
    else emoji = "😔";

    document.getElementById('quizQuestion').innerText = `${emoji} ¡Quiz completado!`;
    document.getElementById('quizOptions').innerHTML = `
        <div style="background: rgba(0,0,0,0.05); padding: 1.5rem; border-radius: 12px; margin-top: 1rem;">
            <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">
                Tu puntuación: ${scoreQuiz} de ${questions.length}
            </p>
            <p style="font-size: 1rem;">
                ${percentage.toFixed(0)}% de aciertos
            </p>
            <button onclick="resetQuiz()" style="margin-top: 1rem;">Jugar de nuevo</button>
        </div>
    `;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    scoreQuiz = 0;
    loadQuestion();
}

// DADO DE LA SUERTE
const dadoCaras = [
    { imagen: "SRC/1Dado.png", numero: 1 },
    { imagen: "SRC/2Dado.png", numero: 2 },
    { imagen: "SRC/3Dado.png", numero: 3 },
    { imagen: "SRC/4Dado.png", numero: 4 },
    { imagen: "SRC/5Dado.png", numero: 5 },
    { imagen: "SRC/6Dado.png", numero: 6 }
];

function Num_dado() {
    const random = Math.floor(Math.random() * dadoCaras.length);
    const cara = dadoCaras[random];
    document.getElementById("diceResult").innerHTML = `
        <img src="${cara.imagen}" alt="Dado ${cara.numero}" width="120" height="120" style="margin-top: 1rem;">
        <p style="font-size: 1.5rem; font-weight: 700; margin-top: 1rem; color: var(--texto-h1);">
            🎲 Número: ${cara.numero}
        </p>
    `;
}

// MODO OSCURO
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Modo Claro';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️ Modo Claro';
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙 Modo Oscuro';
    }
});

// SUDOKU
const board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const gridElement = document.getElementById('grid');

function createGrid() {
    gridElement.innerHTML = '';
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('input');
            cell.classList.add('cell');
            cell.type = 'number';
            cell.min = '1';
            cell.max = '9';

            cell.dataset.row = row;
            cell.dataset.col = col;

            if (board[row][col] !== 0) {
                cell.value = board[row][col];
                cell.readOnly = true;
            }

            gridElement.appendChild(cell);
        }
    }
}

function checkResult() {
    const cells = document.querySelectorAll('.cell');
    let isCorrect = true;
    let isComplete = true;

    cells.forEach(cell => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        const value = parseInt(cell.value);

        if (!value) {
            isComplete = false;
            return;
        }

        if (value !== solution[row][col]) {
            isCorrect = false;
            cell.style.background = '#fed7d7';
        } else {
            cell.style.background = cell.readOnly ? '#e2e8f0' : 'white';
        }
    });

    if (!isComplete) {
        alert('⚠️ Por favor, completa todos los campos antes de verificar.');
    } else if (isCorrect) {
        alert('🎉 ¡Felicidades! Has completado el Sudoku correctamente.');
    } else {
        alert('❌ Hay algunos errores. Los campos incorrectos están marcados en rojo.');
    }
}

// Inicializar el grid al cargar la página
if (gridElement) {
    createGrid();
}

// Inicializar el quiz al cargar la página
window.onload = function () {
    loadQuestion();
    if (gridElement) {
        createGrid();
    }
};

function cambiarimagen(){
    let imagen = document.getElementById("clickerImage2");
    imagen.src = imagen.src.includes("src/Corazon.jpg") ? "src/Galleta (2).png" : "src/Corazon.jpg";
}