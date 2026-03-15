var reloj = document.getElementById("reloj");

var iniciar = document.getElementById("iniciar");
var pausar = document.getElementById("pausar");
var continuar = document.getElementById("continuar");
var terminar = document.getElementById("terminar");

var estado = document.getElementById("estado");

var tiempoEstudio = document.getElementById("tiempoEstudio");
var tiempoDescanso = document.getElementById("tiempoDescanso");

var tiempo = 0;
var temporizador;
var modo = "estudio";

function actualizarReloj(){

var minutos = Math.floor(tiempo / 60);
var segundos = tiempo % 60;

reloj.innerHTML =
String(minutos).padStart(2,"0") + ":" +
String(segundos).padStart(2,"0");

}

function iniciarPomodoro(){

modo = "estudio";

tiempo = tiempoEstudio.value * 60;

estado.innerHTML = "📚 Tiempo de estudio";

temporizador = setInterval(cuentaRegresiva,1000);

actualizarReloj();

}

function cuentaRegresiva(){

tiempo--;

actualizarReloj();

if(tiempo <= 0){

clearInterval(temporizador);

if(modo === "estudio"){

modo = "descanso";

tiempo = tiempoDescanso.value * 60;

estado.innerHTML = "☕ Tiempo de descanso";

temporizador = setInterval(cuentaRegresiva,1000);

}else{

estado.innerHTML = "✅ Sesión terminada";

}

}

}

iniciar.onclick = function(){

clearInterval(temporizador);

iniciarPomodoro();

}

pausar.onclick = function(){

clearInterval(temporizador);

estado.innerHTML = "⏸ Pausado";

}

continuar.onclick = function(){

temporizador = setInterval(cuentaRegresiva,1000);

}

terminar.onclick = function(){

clearInterval(temporizador);

tiempo = 0;

actualizarReloj();

estado.innerHTML = "⛔ Temporizador terminado";

}
