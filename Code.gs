const SPREADSHEET_ID = 'GANTI_DENGAN_ID_GOOGLE_SHEET';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Hasil') || SpreadsheetApp.openById(SPREADSHEET_ID).insertSheet('Hasil');
    if (sheet.getLastRow() === 0) sheet.appendRow(['Waktu','Nama','Kelas','Benar','Salah','Nilai']);
    sheet.appendRow([new Date(), data.nama || '', data.kelas || '', Number(data.benar || 0), Number(data.salah || 0), Number(data.nilai || 0)]);
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('UTS FIQIH - endpoint aktif').setMimeType(ContentService.MimeType.TEXT);
}