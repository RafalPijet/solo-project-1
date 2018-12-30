"use strict";
(function () {
    var leftManager = document.getElementById("left-manager");
    var topManager = document.getElementById("top-manager");
    var leftManagerShort = document.getElementById("left-manager-short");
    var quit = document.getElementById("quit-icon");
    var quitMobile = document.getElementById("quit-icon-mobile");
    var enterButton = document.getElementById("enter-button");
    var mobileMenuLine = document.getElementById("mobile-menu-line");
    var topMenuLine = document.getElementById("top-menu-line");
    var beginOverlay = document.getElementById("begin");
    var loginModal = document.getElementById("login");
    var quitButton = document.getElementById("quit-button");

    function closeLogin() {
        beginOverlay.classList.remove("show");
    }

    function showLogin() {
        beginOverlay.classList.add("show");
        loginModal.classList.add("show");
        topMenuLine.classList.add("display-off");
        mobileMenuLine.classList.add("display-off");
    }

    function closeModal() {
        document.getElementById("overlay").classList.remove("show");
    }

    document.querySelectorAll("#overlay .js--close-modal").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            closeModal();
        })
    })

    document.querySelector("#overlay").addEventListener("click", function (e) {
        if (e.target === this) {
            closeModal();
        }
    })

    document.addEventListener("keyup", function (e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    })

    function openModal(modal) {
        document.querySelectorAll("#overlay > *").forEach(function(modal) {
            modal.classList.remove("show");
        })
        document.querySelector("#overlay").classList.add("show");
        document.querySelector(modal).classList.add("show");
    }

    leftManager.addEventListener("click", function () {
        openModal("#chat-online");
    })

    topManager.addEventListener("click", function () {
        openModal("#chat-online");
    })

    leftManagerShort.addEventListener("click", function () {
        openModal("#chat-online");
    })

    quit.addEventListener("click", function () {
        openModal("#quit");
    })

    quitMobile.addEventListener("click", function () {
        openModal("#quit");
    })

    enterButton.addEventListener("click", function () {
        closeLogin();
        topMenuLine.classList.remove("display-off");
        mobileMenuLine.classList.remove("display-off");
    })

    quitButton.addEventListener("click", function () {
        closeModal();
        showLogin();
    })
})();