"use strict";
(function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("myOutput");

    output.innerHTML = slider.value + " hours";

    slider.oninput = function() {
        output.innerHTML = this.value + " hours";
    }
})();
