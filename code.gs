function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.phone,
    data.email,
    data.message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({
      status: "success",
      message: "Data saved successfully"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
