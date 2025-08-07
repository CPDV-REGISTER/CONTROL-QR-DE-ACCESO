const SHEET_ID = "TU_ID_DE_HOJA";
const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
let registros = [];
fetch(URL)
  .then(res => res.text())
  .then(text => {
    const json = JSON.parse(text.substr(47).slice(0, -2));
    const rows = json.table.rows;
    registros = rows.map(r => r.c.map(c => c?.v || ""));
    mostrarDatos(registros);
  });
function mostrarDatos(data) {
  const tbody = document.getElementById("datos");
  tbody.innerHTML = "";
  data.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}
document.getElementById("buscar").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = registros.filter(row =>
    row.some(col => col.toLowerCase().includes(texto))
  );
  mostrarDatos(filtrados);
});
function descargarExcel() {
  let csv = "Fecha Registro,Nombre,RUT,Curso,Hora Escaneo\n";
  registros.forEach(row => { csv += row.join(",") + "\n"; });
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "registros.csv";
  link.click();
}