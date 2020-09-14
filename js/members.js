$(document).ready(function($) {
  /* Load Members */
  const apiKey = 'AIzaSyA-gSG6SO5MDJG7DbBdZhj4U3DIW-1UoPY';
  const spreadsheetId = '16LVWfIh6TrYrzN1FGzdzlPlzogdNqWheAl6gDsnPR3k';
  const membersSheetName = 'Members';
  const membersRangeStart = 'A';
  const membersRangeEnd = 'C';
  const renderOptions = 'dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE';
  
  var membersRange = membersSheetName + '!' + membersRangeStart + '2:' + membersRangeEnd;
  $.getJSON('https://sheets.googleapis.com/v4/spreadsheets/'+spreadsheetId+'/values/'+membersRange+'?'+renderOptions+'&key='+apiKey, function(data) {
    let memberData = data.values;
    
    const memberPrefix = '<div class="cell medium-6 large-4"><span class="memberName">'
    const memberInfix = '</span> <span class="memberYear">(Joined in ';
    const leaderInfix = '</span> <span class="memberYear">(Founded in ';
    const memberSuffix = ')</span></div>';
    
    let leadersList = $("#leadersList");
    let officersList = $("#officersList");
    let paragonsList = $("#paragonsList");
    let membersList = $("#membersList");
    
    for (let i = 0; i < memberData.length; i++) {
      if (memberData[i].length > 0) {
        const memberRank = (memberData[i][1] || "").toUpperCase();
        if (memberRank == "LEADER") {
          leadersList.append(memberPrefix + memberData[i][0] + leaderInfix + memberData[i][2] + memberSuffix);
        } else if (memberRank == "OFFICER") {
          officersList.append(memberPrefix + memberData[i][0] + memberInfix + memberData[i][2] + memberSuffix);
        } else if (memberRank == "PARAGON") {
          paragonsList.append(memberPrefix + memberData[i][0] + memberInfix + memberData[i][2] + memberSuffix);
        } else {
          membersList.append(memberPrefix + memberData[i][0] + memberInfix + memberData[i][2] + memberSuffix);
        }
      }
    }
  });
});