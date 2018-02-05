
/*$(function(){
  $('#sector2 a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });
});*/

document.querySelector('#sector2').scrollIntoView({
  behavior: 'smooth'
});
