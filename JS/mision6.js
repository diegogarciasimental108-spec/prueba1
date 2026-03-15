var videos = [
  {
    titulo:"Video 1: Generalidades",
    link:"https://www.youtube.com/watch?v=lOnlg-MWWho"
  },
  {
    titulo:"Video 2: Clasificación de los tratamientos térmicos",
    link:"https://www.youtube.com/watch?v=dOoh3orqg-Q"
  },
  {
    titulo:"Video 3: Recocido",
    link:"https://www.youtube.com/watch?v=3zrBRe1lBXw"
  },
  {
    titulo:"Video 4: Temple",
    link:"https://www.youtube.com/watch?v=WARKjduWBtY"
  },
  {
    titulo:"Video 5: Revenido",
    link:"https://www.youtube.com/watch?v=4VYVC0Vo-Co"
  },
  {
    titulo:"Video 6: Tratemientos termoquimicos",
    link:"https://www.youtube.com/watch?v=Fdn3oNcel-E"
  }
];

var indice = 0;
var xp = 0;

var titulo = document.getElementById("tituloVideo");
var linkVideo = document.getElementById("linkVideo");
var progreso = document.getElementById("progreso");
var xpHTML = document.getElementById("xp");

var boton = document.getElementById("visto");
var botonAnterior = document.getElementById("anterior");

function cargarVideo() {

  if(indice >= videos.length){

    titulo.innerHTML="⭐ MISIÓN COMPLETADA";
    linkVideo.style.display="none";
    boton.style.display="none";
    botonAnterior.style.display="none";
    progreso.innerHTML="";
    xpHTML.innerHTML="XP TOTAL: "+xp;

    return;

  }

  titulo.innerHTML = videos[indice].titulo;

  linkVideo.href = videos[indice].link;

  progreso.innerHTML = "Video "+(indice+1)+" / "+videos.length;

  xpHTML.innerHTML = "XP: "+xp;

}

boton.onclick = function(){

  xp += 10;
  indice++;

  cargarVideo();

}

botonAnterior.onclick = function(){

  if(indice > 0){

    indice--;
    xp -= 10;

    if(xp < 0){
      xp = 0;
    }

    cargarVideo();

  }

}

cargarVideo();
