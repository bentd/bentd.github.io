$(document).ready(() => {

    var options = {
        strings: [
          "student",
          "coder",
          "maker",
          "dreamer",
          "friend",
          "entrepreneur",
          "???"
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 750,
        shuffle: true,
        cursorChar: "&#9611;",
        smartBackspace: true,
        loop: true,
        loopCount: Infinity
    };

    var typed = new Typed(".typed", options);

    function datetime() {
        var d = new Date();
        var days = ["Sun ", "Mon " , "Tue ", "Wed ", "Thur ", "Fri ", "Sat "];
        var months = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ", "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "];
        var s = "";

        s += days[d.getDay()];
        s += months[d.getMonth()];
        s += d.getDate() + "  ";
        s += d.getHours() + ":";
        s += d.getMinutes() + ":";
        s += d.getSeconds();

        return s;
    }

    $("#datetime").append(datetime());

});
