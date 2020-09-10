$(document).foundation();

$(document).ready(function($) {
  $('#responsive-menu li').click(function() { 
    if (Foundation.MediaQuery.current == 'small'){
      $('#responsive-menu').css('display', 'none'); 
    }
  });
});

$(document).ready(function($) {
  var calendar = document.getElementById('eventsCalendar');
  if (calendar) {
    var timezone = jstz.determine();
    var pref = '<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;src=n5ccj3lfblfraspvmk3egpipms%40group.calendar.google.com&amp;color=%23125A12&amp;ctz=';
    var suff = '" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe>';
    var iframe_html = pref + timezone.name() + suff;
    calendar.innerHTML = iframe_html;
  }
  
  var pageBackground = $('.pageBackground');
  if (pageBackground.length > 0){
    var pageBackgroundCount = 16;
    pageBackground.css('background-image','url(/images/backgrounds/'+Math.floor((Math.random() * pageBackgroundCount) + 1)+'.jpg)');
  }
});