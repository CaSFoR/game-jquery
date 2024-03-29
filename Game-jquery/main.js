$(document).ready(function() {
  $('.box').append("<div class='inner'></div>");
  $('.menu-game').append("<h2 class='title'>Welcome</h2><button class='start-btn' id='startGame'>Start Game</button><button class='exit-btn' id='exit' >Exit</button>");

  $('#startGame').click(function() {
    $(this).hide();
    $('.menu-game').html("<div class='box-level-game'><h5 class='title'>Choose Game Level </h5><button class='level level-easy-btn'>Easy</button><button class='level level-mid-btn'>Mid</button><button class='level level-hard-btn'>Hard</button></div>");

    $('.level').click(function() {
      let level = $(this).html().toLocaleLowerCase();
      $('.menu-game').hide();
      $("#back").hide();
      $('.you-win').remove();
      $('.lost').remove();
      $('.box').append("<div class='inner'></div>");
      animations(1000,level);
    });


  });

  

  let boxWidth = $('.box').innerWidth();
  let boxHeight = $('.box').innerHeight();

  let innerWidth = $('.inner').outerWidth();
  let innerHeight = $('.inner').outerHeight();

  let widthSpacing= (boxWidth - innerWidth) - 1;
  let heightSpacing = (boxHeight - innerHeight) - 1;

  $(".box").css('position', 'relative');

  function animations(speed,level){

    $(".inner").show();
    $(".inner").click(function() {
      $(this).remove();
      $(".box").html("<img class='you-win' src='you-win.jpg' />");
      $("#back").show();
      $('#back').click(function(){
        $('.menu-game').show();
      });
      

    });

    $(".inner").css({"position":"absolute","left":"0","top":"0"})
    .animate({left:widthSpacing},speed)
    .animate({top:heightSpacing},speed)
    .animate({left:0},speed).animate({top:0},speed,function(){
      if(speed > 0 && level == "easy"){
        animations(speed - 380);
      }
      else if (speed > 0 && level == "medium"){
        animations(speed - 480);
      }
      else if (speed > 0 && level == "hard"){
        animations(speed - 800);
      }
      else {
        $(this).hide();
        $(".box").html("<img class='lost' src='lost.png' />");
        $("#back").show();
        $('#back').click(function(){
          $('.menu-game').show();
        });

      }
    });

  }
  $('#exit').click(function(){
    window.top.close();
  });



});
