function doPost(e) {
  const sheet = SpreadsheetApp.openById("TU_ID_DE_HOJA").getSheetByName("Registros");
  const datos = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), datos.nombre, datos.rut, datos.curso, datos.hora]);
}