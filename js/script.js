"use strict";
(function () {
    var hambMobileButton = document.getElementById("hambMobile");
    var hambNormalButton = document.getElementById("hamb-normal");
    var hambShortButton = document.getElementById("hamb-short");
    var verticalMenu = document.getElementById("vartical");
    var workField = document.getElementById("field");
    var menuLeft = document.getElementById("menu-left");
    var menuTop = document.getElementById("menu-top");

    hambMobileButton.addEventListener("click", function (event) {
        event.stopPropagation();
        verticalMenu.classList.toggle("vertical-menu-off");
        verticalMenu.classList.toggle("vertical-menu");
        workField.classList.toggle("more-top-margin");
        workField.classList.toggle("no-more-top-margin");
    })

    hambNormalButton.addEventListener("click", function (event) {
        event.stopPropagation();
        menuLeft.classList.add("left-menu-off");
        menuLeft.classList.remove("left-menu-on");
        workField.classList.add("slide-to-left");
        workField.classList.remove("slide-to-right");
        menuTop.classList.add("slide-to-left");
        menuTop.classList.remove("slide-to-right");
    })

    hambShortButton.addEventListener("click", function (event) {
        event.stopPropagation();
        menuLeft.classList.remove("left-menu-off");
        menuLeft.classList.add("left-menu-on");
        workField.classList.remove("slide-to-left");
        workField.classList.add("slide-to-right");
        menuTop.classList.remove("slide-to-left");
        menuTop.classList.add("slide-to-right");
    })
})();

