function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws  = ss.getSheetByName("Customers")
  return ws.getRange(2,1,ws.getLastRow()-1, 3).getValues()
}


function deleteById(id){
  // const id = "3";
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("Customers")

  // Get all the ids and convert them from 2D array to 1D array by mapping
  const custIds = ws.getRange(2,1,ws.getLastRow()-1, 1).getValues().map(r=> r[0].toString().toLocaleLowerCase())

  const posIndex = custIds.indexOf(id.toString().toLocaleLowerCase())
  const rowNumber = posIndex === -1 ? 0 : posIndex+2;
  ws.deleteRow(rowNumber)
}