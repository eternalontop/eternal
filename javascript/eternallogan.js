const subtitles = [
    "Touching Eternity.",
    "Dios es y será el mismo de siempre.",
    "Jeremias 17:5",
    "Ella no era así, ella no era así, no sé quién la daño",
    "Show No Mercy. Thats snm.",
    "Fantasize me. Jumping planets immortalize."
];

const choosen = subtitles[Math.floor(Math.random() * subtitles.length)];
const element = document.getElementById("subtitles");

let index = 0;

function typeWriter() {
    if (index < choosen.length) {
        element.textContent += choosen.charAt(index);
        index++;
        setTimeout(typeWriter, 60); 
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);
