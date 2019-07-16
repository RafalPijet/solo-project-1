let workField = document.getElementById("field");
let check = false;

function setContainerPosition() {

    if (window.innerWidth <= 992) {
        workField.classList.remove("normal-margin");
        workField.classList.add("low-margin");
    } else if (window.innerWidth > 992 && check == false) {
        workField.classList.add("normal-margin");
        workField.classList.remove("low-margin");
    } else if (window.innerWidth > 992 && check == true) {
        workField.classList.remove("normal-margin");
        workField.classList.add("low-margin");
    }

    if (window.innerWidth <= 768) {
        workField.classList.remove("low-margin");
        workField.classList.remove("container-max-width");
    }
}

function modalHandling(modal) {

    if (modal != undefined) {
        document.querySelectorAll("#overlay > *").forEach(function (modal) {
            modal.classList.remove("show");
        });
        document.querySelector("#overlay").classList.add("show");
        document.querySelector(modal).classList.add("show");
    } else {
        document.getElementById("overlay").classList.remove("show");
    }
}

function loginHandling(isShow) {

    if (isShow) {
        document.getElementById("begin").classList.add("show");
        document.getElementById("login").classList.add("show");
        document.getElementById("top-menu-line").classList.add("display-off");
    } else {
        document.getElementById("begin").classList.remove("show");
    }
}
