
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