"use strict";
(function () {
    var hambMobileButton = document.getElementById("hambMobile");
    var hambNormalButton = document.getElementById("hamb-normal");
    var hambShortButton = document.getElementById("hamb-short");
    var verticalMenu = document.getElementById("vartical");
    var workField = document.getElementById("field");
    var menuLeft = document.getElementById("menu-left");
    var check = false;

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
        workField.classList.add("container-max-width");
        workField.classList.remove("normal-margin");
        check = true;
    })

    hambShortButton.addEventListener("click", function (event) {
        event.stopPropagation();
        menuLeft.classList.remove("left-menu-off");
        menuLeft.classList.add("left-menu-on");
        workField.classList.remove("container-max-width");
        workField.classList.add("normal-margin");
        check = false;

        if (window.innerWidth > 992 && check == false) {
            workField.classList.add("normal-margin");
            workField.classList.remove("low-margin");
        }
    })

    window.addEventListener("resize", function (event) {

        if (window.innerWidth <= 992) {
            workField.classList.remove("normal-margin");
            workField.classList.add("low-margin");
        } else if (window.innerWidth > 992 && check == false) {
            workField.classList.add("normal-margin");
            workField.classList.remove("low-margin");
        } else  if (window.innerWidth > 992 && check == true) {
            workField.classList.remove("normal-margin");
            workField.classList.add("low-margin");
        }

        if (window.innerWidth <= 768) {
            workField.classList.remove("low-margin");
            workField.classList.remove("container-max-width");
        }
    })
})();


