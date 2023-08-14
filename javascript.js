//from my other javascript file
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
  
  
  
  
  /* HOVER BUTTON AFFECT CONTENT */
  /*
  $(function() {
    $('.icon_wrapper:nth-child(1) p').hover(function() {
    
     $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_r');
     $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px red');
  
    
  
    }, function() {
      // on mouseout, reset the background colour
      $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_r');
      $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px white');
      
      
    });
  });
  
  $(function() {
    $('.icon_wrapper:nth-child(2) p').hover(function() {
    
     $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_y');
     $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px yellow');
  
  
    }, function() {
      // on mouseout, reset the background colour
      $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_y');
      $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px white');
      
    });
  });
  
  $(function() {
    $('.icon_wrapper:nth-child(3) p').hover(function() {
    
     $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_g');
     $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px rgb(0, 255, 0)');
  
    }, function() {
      // on mouseout, reset the background colour
      $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_g');
      $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px white');
      
    });
  });
  
  $(function() {
    $('.icon_wrapper:nth-child(4) p').hover(function() {
    
     $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_b');
     $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px blue');
  
    }, function() {
      // on mouseout, reset the background colour
      $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_b');
      $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px white');
      
    });
  });
  */
  
  
  /*Media Open Button*/
  
  $( ".media_button" ).click(function() {
    if($( ".top_links_wrapper" ).hasClass("media_close")){
    $( ".top_links_wrapper" ).addClass( "media_open").removeClass("media_close");
  }else if($( ".top_links_wrapper").hasClass("media_open")){
    $( ".top_links_wrapper" ).removeClass("media_open").addClass("media_close");
  }
  else{$( ".top_links_wrapper").addClass("media_open")}
  });
  
  /*$( ".media_button" ).click(function() {
    if($( ".top_links_caller_button" ).hasClass("media_close")){
    $( ".top_links_caller_button" ).addClass( "media_open").removeClass("media_close");
  }else if($( ".top_links_caller_button").hasClass("media_open")){
    $( ".top_links_caller_button" ).removeClass("media_open").addClass("media_close");
  }
  else{$( ".top_links_caller_button").addClass("media_open")}
  });*/
  
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
  
   
    $('.project_img:eq(0)').click(function() {
      $('.project_link:eq(0)').toggleClass('zoom_in zoom_out');
  
     $('.project_p:eq(0)').toggleClass('no_show');
     $('.project_link_button:eq(0)').toggleClass('no_show');
     
    });

    $('.project_img:eq(1)').click(function() {
      $('.project_link:eq(1)').toggleClass('zoom_in zoom_out');
  
     $('.project_p:eq(1)').toggleClass('no_show');
     $('.project_link_button:eq(1)').toggleClass('no_show');
     
    });

    $('.project_img:eq(2)').click(function() {
      $('.project_link:eq(2)').toggleClass('zoom_in zoom_out');
  
     $('.project_p:eq(2)').toggleClass('no_show');
     $('.project_link_button:eq(2)').toggleClass('no_show');
     
    });

    $('.project_img:eq(3)').click(function() {
      $('.project_link:eq(3)').toggleClass('zoom_in zoom_out');
  
     $('.project_p:eq(3)').toggleClass('no_show');
     $('.project_link_button:eq(3)').toggleClass('no_show');
     
    });
  
  
  /*ROTATE ARROW ON CLICK SIDEBAR*/
  function rotateArrow() {
  if(document.getElementById('caller-arrow').style.transform == "rotateY(0deg)"){
    document.getElementById('caller-arrow').style.transform = "rotateY(180deg)";
    
  }
    else{
      document.getElementById('caller-arrow').style.transform = "rotateY(0deg)";
    }
  
  };
  
  
  const rotArr = document.querySelector('.top_links_caller_button');
  
  console.log(rotArr);
  
    rotArr.addEventListener("click", rotateArrow);
  
  
  /*COPY HEIGHT OF ABSOLUTE CONTENT DIV*/
  /*
  var link1 = document.querySelector('.icon_wrapper_1');
  link1.addEventListener('click', contentHeight1);
  
  function contentHeight1() {
    var switchHeight = document.querySelector('.content_2');
  var gottenHeight = switchHeight.offsetHeight + 20 + "px";
    document.getElementById('content_left_hey').style.height = gottenHeight;
  };
  
  var link2 = document.querySelector('.icon_wrapper_2');
  link2.addEventListener('click', contentHeight2);
  
  function contentHeight2() {
    var switchHeight = document.querySelector('.content_3');
  var gottenHeight = switchHeight.offsetHeight + 20 + "px";
    document.getElementById('content_left_hey').style.height = gottenHeight;
  }
  
  var link3 = document.querySelector('.icon_wrapper_3');
  link3.addEventListener('click', contentHeight3);
  
  function contentHeight3() {
    var switchHeight = document.querySelector('.content_4');
  var gottenHeight = switchHeight.offsetHeight + 20 + "px";
    document.getElementById('content_left_hey').style.height = gottenHeight;
  }
  
  var link4 = document.querySelector('.icon_wrapper_4');
  link4.addEventListener('click', contentHeight4);
  
  function contentHeight4() {
    var switchHeight = document.querySelector('.content_5');
  var gottenHeight = switchHeight.offsetHeight + 20 + "px";
    document.getElementById('content_left_hey').style.height = gottenHeight;
  }
  */


