
var btn = document.getElementsByClassName("button")
var img = document.getElementsByClassName("paneimg")

for (let i = 0; i < img.length; i++) {

    img[i].addEventListener("mouseover", function () {
        img[i].style.transform = "scale(1.2)"
        img[i].style.transition = "0.5s"
    });

    img[i].addEventListener("mouseout", function () {
        img[i].style.transform="scale(1)"

    });
}

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener("mouseover", function () {
        btn[i].style.backgroundColor = "black";
        btn[i].style.color = "white"
        btn[i].style.transition = "0.5s"
        btn[i].style.boxShadow = "0px 0px 0px"
        btn[i].style.cursor = "pointer"
    });



    btn[i].addEventListener("mouseout", function () {
        btn[i].style.backgroundColor = "white";
        btn[i].style.color = "black"
        btn[i].style.transition = "0.5s"
        btn[i].style.boxShadow = "5px 5px 5px gray"
    });
}

function scrolltop() {
    scrollTo(0, 0)
}
function scrolled() {
    document.getElementById("fil").style.position = "sticky"
}
