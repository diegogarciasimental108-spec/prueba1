var preguntas = [

{
pregunta:"¿Qué significa HTML?",
opciones:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyperlinks Text Mark Language"
],
correcta:0
},

{
pregunta:"¿Para qué sirve CSS?",
opciones:[
"Estructurar la página",
"Dar estilo a la página",
"Crear bases de datos"
],
correcta:1
},

{
pregunta:"¿Qué lenguaje agrega interactividad?",
opciones:[
"JavaScript",
"HTML",
"CSS"
],
correcta:0
},

{
pregunta:"¿Qué etiqueta se usa para crear un enlace?",
opciones:[
"&lt;a&gt;",
"&lt;link&gt;",
"&lt;href&gt;"
],
correcta:0
},

{
pregunta:"¿Qué propiedad de CSS cambia el color del texto?",
opciones:[
"font-color",
"text-color",
"color"
],
correcta:2
},

{
pregunta:"¿Qué etiqueta crea una imagen?",
opciones:[
"&lt;img&gt;",
"&lt;image&gt;",
"&lt;pic&gt;"
],
correcta:0
},

{
pregunta:"¿Qué significa CSS?",
opciones:[
"Cascading Style Sheets",
"Computer Style Sheets",
"Creative Style System"
],
correcta:0
},

{
pregunta:"¿Qué etiqueta se usa para un título grande?",
opciones:[
"&lt;title&gt;",
"&lt;h1&gt;",
"&lt;header&gt;"
],
correcta:1
},

{
pregunta:"¿Qué propiedad cambia el fondo?",
opciones:[
"background",
"bg-color",
"color-background"
],
correcta:0
},

{
pregunta:"¿Qué lenguaje se ejecuta en el navegador?",
opciones:[
"Python",
"JavaScript",
"Java"
],
correcta:1
}

];

var indice = 0;

/* ELEMENTOS HTML */

var preguntaHTML = document.getElementById("act2");
var opcionesHTML = document.getElementById("act3");
var mensaje = document.getElementById("mensaje");
var progreso = document.getElementById("progreso");

/* PANEL JUGADOR */

let jugador = JSON.parse(localStorage.getItem("jugador"));

var corazones = document.getElementById("vidaCorazones");
var xpBarra = document.getElementById("xpBarra");
var xpTexto = document.getElementById("xpTexto");
var nivelHTML = document.getElementById("nivel");
var claseHTML = document.getElementById("clase");


/* MOSTRAR VIDA */

function mostrarVida(){

let corazonesLlenos = Math.floor(jugador.vida / 20);

let texto = "";

for(let i=0;i<5;i++){

if(i < corazonesLlenos){
texto += "❤️";
}else{
texto += "🤍";
}

}

corazones.innerHTML = texto;

}


/* MOSTRAR XP */

function mostrarXP(){

xpTexto.innerHTML = jugador.xp + " / 100";

xpBarra.style.width = jugador.xp + "%";

nivelHTML.innerHTML = jugador.nivel;

claseHTML.innerHTML = jugador.clase;

}


/* MOSTRAR PREGUNTA */

function mostrarPregunta(){

if(indice >= preguntas.length){

preguntaHTML.innerHTML="⭐ MISIÓN COMPLETADA";
opcionesHTML.innerHTML="";
mensaje.innerHTML="";

return;

}

var actual = preguntas[indice];

preguntaHTML.innerHTML = actual.pregunta;

progreso.innerHTML = "Pregunta "+(indice+1)+" / "+preguntas.length;

opcionesHTML.innerHTML="";

for(var i=0;i<actual.opciones.length;i++){

var boton = document.createElement("button");

boton.innerHTML = actual.opciones[i];

boton.className="opcion";

boton.onclick = function(){
verificarRespuesta(this);
};

opcionesHTML.appendChild(boton);

}

}


/* VERIFICAR RESPUESTA */

function verificarRespuesta(boton){

var actual = preguntas[indice];

var respuesta = boton.innerHTML;

if(respuesta == actual.opciones[actual.correcta]){

boton.classList.add("correcta");

mensaje.innerHTML="✔ Correcto +10 XP";

/* SUMAR XP */

jugador.xp +=10;


/* SUBIR NIVEL */

if(jugador.xp >= 100){

jugador.nivel++;
jugador.xp = 0;

/* ACTUALIZAR CLASE */

jugador = actualizarClase(jugador);

mensaje.innerHTML="🎉 SUBISTE DE NIVEL | Nueva clase: "+jugador.clase;

}

localStorage.setItem("jugador", JSON.stringify(jugador));

mostrarXP();

}else{

boton.classList.add("incorrecta");

mensaje.innerHTML="❌ Incorrecto -5 vida";

/* QUITAR VIDA */

jugador.vida -=5;

if(jugador.vida < 0){
jugador.vida = 0;
}

/* SI MUERE */

if(jugador.vida == 0){

mensaje.innerHTML="💀 Has muerto. XP reiniciada";

jugador.xp = 0;
jugador.vida = 100;

localStorage.setItem("jugador", JSON.stringify(jugador));

mostrarVida();
mostrarXP();

setTimeout(function(){
location.reload();
},2000);

return;

}

localStorage.setItem("jugador", JSON.stringify(jugador));

mostrarVida();

}

/* SIGUIENTE PREGUNTA */

setTimeout(function(){

indice++;

mostrarPregunta();

mensaje.innerHTML="";

},1000);

}


/* INICIAR */

mostrarVida();
mostrarXP();
mostrarPregunta();