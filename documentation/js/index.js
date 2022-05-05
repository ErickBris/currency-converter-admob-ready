'use strict';

/* ------------------------------------------------------------- */
/*  Author      :   CreativeDroids
/*  Email       :   droidscreative@gmail.com
/* ------------------------------------------------------------- */

var is_opened = true;

var toggle_menu = function () {
    var elem = $("#div-fixed-wrap");
    var body = $("#div-movable");
    var list = $("#list-index");
    if (is_opened) {
        is_opened = false;
        elem.css("overflow-y", "hidden");
        elem.animate({
            height: 80
        }, 700);
        list.hide();
        body.animate({
            marginTop: 80
        }, 700);
    } else {
        is_opened = true;
        elem.css("overflow-y", "scroll");
        elem.animate({
            height: 250
        }, 700);
        list.show();
        body.animate({
            marginTop: 250
        }, 700);
    }

};

var rotate_elem = function (elem) {
    var rotate;
    if (!is_opened)
        rotate = "rotate(0deg)";
    else
        rotate = "rotate(-180deg)";

    elem.css({
        "-ms-transform": rotate,
        "-webkit-transform": rotate,
        "-moz-transform": rotate,
        "-o-transform": rotate,
        "transform": rotate
    });
};

$(document).ready(function () {


    // used for smooth scrolling to the selected link
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    if ($(window).innerWidth() < 768) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 250
                        }, 1000);
                    } else {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 50
                        }, 1000);
                    }
                    return false;
                }
            }
        });
    });

    $("html").niceScroll({
        autohidemode: "leave",
        cursorwidth: "10px",
        cursorborder: "0px",
        cursorcolor: "rgba(67,67,67,0.8)",
        cursorborderradius: "0px"
    });

    $("#div-fixed").css("width", $("#div-fixed-wrap").width() + "px");

    $("#div-fixed i").click(function () {
        rotate_elem($(this));
        toggle_menu();
    });

    $(window).resize(function () {
        var fixed_width = $("#div-fixed-wrap").width();
        $("#div-fixed").css("width", fixed_width + "px");
        if($(window).width()>767)
            $("#list-index").show();
    });

});