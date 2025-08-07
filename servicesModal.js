const servicesData = {
  webdev: {
    title: "Desarrollo Web",
    img: "images/webdev.png",
    desc: "Diseño y desarrollo de páginas web modernas, responsivas y optimizadas.",
    cond: [
      "Entrega de código fuente.",
      "Soporte por 1 mes.",
      "No incluye hosting."
    ],
    time: [
      { icon: "fa-calendar-day", label: "Días", value: "2-7 días" }
    ],
    pay: [
      { icon: "fa-dollar-sign", label: "Costo base", value: "$50 USD" }
    ],
    exampleImg: "images/web_example.png",
    video: "videos/web_demo.mp4"
  },
  uiux: {
    title: "Diseño UI/UX",
    img: "images/uiux.png",
    desc: "Interfaces atractivas y experiencia de usuario intuitiva para tus proyectos.",
    cond: [
      "Incluye 2 revisiones.",
      "Entrega en formato Figma o PNG.",
      "No incluye desarrollo."
    ],
    time: [
      { icon: "fa-calendar-day", label: "Días", value: "1-3 días" }
    ],
    pay: [
      { icon: "fa-dollar-sign", label: "Costo base", value: "$30 USD" }
    ],
    exampleImg: "images/uiux_example.png",
    video: "videos/uiux_demo.mp4"
  },
  automation: {
    title: "Automatización",
    img: "images/automation.png",
    desc: "Scripts y herramientas para automatizar tareas y mejorar tu flujo de trabajo.",
    cond: [
      "Soporte para Windows y Linux.",
      "No se automatizan tareas ilegales.",
      "Incluye documentación básica."
    ],
    time: [
      { icon: "fa-clock", label: "Horas", value: "6-24h" }
    ],
    pay: [
      { icon: "fa-dollar-sign", label: "Costo base", value: "$20 USD" }
    ],
    exampleImg: "images/automation_example.png",
    video: "videos/automation_demo.mp4"
  },
  discord: {
    title: "Discord Javascript & Python",
    img: "images/dcpreview.png",
    desc: "Bots personalizados para Discord usando JavaScript y Python. Automatiza, modera y potencia tu comunidad con comandos, eventos y sistemas únicos.",
    cond: [
      "No se permite contenido NSFW ni ilegal.",
      "Debes tener permisos de administrador en el servidor.",
      "Soporte limitado a 1 mes tras la entrega.",
      "El código fuente se entrega solo si se acuerda."
    ],
    time: [
      { icon: "fa-clock", label: "Horas", value: "6-24h" },
      { icon: "fa-calendar-day", label: "Días", value: "1-3 días" },
      { icon: "fa-calendar-week", label: "Semanas", value: "1 semana (proyectos grandes)" }
    ],
    pay: [
      { icon: "fa-dollar-sign", label: "Costo base", value: "$35 USD" },
      { icon: "fa-credit-card", label: "Métodos", value: "PayPal, Binance, MercadoPago" },
      { icon: "fa-gift", label: "Descuentos", value: "Por proyectos recurrentes" }
    ],
    exampleImg: "services_media/botexample.png",
    video: "videos/discordbot_demo.mp4"
  }
};

function openServiceModal(serviceKey) {
  const data = servicesData[serviceKey];
  if (!data) return;
  document.getElementById('service-modal-title').textContent = data.title;
  document.getElementById('service-modal-img').src = data.img;
  document.getElementById('service-modal-desc').textContent = data.desc;

  // Condiciones
  const condUl = document.getElementById('service-modal-cond');
  condUl.innerHTML = "";
  data.cond.forEach(c => {
    condUl.innerHTML += `<li><i class="fas fa-check-circle" style="color:#8a2be2"></i> ${c}</li>`;
  });

  // Tiempo
  const timeDiv = document.getElementById('service-modal-time');
  timeDiv.innerHTML = data.time.map(t =>
    `<span class="service-modal-time-item"><i class="fas ${t.icon}"></i> <b>${t.label}:</b> ${t.value}</span>`
  ).join("<br>");

  // Pagos
  const payDiv = document.getElementById('service-modal-pay');
  payDiv.innerHTML = data.pay.map(p =>
    `<span class="service-modal-pay-item"><i class="fas ${p.icon}"></i> <b>${p.label}:</b> ${p.value}</span>`
  ).join("<br>");

  // Imagen y video
  document.getElementById('service-modal-example-img').src = data.exampleImg;
  const video = document.getElementById('service-modal-video');
  video.querySelector('source').src = data.video;
  video.load();

  document.getElementById('service-modal').classList.add('open');
  document.body.style.overflow = "hidden";
}

function closeServiceModal() {
  document.getElementById('service-modal').classList.remove('open');
  document.body.style.overflow = "";
}

// Eventos
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-service');
    if (key) openServiceModal(key);
  });
});
document.getElementById('close-service-modal').addEventListener('click', closeServiceModal);
document.getElementById('service-modal').addEventListener('click', e => {
  if (e.target.id === 'service-modal') closeServiceModal();
});

// Ampliar imagen de ejemplo
const enlargeBtn = document.getElementById('enlarge-img-btn');
const imgModal = document.getElementById('img-enlarge-modal');
const imgEnlarge = document.getElementById('img-enlarge-src');
const closeImgEnlarge = document.getElementById('close-img-enlarge');
const exampleImg = document.getElementById('service-modal-example-img');

enlargeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  imgEnlarge.src = exampleImg.src;
  imgModal.classList.add('open');
  document.body.style.overflow = "hidden";
});
closeImgEnlarge.addEventListener('click', () => {
  imgModal.classList.remove('open');
  document.body.style.overflow = "";
});