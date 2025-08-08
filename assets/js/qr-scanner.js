function registrarIngreso(datos) {
  fetch("https://script.google.com/macros/s/AKfycbzRFJFGkHsXcN_VeenheV_h-j4HGll9J3oXXI-5ZjnGCGhfu0N3rvU3nlVDbdzNLJ7y/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
}
function validarYRegistrar(decodedText) {
  try {
    const data = JSON.parse(decodedText);
    const ahora = new Date();
    const expiracion = new Date(data.expiracion);
    if (ahora > expiracion) {
      document.getElementById("resultado").innerText = "Código QR expirado.";
      return;
    }
    registrarIngreso({
      nombre: data.nombre,
      rut: data.rut,
      curso: data.curso,
      hora: ahora.toISOString(),
    });
    document.getElementById("resultado").innerText = "Ingreso registrado correctamente.";
  } catch (e) {
    document.getElementById("resultado").innerText = "QR inválido.";
  }
}
new Html5Qrcode("reader").start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 250 },
  validarYRegistrar
);
