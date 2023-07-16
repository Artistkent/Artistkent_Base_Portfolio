/*jQuery animate paragraph*/ 
/* 1 */
$( ".icon_wrapper_1" ).click(function() {
  $( ".content_2" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".icon_wrapper_1" ).click(function(){
if($( ".content_3, .content_4, .content_5, .content_6" ).hasClass("flip_alt")){
  $( ".content_3, .content_4, .content_5, .content_6" ).addClass( "flip_alt_back");
  $( ".content_3, .content_4, .content_5, .content_6" ).removeClass( "flip_alt");
}
});

$( ".icon_wrapper_1" ).click(function() {
  if($(".content_2").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");
    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});

/* 2 */

$( ".icon_wrapper_2" ).click(function() {
  $( ".content_3" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".icon_wrapper_2" ).click(function(){
  if($( ".content_2, .content_4, .content_5, .content_6" ).hasClass("flip_alt")){
    $( ".content_2, .content_4, .content_5, .content_6" ).addClass( "flip_alt_back");
    $( ".content_2, .content_4, .content_5, .content_6" ).removeClass( "flip_alt");
  }
  });

$( ".icon_wrapper_2" ).click(function() {
  if($(".content_3").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");


    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});



/* 3 */

$( ".icon_wrapper_3" ).click(function() {
  $( ".content_4" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".icon_wrapper_3" ).click(function(){
  if($( ".content_2, .content_3, .content_5, .content_6" ).hasClass("flip_alt")){
    $( ".content_2, .content_3, .content_5, .content_6" ).addClass( "flip_alt_back");
    $( ".content_2, .content_3, .content_5, .content_6" ).removeClass( "flip_alt");
  }
  });

$( ".icon_wrapper_3" ).click(function() {
  if($(".content_4").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");


    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});


/* 4 */
$( ".icon_wrapper_4" ).click(function() {
  $( ".content_5" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".icon_wrapper_4" ).click(function(){
  if($( ".content_2, .content_3, .content_4, .content_6" ).hasClass("flip_alt")){
    $( ".content_2, .content_3, .content_4, .content_6" ).addClass( "flip_alt_back");
    $( ".content_2, .content_3, .content_4, .content_6" ).removeClass( "flip_alt");
  }
  });

$( ".icon_wrapper_4" ).click(function() {
  if($(".content_5").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");


    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});

/* 5 PROJECT */

$( ".projects_button" ).click(function() {
  $( ".content_6" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".projects_button" ).click(function(){
  if($( ".content_2, .content_3, .content_4, .content_5" ).hasClass("flip_alt")){
    $( ".content_2, .content_3, .content_4, .content_5" ).addClass( "flip_alt_back");
    $( ".content_2, .content_3, .content_4, .content_5" ).removeClass( "flip_alt");
  }
  });

$( ".projects_button" ).click(function() {
  if($(".content_6").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");


    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});




/* HOVER BUTTON AFFECT CONTENT 1 & DOT GRID */
$(function() {
  $('.icon_wrapper:nth-child(2) p').hover(function() {
  
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_r');
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px red');

  

  }, function() {
    // on mouseout, reset the background colour
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_r');
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px black');
    
    $('.dot_grid').css('filter', '');
  });
});

$(function() {
  $('.icon_wrapper:nth-child(3) p').hover(function() {
  
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_y');
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px yellow');


  }, function() {
    // on mouseout, reset the background colour
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_y');
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px black');
    
  });
});

$(function() {
  $('.icon_wrapper:nth-child(4) p').hover(function() {
  
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_g');
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px rgb(0, 255, 0)');

  }, function() {
    // on mouseout, reset the background colour
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_g');
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px black');
    
  });
});

$(function() {
  $('.icon_wrapper:nth-child(5) p').hover(function() {
  
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_b');
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px blue');

  }, function() {
    // on mouseout, reset the background colour
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_b');
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px black');
    
  });
});

/*Media Open Button*/

$( ".media_button" ).click(function() {
  if($( ".top_links_wrapper" ).hasClass("media_close")){
  $( ".top_links_wrapper" ).addClass( "media_open").removeClass("media_close");
}else if($( ".top_links_wrapper").hasClass("media_open")){
  $( ".top_links_wrapper" ).removeClass("media_open").addClass("media_close");
}
else{$( ".top_links_wrapper").addClass("media_open")}
});

/*MOVE LITTLE ARROW LINK A FEW DEGREES!*/
$(function() {
  $('.project_link_button').hover(function() {
  
   $('.fa-arrow-right').css('transform', 'rotateZ(-45deg)');
  
  }, function() {
    // on mouseout, reset the background colour
    $('.fa-arrow-right').css('transform', 'rotateZ(0deg)');
    
  });
});

/*CLICK IMAGE EXPAND PROJECT DESCRIPTION*/

 
  $('.project_img').click(function() {
  
   $('.project_p').toggleClass('no_show');
   $('.project_link_button').toggleClass('no_show');
   
  });


