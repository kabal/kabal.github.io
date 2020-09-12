$(document).ready(function($) {
  /* Google Calendar iframe */
  var calendar = document.getElementById('eventsCalendar');
  if (calendar) {
    var timezone = jstz.determine();
    var pref = '<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;src=n5ccj3lfblfraspvmk3egpipms%40group.calendar.google.com&amp;color=%23125A12&amp;ctz=';
    var suff = '" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe>';
    var iframe_html = pref + timezone.name() + suff;
    calendar.innerHTML = iframe_html;
  }
  
  /* Random quote */
  //https://docs.google.com/spreadsheets/d/1FRzir8G1ipGrr-2lUbOlW4iYXnO9a2802d18F-Sps4o
  const apiKey = 'AIzaSyA-gSG6SO5MDJG7DbBdZhj4U3DIW-1UoPY';
  const spreadsheetId = '1FRzir8G1ipGrr-2lUbOlW4iYXnO9a2802d18F-Sps4o';
  const quotesSheetName = 'Quotes';
  const quotesRangeStart = 'A';
  const quotesRangeEnd = 'B';
  const renderOptions = 'dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE';
  
  $.getJSON('https://sheets.googleapis.com/v4/spreadsheets/'+spreadsheetId+'?ranges='+quotesSheetName+'&fields=sheets.properties.gridProperties.rowCount&key='+apiKey, function(data) {
    var quoteCount = data.sheets[0].properties.gridProperties.rowCount - 1;
    var randomQuoteNumber = Math.floor((Math.random() * quoteCount) + 1);
    var quoteRange = quotesSheetName + '!' + quotesRangeStart + (randomQuoteNumber+1) + ':' + quotesRangeEnd + randomQuoteNumber;
    $.getJSON('https://sheets.googleapis.com/v4/spreadsheets/'+spreadsheetId+'/values/'+quoteRange+'?'+renderOptions+'&key='+apiKey, function(data) {
      var person = data.values[0][0];
      var quote = data.values[0][1].split("\n").join("<br />");
      $(".quote").html(quote);
      $(".quotePerson").html('-'+person);
    });
  });
});