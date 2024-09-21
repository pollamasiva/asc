// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No te tardaste para robarme el corazón", time: 11 },
  { text: "Eres diferente a todas, no hay comparación", time: 17 },
  { text: "Te compré todas las flores pa' que ningún Wey", time: 22 },
  { text: "Tenga la chanza para quedar bien contigo", time: 26 },
  { text: "Sé que suena un poco loco, pero es lo que es", time: 32 },
  { text: "De ti en verguiza yo me enamoré, lo admito", time: 35 },
  { text: "Lo que quieras, mija, te lo doy", time: 39 },
  { text: "Por ti yo me gasto un billetón, porque vales un chingo", time: 43 },
  { text: "Y desde que te vi dije que estás pa' mí", time: 47 },
  { text: "‘Tás bien chula y sabes lo que traes", time: 51 },
  { text: "Siendo tú quién no se va a clavar", time: 55 },
  { text: "Ya te me hiciste vicio", time: 59 },
  { text: "Y te lo digo así, yo no me voy de aquí", time: 63 },
  { text: "Sé que suena un poco loco, pero es lo que es", time: 67 },
  { text: "De ti en verguiza yo me enamoré, lo admito", time: 71 },
  { text: "Lo que quieras, mija, te lo doy", time: 75 },
  { text: "Por ti yo me gasto un billetón, porque vales un chingo", time: 79 },
  { text: "Y desde que te vi dije que estás pa' mí", time: 83 },
  { text: "‘Tás bien chula y sabes lo que traes", time: 87 },
  { text: "Siendo tú quién no se va a clavar", time: 91 },
  { text: "Ya te me hiciste vicio", time: 95 },
  { text: "Y te lo digo así, yo no me voy de aquí", time: 99 }
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);