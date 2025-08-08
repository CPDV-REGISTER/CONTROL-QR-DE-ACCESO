function doPost(e) {
  const sheet = SpreadsheetApp.openById("177yet9Zxhwtz9Dyl1_CzNvBAcJ866WT_y6btWmPXplw").getSheetByName("CONTROL_INGRESO_QR");
  const datos = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), datos.nombre, datos.rut, datos.curso, datos.hora]);
}
