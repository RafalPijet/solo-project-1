"use strict";
(function () {
    var btnAddFirst  = document.getElementById("btn-add-first");
    var btnAddSecond = document.getElementById("btn-add-second");
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

    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
            datasets: [{
                label: "Signups",
                backgroundColor: "#8dbec8",
                borderColor: "#8dbec8",
                data: [350, 200, 230, 360, 435, 400, 290, 275, 300, 180],
            },
                {
                    label: "FTD",
                    backgroundColor: "#f29e4e",
                    borderColor: "#f29e4e",
                    data: [410, 170, 300, 280, 460, 120, 205, 505, 315, 220],
                },
                {
                    label: "Earned",
                    backgroundColor: '#71B374',
                    borderColor: '#71B374',
                    data: [ 590, 490, 380, 190, 230, 410, 130, 380, 480, 240],
                    hidden: true,
                }]
        }
    });

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

    btnAddFirst.addEventListener("click", function () {
        openModal("#addUrlModal");
    })

    btnAddSecond.addEventListener("click", function () {
        openModal("#addUrlModal");
    })

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