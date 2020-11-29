$(document).foundation();

$(document).ready(function($) {
  $('#responsive-menu li').click(function() { 
    if (Foundation.MediaQuery.current == 'small'){
      $('#responsive-menu').css('display', 'none'); 
    }
  });
});

$(document).ready(function($) {
  /* Random page background */
  var pageBackground = $('.pageBackground');
  if (pageBackground.length > 0){
    var pageBackgroundCount = 23;
    pageBackground.css('background-image','url(/images/backgrounds/'+Math.floor((Math.random() * pageBackgroundCount) + 1)+'.jpg)');
  }
});