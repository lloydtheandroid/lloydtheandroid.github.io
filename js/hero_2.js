/**
 * Created by lloyd on 11/27/16.
 */
"use strict"

function socialOverlay() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) jQuery.noop();
    else {
        if ($(window).width() >= 1600) {
            var heroHeight = $("#hero").outerHeight() + 600;
            $(".overlay").height(heroHeight),
                $(".overlay > span").css("top", heroHeight / 2 - 300)
        } else {
            var heroHeight = $("#hero").outerHeight();
            $(".overlay").height(heroHeight)
        }
        $("#hero .social, #hero .social > a").off("mouseenter mouseleave"),
            $("#hero.social").on("mouseenter", function() {
                $(".overlays-wrapper").css({
                    opacity: 1,
                    "z-index": 9999
                })
            }),
            $("#hero .social > a").on("mouseenter", function() {
                $(this).fadeTo(100, 1), $(this).siblings().fadeTo(100, .5)
            }),
            $("#hero .social").on("mouseleave", function() {
                $("#hero .social > a").fadeTo(100, 1)
            }),
            $("#hero .social > a.twitter").on("mouseenter", function() {
                $(".overlay.twitter").addClass("animate"), $(".overlay.twitter span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#55acee")
            }).on("mouseleave", function() {
                $(".overlay.twitter").removeClass("animate"), $(".overlay.twitter span").removeClass("animate-scale"),
                    $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            }),
            $("#hero .social > a.facebook").on("mouseenter", function() {
                $(".overlay.facebook").addClass("animate"), $(".overlay.facebook span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#3b5998")
            }).on("mouseleave", function() {
                $(".overlay.facebook").removeClass("animate"), $(".overlay.facebook span").removeClass("animate-scale"), $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            }),
            $("#hero .social > a.dribbble").on("mouseenter", function() {
                $(".overlay.dribbble").addClass("animate"), $(".overlay.dribbble span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#ea4c89")
            }).on("mouseleave", function() {
                $(".overlay.dribbble").removeClass("animate"), $(".overlay.dribbble span").removeClass("animate-scale"), $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            }),
            $("#hero .social > a.instagram").on("mouseenter", function() {
                $(".overlay.instagram").addClass("animate"), $(".overlay.instagram span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#8d6851")
            }).on("mouseleave", function() {
                $(".overlay.instagram").removeClass("animate"), $(".overlay.instagram span").removeClass("animate-scale"), $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            }),
            $("#hero .social > a.github").on("mouseenter", function() {
                $(".overlay.github").addClass("animate"), $(".overlay.github span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#162221")
            }).on("mouseleave", function() {
                $(".overlay.github").removeClass("animate"), $(".overlay.github span").removeClass("animate-scale"), $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            })
    }
}
