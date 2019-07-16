"use strict";
(function() {
    let slider = document.getElementById("myRange");
    let output = document.getElementById("myOutput");

    output.innerHTML = slider.value + " hours";

    slider.oninput = function() {
        output.innerHTML = this.value + " hours";
    }
})();
