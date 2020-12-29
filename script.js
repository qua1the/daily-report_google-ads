function main() {
  
 exportReportToSpreadsheet();
  
}

function getDate(){
  
  var date = new Date();
  var year = date.getYear();
  var month = date.getMonth() + 1;  if(month.toString().length==1){var month = 
  '0'+month;}
  var day = date.getDate(); if(day.toString().length==1){var day = '0'+day;}
  var date = year+''+month+''+day;
  
  return date;

}
function exportReportToSpreadsheet() {
  
 var spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxxxxxxx/edit#gid=0'); // spreadsheets url
 var sheet = spreadsheet.getSheetByName('List1');                                                                      // sheet name
 var date = getDate();
  
 var report = AdWordsApp.report(
   'SELECT CampaignName, Clicks, Cost ' +
   'FROM   CAMPAIGN_PERFORMANCE_REPORT ' +
   'WHERE  Clicks > 0 ' +
   'DURING '+date+','+date+'');                                                                                        //1 day report
                                                                                                                       //if you need 7 days report use LAST_7_DAYS
 report.exportToSheet(sheet);

}