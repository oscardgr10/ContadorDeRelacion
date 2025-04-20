// Fecha de inicio de la relación (ponla en formato YYYY-MM-DD)
const fechaInicio = new Date('2025-03-11');  // Cambia esta fecha por la fecha que quieras

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  // Calcular el tiempo transcurrido
  const segundos = Math.floor((diferencia / 1000) % 60);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  const años = ahora.getFullYear() - fechaInicio.getFullYear();
  let meses = ahora.getMonth() - fechaInicio.getMonth();
  if (meses < 0) {
    meses += 12;
  }

  // Calcular los días restantes después de calcular los meses y años
  const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24)) % 30;
  const horasRestantes = horas % 24;
  const minutosRestantes = minutos % 60;
  const segundosRestantes = segundos % 60;  // Cálculo de los segundos restantes

  // Actualizar los valores en los elementos correspondientes
  document.getElementById('años').textContent = años;
  document.getElementById('meses').textContent = meses;
  document.getElementById('dias').textContent = diasRestantes;
  document.getElementById('horas').textContent = horasRestantes;
  document.getElementById('minutos').textContent = minutosRestantes;
  document.getElementById('segundos').textContent = segundosRestantes;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

// Llamar a la función una vez para iniciar el contador
actualizarContador();