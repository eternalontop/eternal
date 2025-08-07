document.addEventListener('DOMContentLoaded', () => {
  const quoteElement = document.querySelector('.quote-text');
  const sourceElement = document.querySelector('.quote-source');

const bibleQuotes = [
  {
    texto: "El Señor es mi pastor; nada me faltará.",
    referencia: "Salmo 23:1"
  },
  {
    texto: "Todo lo puedo en Cristo que me fortalece.",
    referencia: "Filipenses 4:13"
  },
  {
    texto: "Porque yo sé los planes que tengo para vosotros, dice Jehová, planes de bienestar y no de mal, para daros un futuro y una esperanza.",
    referencia: "Jeremías 29:11"
  },
  {
    texto: "Amarás a tu prójimo como a ti mismo.",
    referencia: "Mateo 22:39"
  },
  {
    texto: "Bienaventurados los que lloran, porque ellos recibirán consolación.",
    referencia: "Mateo 5:4"
  },
  {
    texto: "La fe es la certeza de lo que se espera, la convicción de lo que no se ve.",
    referencia: "Hebreos 11:1"
  },
  {
    texto: "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso.",
    referencia: "1 Corintios 13:4"
  },
  {
    texto: "Clama a mí y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",
    referencia: "Jeremías 33:3"
  },
  {
    texto: "Jehová es mi luz y mi salvación; ¿a quién temeré?",
    referencia: "Salmo 27:1"
  },
  {
    texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo.",
    referencia: "Isaías 41:10"
  }
];

  const randomQuote = bibleQuotes[Math.floor(Math.random() * bibleQuotes.length)];

  quoteElement.textContent = `"${randomQuote.texto}"`;
  sourceElement.textContent = `— ${randomQuote.referencia}`;
});
