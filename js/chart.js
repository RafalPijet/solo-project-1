"use strict";
(function () {
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
})();
