// Seleccionamos los elementos del DOM
const banner = document.getElementById("banner-cookies");
const botonAceptar = document.getElementById("btn-aceptar");
const botonCerrar = document.getElementById("btn-cerrar");

// Nombre con el que guardamos el consentimiento en localStorage
const CLAVE = "cookiesAceptadas";

// Ocultar el banner agregando la clase "oculto"
function ocultarBanner() {
  banner.classList.add("oculto");
}

// 1. Al cargar la página, revisamos si ya aceptó antes
if (localStorage.getItem(CLAVE) === "true") {
  ocultarBanner();
}

// 2. Al hacer clic en aceptar: guardamos el consentimiento y ocultamos el banner
botonAceptar.addEventListener("click", function () {
  localStorage.setItem(CLAVE, "true");
  ocultarBanner();
});

// 3. La X solo cierra el banner (no guarda nada, volverá a salir al recargar)
botonCerrar.addEventListener("click", ocultarBanner);
