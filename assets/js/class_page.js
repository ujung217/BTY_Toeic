$(function(){
    $('.class-box-img').mouseover(function(){
      $(this).children('.class-btn').stop().fadeIn(1000);
    });
    $('.class-box-img').mouseout(function(){
      $(this).children('.class-btn').stop().fadeOut(1000);
    });
  });


$(function(){
    $('.toeic').click(function(){
        $('.toeic-class').show();
        $('.toeic-speaking-class').hide();
        $('.toeic>p').css("color","#fff");
        $('.speaking>p').css("color","#333");
        $('.line1').show();
        $('.line2').hide();
    });
    $('.speaking').click(function(){
        $('.toeic-class').hide();
        $('.toeic-speaking-class').show();
        $('.speaking>p').css("color","#fff");
        $('.toeic>p').css("color","#333");
        $('.line2').show();
        $('.line1').hide();
    });
    $('.menu-ts').click(function(){
        $('.toeic-class').hide();
        $('.toeic-speaking-class').show();
        $('.speaking>p').css("color","#fff");
        $('.toeic>p').css("color","#333");
        $('.line2').show();
        $('.line1').hide();
    });
    $('.menu-t').click(function(){
        $('.toeic-class').show();
        $('.toeic-speaking-class').hide();
        $('.toeic>p').css("color","#fff");
        $('.speaking>p').css("color","#333");
        $('.line1').show();
        $('.line2').hide();
    });
});