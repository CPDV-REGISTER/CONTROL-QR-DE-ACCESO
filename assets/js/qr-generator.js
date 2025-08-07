document.getElementById("qrForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const rut = document.getElementById("rut").value;
  const curso = document.getElementById("curso").value;
  const expiracion = new Date(Date.now() + 4 * 60 * 60 * 1000);
  const datos = { nombre, rut, curso, expiracion: expiracion.toISOString() };
  const qrData = JSON.stringify(datos);
  QRCode.toCanvas(document.createElement("canvas"), qrData, { width: 256 }, function (err, canvas) {
    if (err) return console.error(err);
    const qrContainer = document.getElementById("qrCode");
    qrContainer.innerHTML = "";
    qrContainer.appendChild(canvas);
  });
});