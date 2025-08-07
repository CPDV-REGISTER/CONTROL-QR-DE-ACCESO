function doPost(e) {
  const sheet = SpreadsheetApp.openById("AKfycbwuPU2hFdHHiSm7vyt0Ru2zYnXRDQYHMgajaoHGFkcdKE0vcWv8br2CL0hrt7kWz8XV").getSheetByName("Registros");
  const datos = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), datos.nombre, datos.rut, datos.curso, datos.hora]);
}
