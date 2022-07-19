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


function getCustomerById(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("Customers")

  // Get all the ids and convert them from 2D array to 1D array by mapping
  const custIds = ws.getRange(2,1,ws.getLastRow()-1, 1).getValues().map(r=> r[0].toString().toLocaleLowerCase())

  const posIndex = custIds.indexOf(id.toString().toLocaleLowerCase())
  const rowNumber = posIndex === -1 ? 0 : posIndex+2;
  const customerInfo = ws.getRange(rowNumber, 1, 1, 4).getValues()[0] // [[3, "Khanya", "Meyiswa"]] --> [3, "Khanya", "Meyiswa"]
  return {
    custID: customerInfo[0], 
    firstName: customerInfo[1], 
    lastName: customerInfo[2],
    phoneNumber: customerInfo[3]
    }

}


function editCustomerById(id, customerInfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("Customers")

  // Get all the ids and convert them from 2D array to 1D array by mapping
  const custIds = ws.getRange(2,1,ws.getLastRow()-1, 1).getValues().map(r=> r[0].toString().toLocaleLowerCase())

  const posIndex = custIds.indexOf(id.toString().toLocaleLowerCase())
  const rowNumber = posIndex === -1 ? 0 : posIndex+2;

  ws.getRange(rowNumber, 2, 1, 3).setValues([[
                                                customerInfo.firstName,
                                                customerInfo.lastName,
                                                customerInfo.phoneNumber
  ]])

}










