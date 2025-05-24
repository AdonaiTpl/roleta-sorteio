const canvas = document.getElementById('roletaCanvas');
const ctx = canvas.getContext('2d');
const girarBtn = document.getElementById('girarBtn');

let premios = JSON.parse(localStorage.getItem('premiosRestantes')) || [
  'Flyer',
  'Logo',
  'Post Instagram',
  'Cartão de visita',
  'Arte surpresa'
];

if (premios.length === 0) {
  girarBtn.disabled = true;
  girarBtn.innerText = "Campanha Encerrada";
}

function desenharRoleta() {
  const total = premios.length;
  const anguloPorSetor = (2 * Math.PI) / total;

  premios.forEach((premio, i) => {
    let start = i * anguloPorSetor;
    let end = start + anguloPorSetor;

    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 250, start, end);
    ctx.fillStyle = `hsl(${i * 60}, 70%, 60%)`;
    ctx.fill();
    ctx.stroke();

    // Texto
    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(start + anguloPorSetor / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.fillText(premio, 230, 10);
    ctx.restore();
  });
}

desenharRoleta();

function girarRoleta() {
  const premioIndex = Math.floor(Math.random() * premios.length);
  const premio = premios[premioIndex];

  alert("Parabéns! Você ganhou: " + premio);

  premios.splice(premioIndex, 1);
  localStorage.setItem('premiosRestantes', JSON.stringify(premios));

  if (premios.length === 0) {
    girarBtn.disabled = true;
    girarBtn.innerText = "Campanha Encerrada";
  }

  ctx.clearRect(0, 0, 500, 500);
  desenharRoleta();
}

girarBtn.addEventListener('click', girarRoleta);
