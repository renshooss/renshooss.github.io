document.addEventListener('DOMContentLoaded', () => {
  const cartaCerrada = document.getElementById('carta-cerrada');
  const cartaAbierta = document.getElementById('carta-abierta');
  const cancion = document.getElementById('cancion');

  cartaCerrada.addEventListener('click', () => {
    // Oculta la carta inicial y el texto
    document.getElementById('carta-container').style.display = 'none';

    // Muestra la carta abierta
    cartaAbierta.classList.remove('hidden');
    cartaAbierta.style.animation = "aparecer 1.5s forwards";

    // Reproduce la canción
    cancion.play().catch(() => {
      console.warn("El navegador bloqueó la reproducción automática. Haz clic en cualquier parte para activar.");
    });

    // Crea corazones flotantes
    crearCorazones();
  });

  function crearCorazones() {
    const colores = ['#ff6b6b', '#ff8e8e', '#ff4d94', '#ff66b2', '#ff3385'];

    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const corazon = document.createElement('div');
        corazon.innerHTML = '❤️';
        corazon.classList.add('corazon-flotante');
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.fontSize = (Math.random() * 30 + 20) + 'px';
        corazon.style.color = colores[Math.floor(Math.random() * colores.length)];
        corazon.style.animationDuration = (Math.random() * 10 + 5) + 's';
        document.body.appendChild(corazon);

        setTimeout(() => corazon.remove(), 15000);
      }, i * 300);
    }
  }
});
