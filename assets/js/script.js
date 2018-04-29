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
    onComplete: typedFade(self, "#typed-container", "#terminal")
}

var typed = new Typed(".typed", options);
