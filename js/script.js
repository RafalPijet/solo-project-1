"use strict";
(function () {
    let verticalMenu = document.getElementById("vartical");
    let menuLeft = document.getElementById("menu-left");

    document.querySelectorAll("#overlay .js--close-modal").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            modalHandling();
        })
    });

    document.querySelector("#overlay").addEventListener("click", function (e) {
        if (e.target === this) {
            modalHandling();
        }
    });

    document.addEventListener("keyup", function (e) {
        if (e.keyCode === 27) {
            modalHandling();
        }
    });

    document.getElementById("hambMobile").addEventListener("click", function (event) {
        event.stopPropagation();
        verticalMenu.classList.toggle("vertical-menu-off");
        verticalMenu.classList.toggle("vertical-menu");
        workField.classList.toggle("more-top-margin");
        workField.classList.toggle("no-more-top-margin");
        workField.classList.toggle("top-margin");
    });

    document.getElementById("hamb-normal").addEventListener("click", function (event) {
        event.stopPropagation();
        menuLeft.classList.add("left-menu-off");
        menuLeft.classList.remove("left-menu-on");
        workField.classList.add("container-max-width");
        workField.classList.remove("normal-margin");
        check = true;
    });

    document.getElementById("hamb-short").addEventListener("click", function (event) {
        event.stopPropagation();
        menuLeft.classList.remove("left-menu-off");
        menuLeft.classList.add("left-menu-on");
        check = false;

        if (window.innerWidth > 992 && check === false) {

            workField.classList.add("normal-margin");
            workField.classList.remove("low-margin");
        }
    });

    window.addEventListener("resize", function () {
        setContainerPosition();
    });

    window.addEventListener("load", function () {
        setContainerPosition();
    });

    document.getElementById("left-manager").addEventListener("click", function () {
        modalHandling("#chat-online");
    });

    document.getElementById("top-manager").addEventListener("click", function () {
        modalHandling("#chat-online");
    });

    document.getElementById("left-manager-short").addEventListener("click", function () {
        modalHandling("#chat-online");
    });

    document.getElementById("quit-icon").addEventListener("click", function () {
        modalHandling("#quit");
    });

    document.getElementById("enter-button").addEventListener("click", function () {
        loginHandling(false);
        document.getElementById("top-menu-line").classList.remove("display-off");
    });

    document.getElementById("quit-button").addEventListener("click", function () {
        modalHandling();
        loginHandling(true);
    });
})();
