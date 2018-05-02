$(document).ready(() =>
{

    function typedFade(self, element1, element2)
    {
        return (self) =>
        {
            setTimeout(() => { $(element1).fadeOut(); }, 2000);
            setTimeout(() => { $(element2).fadeIn(); }, 2100);
        }
    }

    var options =
    {
        stringsElement: "#typed-strings",
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 500,
        cursorChar: "&#9611;",
        smartBackspace: true,
        onComplete: typedFade(self, "#typed-container", "#terminal")
    }

    var typed = new Typed(".typed", options);

    function datetime()
    {
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

        return s
    }

    $("#datetime").append(datetime());

});
