$(function() {

    $("#search_2").keyup(function() {
        var input = $(this).val();

        if (input.length > 0) {
            $(".awardsBox--2 ul li").css("display", "none");

            $(".awardsBox--2 ul li").filter(function(index) {
                return $(this).text().indexOf(input) >= 0;
            }).css("display", "block");
        }
        else
            $(".awardsBox--2 ul li").css("display", "block");
    });

    $("#search_3").keyup(function() {
        var input = $(this).val();

        if (input.length > 0) {
            $(".awardsBox--3 ul li").css("display", "none");

            $(".awardsBox--3 ul li").filter(function(index) {
                return $(this).text().indexOf(input) >= 0;
            }).css("display", "block");
        }
        else
            $(".awardsBox--3 ul li").css("display", "block");
    });

    $("#search_4").keyup(function() {
        var input = $(this).val();

        if (input.length > 0) {
            $(".awardsBox--4 ul li").css("display", "none");

            $(".awardsBox--4 ul li").filter(function(index) {
                return $(this).text().indexOf(input) >= 0;
            }).css("display", "block");
        }
        else
            $(".awardsBox--4 ul li").css("display", "block");
    });

    $("#search_5").keyup(function() {
        var input = $(this).val();

        if (input.length > 0) {
            $(".awardsBox--5 ul li").css("display", "none");

            $(".awardsBox--5 ul li").filter(function(index) {
                return $(this).text().indexOf(input) >= 0;
            }).css("display", "block");
        }
        else
            $(".awardsBox--5 ul li").css("display", "block");
    });

    //點擊看全部，展開隱藏的範圍，並顯示篩選功能
    $(".open-all_1").click(function () {
        $(".awardsBox--3 .awardsBox__content ul").toggleClass("height_auto");
        $(".inputBox--3").fadeIn();
        $(this).hide();
    }); 
    $(".open-all_2").click(function () {
        $(".awardsBox--4 .awardsBox__content ul").toggleClass("height_auto");
        $(".inputBox--4").fadeIn();
        $(this).hide();
    }); 
    $(".open-all_3").click(function () {
        $(".awardsBox--5 .awardsBox__content ul").toggleClass("height_auto");
        $(".inputBox--5").fadeIn();
        $(this).hide();
    }); 

});