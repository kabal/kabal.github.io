$(document).foundation();

$(document).ready(function($) {
  $('#responsive-menu li').click(function() { 
    if (Foundation.MediaQuery.current == 'small'){
      $('#responsive-menu').css('display', 'none'); 
    }
  });
});