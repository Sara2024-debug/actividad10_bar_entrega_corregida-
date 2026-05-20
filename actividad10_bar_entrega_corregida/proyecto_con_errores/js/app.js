// Archivo corregido para la actividad "Caza errores".

const nombreBar = "Origen Bar de Autor";

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

function reservarMesa() {
  const reservas = document.getElementById("reservas");
  reservas.scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById("reservationForm");
const mensaje = document.getElementById("mensajeReserva");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const personas = Number(document.getElementById("personas").value);
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const zona = document.getElementById("zona").value;

  if (nombre.length < 3) {
    mensaje.textContent = "Escribe un nombre válido.";
    mensaje.className = "form-message error";
    return;
  }

  if (!/^3\d{9}$/.test(telefono)) {
    mensaje.textContent = "El teléfono debe iniciar por 3 y tener 10 dígitos.";
    mensaje.className = "form-message error";
    return;
  }

  if (personas < 1 || personas > 8) {
    mensaje.textContent = "Solo aceptamos reservas entre 1 y 8 personas.";
    mensaje.className = "form-message error";
    return;
  }

  if (!fecha || !hora || !zona) {
    mensaje.textContent = "Selecciona fecha, hora y zona preferida para la reserva.";
    mensaje.className = "form-message error";
    return;
  }

  mensaje.textContent =
    `Reserva registrada para ${nombre}. Zona: ${zona}. Hora: ${hora}. Te contactaremos al ${telefono}.`;

  mensaje.className = "form-message success";
  form.reset();
});