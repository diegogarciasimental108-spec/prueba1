var tarjetas = [
{
pregunta:"¿Qué es HTML?",
respuesta:"Es el lenguaje que estructura las páginas web."
},
{
pregunta:"¿Qué es CSS?",
respuesta:"Es el lenguaje que define el estilo visual de la página."
},
{
pregunta:"¿Qué es JavaScript?",
respuesta:"Es un lenguaje que agrega interactividad a las páginas web."
},
{
pregunta:"¿Qué es una etiqueta HTML?",
respuesta:"Es un elemento que define la estructura del contenido."
}
];

var indice = 0;

var tarjeta = document.getElementById("tarjeta");
var act2 = document.getElementById("act2");
var respuesta = document.getElementById("act3");

var botonMal = document.getElementById("mal");
var botonBien = document.getElementById("bien");

var contador = document.getElementById("contador");
var mensaje = document.getElementById("mensaje");


function mostrarTarjeta(){

if(tarjetas.length == 0){

/* CARGAR JUGADOR */

let jugador = JSON.parse(localStorage.getItem("jugador"));

/* SUMAR XP */

jugador.xp = jugador.xp + 30;


/* SUBIR NIVEL */

if(jugador.xp >= 100){

jugador.nivel = jugador.nivel + 1;
jugador.xp = 0;

/* ACTUALIZAR CLASE */

jugador = actualizarClase(jugador);

mensaje.innerHTML =
"🎉 SUBISTE DE NIVEL | Nueva clase: " + jugador.clase;

}else{

mensaje.innerHTML = "⭐ MISIÓN COMPLETADA +30 XP";

}


/* GUARDAR JUGADOR */

localStorage.setItem("jugador", JSON.stringify(jugador));

tarjeta.style.display="none";

return;

}

act2.innerHTML = tarjetas[indice].pregunta;
respuesta.innerHTML = tarjetas[indice].respuesta;

contador.innerHTML = "Tarjetas restantes: " + tarjetas.length;

tarjeta.classList.remove("voltear");

}


/* VOLTEAR TARJETA */

tarjeta.onclick = function(){

tarjeta.classList.toggle("voltear");

};


/* TARJETA MAL → SE REPITE */

botonMal.onclick = function(){

var repetir = tarjetas.shift();

tarjetas.push(repetir);

mostrarTarjeta();

};


/* TARJETA BIEN → SE ELIMINA */

botonBien.onclick = function(){

tarjetas.shift();

mostrarTarjeta();

};


/* INICIAR */

mostrarTarjeta();