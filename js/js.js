
  
$(".leftnav").hover(
    function () {
        $("#leftbar").css("width", "20%");
        $("#main").css("margin-left", "20%");
        $(".button-left").css({"display" : "block", "left" : "5%"});
        $(".icon-left").css("opacity", "0.5");
        $(".company").css("opacity", "0");

    },
    function () {
        $("#leftbar").css("width", '0');
        $("#main").css("margin-left", "0");
        $(".button-left").css("display", "none");
        $(".icon-left").css("opacity", "1");
        $(".company").css("opacity", "1");

    }
    );

$("#leftbar").hover(
    function () {
        $("#leftbar").css("width", "20%");
        $("#main").css("margin-left", "20%");
        $(".button-left").css({"display" : "block", "left" : "5%"});
        $(".icon-left").css("opacity", "0.5");
        $(".company").css("opacity", "0");


    },
    function () {
        $("#leftbar").css("width", '0');
        $("#main").css("margin-left", "0")
        $(".button-left").css("display", "none");
        $(".icon-left").css("opacity", "1");
        $(".company").css("opacity", "1");

    }
    );


$(".rightnav").hover(
    function () {
        $("#rightbar").css("width", "20%");
        $("#main").css("margin-left", "-20%");
        $(".button-right").css({"display" : "block", "right" : "5%"});
        $(".icon-right").css("opacity", "0.5");
        $(".company").css("opacity", "0");


    },
    function () {
        $("#rightbar").css("width", '0');
        $("#main").css("margin-left", "0");
        $(".button-right").css("display", "none");
        $(".icon-right").css("opacity", "1");
        $(".company").css("opacity", "1");

    }
    );

$("#rightbar").hover(
    function () {
        $("#rightbar").css("width", "20%");
        $("#main").css("margin-left", "-20%");
        $(".button-right").css({"display" : "block", "right" : "5%"});
        $(".icon-right").css("opacity", "0.5");
        $(".company").css("opacity", "0");


    },
    function () {
        $("#rightbar").css("width", '0');
        $("#main").css("margin-left", "0")
        $(".button-right").css("display", "none");
        $(".icon-right").css("opacity", "1");
        $(".company").css("opacity", "1");

    }
    );
  