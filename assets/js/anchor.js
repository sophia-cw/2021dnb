$(function(){   

    $(".part1").click(function(){
      window.location="https://event.cw.com.tw/_test-by-cwlab/2021dnb/index.html#forum";
      // $("html,body").animate(
      //   { scrollTop: $("#forum").offset().top + 1 },
      //   900
      // );
      // return false;
    });

    $(".part2").click(function () {
      window.location="https://event.cw.com.tw/_test-by-cwlab/2021dnb/index.html#speakers";
    });

    $(".part3").click(function () {
      window.location="https://event.cw.com.tw/_test-by-cwlab/2021dnb/index.html#survey";
    });

    $(".part4").click(function () {
      window.location="https://event.cw.com.tw/_test-by-cwlab/2021dnb/index.html#videos";
    });

    // 點擊歷年回顧展開年份
    $(".part5").click(function () {
      $(".review").fadeToggle("slow");
    });

    $(".forum_btn").click(function(){
      $("html,body").animate(
        { scrollTop: $("#survey").offset().top + 1 },
        900
      );
      return false;
    });

    // 漢堡選單
    $(".open").click(function () {
      $("nav").toggle("slow");
      $("body").toggleClass("body_fixed");
      $(this).toggleClass("opening");
    });

    // 以下：在手機版時，選單加入class="co"，且點擊co之後收起選單等等
    $(window).width(function() {

      if($(window).innerWidth() <= 769) {
          $(".menu>li").addClass("co");
          $(".review>li a").addClass("co");
          $(".part5").removeClass("co");
        }
        else {
          $(".menu>li").removeClass("co");
          $(".review>li a").removeClass("co");
          $(".part5").removeClass("co");
        }
      });
    
    $(".co").click(function () {
      $("nav").hide("slow");
      $("body").removeClass("body_fixed");
      $(".open").toggleClass("opening");
    });
    // 以上：在手機版時，選單加入class="co"，且點擊co之後收起選單等等

});


$(function(){
  // go top
  $(window).scroll(function() {
    if($(window).scrollTop() >= 500) {
      $(".gotop").show("slow");
    }
    else {
      $('.gotop').hide('slow');
    }
  });

  $(".gotop").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 900);
      return false;
  });

  // go down
  $("#godown").click(function () {
    $("html,body").animate({ scrollTop: $(".infoBox").offset().top + 1 }, 900);
    return false;
  });

});

// top1000 FAQ
$(function(){
  $('.answer').hide(); 
  $(".question--1").click(function () {
    $(".answer--1").slideToggle("slow");
    $(".answer--4,.answer--2,.answer--3,.answer--5").slideUp("slow"); 
    $(".btn_toggle--1 span:nth-child(2)").toggle(); 
    $(".btn_toggle--2 span:nth-child(2),.btn_toggle--3 span:nth-child(2),.btn_toggle--4 span:nth-child(2),.btn_toggle--5 span:nth-child(2)").show(); 
  });
  $(".question--2").click(function () {
    $(".answer--2").slideToggle("slow");
    $(".answer--1,.answer--4,.answer--3,.answer--5").slideUp("slow"); 
    $(".btn_toggle--2 span:nth-child(2)").toggle();
    $(".btn_toggle--1 span:nth-child(2),.btn_toggle--3 span:nth-child(2),.btn_toggle--4 span:nth-child(2),.btn_toggle--5 span:nth-child(2)").show(); 
  });
  $(".question--3").click(function () {
    $(".answer--3").slideToggle("slow");
    $(".answer--1,.answer--2,.answer--4,.answer--5").slideUp("slow"); 
    $(".btn_toggle--3 span:nth-child(2)").toggle(); 
    $(".btn_toggle--2 span:nth-child(2),.btn_toggle--1 span:nth-child(2),.btn_toggle--4 span:nth-child(2),.btn_toggle--5 span:nth-child(2)").show(); 
  });
  $(".question--4").click(function () {
    $(".answer--4").slideToggle("slow");
    $(".answer--1,.answer--2,.answer--3,.answer--5").slideUp("slow"); 
    $(".btn_toggle--4 span:nth-child(2)").toggle(); 
    $(".btn_toggle--2 span:nth-child(2),.btn_toggle--3 span:nth-child(2),.btn_toggle--1 span:nth-child(2),.btn_toggle--5 span:nth-child(2)").show(); 
  });
  $(".question--5").click(function () {
    $(".answer--5").slideToggle("slow");
    $(".answer--1,.answer--2,.answer--3,.answer--4").slideUp("slow"); 
    $(".btn_toggle--5 span:nth-child(2)").toggle(); 
    $(".btn_toggle--2 span:nth-child(2),.btn_toggle--3 span:nth-child(2),.btn_toggle--4 span:nth-child(2),.btn_toggle--1 span:nth-child(2)").show(); 
  });
});

