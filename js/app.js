(function($){
  console.log('działa');

  var open = $('.openbtn');
  var sideNav = $('#mySidenav');
  var moduleContent = $('.module.content');
  var allBody = $('body');
  var close = $('.closebtn');

  open.on('click', function(){
    sideNav.css({
      "width": "250px",
    });
    moduleContent.css({
      "margin-left": "250px",
      "opacity" : "0.4",
    });
    open.css({
      "display" : "none",
    })
  });

  close.on('click',function(){
    sideNav.css({
      "width" : "0",
    });
    moduleContent.css({
      "margin-left" : "0",
      "opacity" : "1",
    });
    open.css({
      "display": "block",
    })
  });

  var downup = $('.icon-down-open');

  $.scrollTo(0);

  downup.on('click',function(){
    $.scrollTo($('.white'),500);
    });

  $(window).scroll(function(){
    if($(this).scrollTop()>300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
  });

  $('.scrollup').click(function() { $.scrollTo($('body'),1000);});

  var home = $('.nav').find('.menuItem').eq(0);
  var camps = $('.nav').find('.menuItem').eq(1);
  var prices = $('.nav').find('.menuItem').eq(2);
  var places = $('.nav').find('.menuItem').eq(3);
  var contact = $('.nav').find('.menuItem').eq(4);

    home.click(function(){
      $.scrollTo($('#home'),500);
    })
    camps.click(function(){
      $.scrollTo($("#whyUs"),500);
    });
    prices.click(function(){
      $.scrollTo($("#prices"),500);
    });
    places.click(function(){
      $.scrollTo($("#places"),500);
    });
    contact.click(function(){
      $.scrollTo($("#contact"),500);
    });





 })(jQuery);
