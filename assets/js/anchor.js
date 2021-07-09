$(function(){   

    $(".part1").click(function(){
      $("html,body").animate(
        { scrollTop: $(".forumBox").offset().top + 1 },
        900
      );
      return false;
    });

    $(".part2").click(function () {
        $("html,body").animate(
          { scrollTop: $(".speakerBox").offset().top + 1 },
          900
        );
        return false;
    });

    $(".part3").click(function () {
        $("html,body").animate(
          { scrollTop: $(".surveyCon").offset().top + 1 },
          900
        );
        return false;
    });

    $(".part4").click(function () {
      $("html,body").animate(
        { scrollTop: $(".videoBox").offset().top + 1 },
        900
      );
      return false;
    });

    // 點擊歷年回顧展開年份
    $(".part5").click(function () {
      $(".review").fadeToggle("slow");
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