// header
$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 150) {
        $('header').addClass('header_bg');
        $('#anniversary header').addClass('header_bg--2');
     }
    else {
      $('header').removeClass('header_bg');
      $('#anniversary header').removeClass('header_bg--2');
    }
  });
});

// anniversary newsBox
$(function(){
  $(".news_list--1").click(function () {
    $(".news_content--1").css("display","flex");
    $(".news_content--2").hide();
    $(".news_content--3").hide();
    $(".news_content--4").hide();
    $(".news_content--5").hide();
    $(".news_content--6").hide();
    $(".list").removeClass("active");
    $(".news_list--1").addClass("active");
  });
  $(".news_list--2").click(function () {
    $(".news_content--1").hide();
    $(".news_content--2").css("display","flex");
    $(".news_content--3").hide();
    $(".news_content--4").hide();
    $(".news_content--5").hide();
    $(".news_content--6").hide();
    $(".list").removeClass("active");
    $(".news_list--2").addClass("active");
  });
  $(".news_list--3").click(function () {
    $(".news_content--1").hide();
    $(".news_content--2").hide();
    $(".news_content--3").css("display","flex");
    $(".news_content--4").hide();
    $(".news_content--5").hide();
    $(".news_content--6").hide();
    $(".list").removeClass("active");
    $(".news_list--3").addClass("active");
  });
  $(".news_list--4").click(function () {
    $(".news_content--1").hide();
    $(".news_content--2").hide();
    $(".news_content--3").hide();
    $(".news_content--4").css("display","flex");
    $(".news_content--5").hide();
    $(".news_content--6").hide();
    $(".list").removeClass("active");
    $(".news_list--4").addClass("active");
  });
  $(".news_list--5").click(function () {
    $(".news_content--1").hide();
    $(".news_content--2").hide();
    $(".news_content--3").hide();
    $(".news_content--4").hide();
    $(".news_content--5").css("display","flex");
    $(".news_content--6").hide();
    $(".list").removeClass("active");
    $(".news_list--5").addClass("active");
  });
  $(".news_list--6").click(function () {
    $(".news_content--1").hide();
    $(".news_content--2").hide();
    $(".news_content--3").hide();
    $(".news_content--4").hide();
    $(".news_content--5").hide();
    $(".news_content--6").css("display","flex");
    $(".list").removeClass("active");
    $(".news_list--6").addClass("active");
  });
});

// anniversary slick Box
$(".btn_language").click(function () {
  $(".language_main").toggleClass('language_main--click');
  // 切換按鈕文字:
  var i = $(".language_main p").attr("res");
  if (i == 0) {
    $(".language_main p").attr("res", "1");
    $(".language_main p").html("中");
    $(".language_tw").show();
    $(".language_en").hide();
  } else {
    $(".language_main p").attr("res", "0");
    $(".language_main p").html("英");
    $(".language_tw").hide();
    $(".language_en").show();
  }
  // 切換按鈕文字 end
});

// anniversary 小選單
$(".go_1").click(function(){
  $("html,body").animate(
    { scrollTop: $("#dnbtalk").offset().top + 1 },
    900
  );
  return false;
});
$(".go_2").click(function(){
  $("html,body").animate(
    { scrollTop: $("#focus").offset().top + 1 },
    900
  );
  return false;
});
$(".go_3").click(function(){
  $("html,body").animate(
    { scrollTop: $("#news").offset().top + 1 },
    900
  );
  return false;
});
$(".go_4").click(function(){
  $("html,body").animate(
    { scrollTop: $("#decade").offset().top + 1 },
    900
  );
  return false;
});